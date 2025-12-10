
import pandas as pd
import numpy as np
import xgboost as xgb
import lightgbm as lgb
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import mean_squared_error, r2_score
import joblib
import os
import json

def train_and_save():
    # Load data
    print("Loading data...")
    data_path = "../../Data/raw/dynamic_pricing.csv"
    if not os.path.exists(data_path):
        data_path = "e:/AI-PriceOptima/Data/raw/dynamic_pricing.csv"
    
    if not os.path.exists(data_path):
        print(f"Error: Data file not found at {data_path}")
        return

    df = pd.read_csv(data_path)
    
    # Preprocessing
    print("Preprocessing...")
    df_processed = df.copy()
    
    # Feature Engineering
    df_processed['Demand_Ratio'] = df_processed['Number_of_Riders'] / (df_processed['Number_of_Drivers'] + 1e-5)
    df_processed['Supply_Constraint'] = (df_processed['Number_of_Riders'] > df_processed['Number_of_Drivers']).astype(int)
    df_processed['Market_Saturation'] = df_processed['Number_of_Drivers'] / (df_processed['Number_of_Riders'] + 1e-5)
    df_processed['Rider_Loyalty_Score'] = df_processed['Number_of_Past_Rides'] * 0.5 + df_processed['Average_Ratings'] * 10
    df_processed['Duration_Per_Rider'] = df_processed['Expected_Ride_Duration'] / (df_processed['Number_of_Riders'] + 1e-5)
    df_processed['Capacity_Utilization'] = df_processed['Demand_Ratio'] / (df_processed['Demand_Ratio'].max() + 1e-5)
    
    vehicle_mapping = {'Economy': 0, 'Premium': 1}
    premium_vehicle = df_processed['Vehicle_Type'].map(vehicle_mapping)
    df_processed['Premium_Factor'] = premium_vehicle * df_processed['Average_Ratings']
    
    df_processed['Surge_Indicator'] = (df_processed['Demand_Ratio'] > df_processed['Demand_Ratio'].quantile(0.75)).astype(int)
    
    # Encoders
    le_location = LabelEncoder()
    df_processed['Location_Encoded'] = le_location.fit_transform(df_processed['Location_Category'])
    
    le_time = LabelEncoder()
    df_processed['Time_Encoded'] = le_time.fit_transform(df_processed['Time_of_Booking'])
    
    loyalty_mapping = {'Regular': 0, 'Silver': 1, 'Gold': 2}
    df_processed['Loyalty_Encoded'] = df_processed['Customer_Loyalty_Status'].map(loyalty_mapping)
    
    df_processed['Vehicle_Encoded'] = df_processed['Vehicle_Type'].map(vehicle_mapping)
    
    # Feature selection
    feature_cols = ['Number_of_Riders', 'Number_of_Drivers', 'Number_of_Past_Rides', 
                    'Average_Ratings', 'Expected_Ride_Duration', 'Demand_Ratio', 
                    'Supply_Constraint', 'Location_Encoded', 'Time_Encoded', 
                    'Loyalty_Encoded', 'Vehicle_Encoded', 'Market_Saturation',
                    'Rider_Loyalty_Score', 'Duration_Per_Rider', 'Capacity_Utilization',
                    'Premium_Factor', 'Surge_Indicator']
    
    X = df_processed[feature_cols]
    y = df_processed['Historical_Cost_of_Ride']
    
    # Split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train LightGBM
    print("Training LightGBM model...")
    lgb_model = lgb.LGBMRegressor(
        n_estimators=300,
        max_depth=8,
        learning_rate=0.03,
        subsample=0.9,
        colsample_bytree=0.9,
        min_child_samples=20,
        reg_alpha=0.1,
        reg_lambda=0.1,
        random_state=42,
        n_jobs=-1,
        verbose=-1
    )
    
    lgb_model.fit(X_train, y_train)
    
    # Evaluate
    preds = lgb_model.predict(X_test)
    rmse = np.sqrt(mean_squared_error(y_test, preds))
    r2 = r2_score(y_test, preds)
    print(f"Model trained. RMSE: {rmse:.2f}, R2: {r2:.4f}")
    
    # Save artifacts
    print("Saving artifacts...")
    artifacts = {
        'model': lgb_model,
        'le_location': le_location,
        'le_time': le_time,
        'loyalty_mapping': loyalty_mapping,
        'vehicle_mapping': vehicle_mapping,
        'feature_cols': feature_cols
    }
    
    joblib.dump(artifacts, 'pricing_model_artifacts.pkl')
    
    # Save Feature Importance
    importance = pd.DataFrame({
        'feature': feature_cols,
        'importance': lgb_model.feature_importances_
    }).sort_values('importance', ascending=False)
    importance.to_json('feature_importance.json', orient='records')

    print("Done.")

if __name__ == "__main__":
    train_and_save()
