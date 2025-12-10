import joblib
import pandas as pd
import numpy as np
import os

class PricingModel:
    def __init__(self, model_path='pricing_model_artifacts.pkl'):
        self.artifacts = None
        self.model = None
        self.le_location = None
        self.le_time = None
        self.loyalty_mapping = None
        self.vehicle_mapping = None
        self.feature_cols = None
        self.load(model_path)

    def load(self, model_path):
        if os.path.exists(model_path):
            print(f"Loading model artifacts from {model_path}")
            self.artifacts = joblib.load(model_path)
            self.model = self.artifacts['model']
            self.le_location = self.artifacts['le_location']
            self.le_time = self.artifacts['le_time']
            self.loyalty_mapping = self.artifacts['loyalty_mapping']
            self.vehicle_mapping = self.artifacts['vehicle_mapping']
            self.feature_cols = self.artifacts['feature_cols']
        else:
            print(f"Model artifacts not found at {model_path}")

    def predict(self, input_data):
        if not self.model:
            raise Exception("Model not loaded")
        
        df = pd.DataFrame(input_data)
        
        df['Demand_Ratio'] = df['Number_of_Riders'] / (df['Number_of_Drivers'] + 1e-5)
        df['Supply_Constraint'] = (df['Number_of_Riders'] > df['Number_of_Drivers']).astype(int)
        df['Market_Saturation'] = df['Number_of_Drivers'] / (df['Number_of_Riders'] + 1e-5)
        df['Rider_Loyalty_Score'] = df['Number_of_Past_Rides'] * 0.5 + df['Average_Ratings'] * 10
        df['Duration_Per_Rider'] = df['Expected_Ride_Duration'] / (df['Number_of_Riders'] + 1e-5)
        df['Capacity_Utilization'] = df['Demand_Ratio'] / (df['Demand_Ratio'].max() + 1e-5)
        
        premium_vehicle = df['Vehicle_Type'].map(self.vehicle_mapping)
        df['Premium_Factor'] = premium_vehicle * df['Average_Ratings']
        df['Surge_Indicator'] = 0 
        
        df['Location_Encoded'] = self.le_location.transform(df['Location_Category'])
        df['Time_Encoded'] = self.le_time.transform(df['Time_of_Booking'])
        df['Loyalty_Encoded'] = df['Customer_Loyalty_Status'].map(self.loyalty_mapping)
        df['Vehicle_Encoded'] = df['Vehicle_Type'].map(self.vehicle_mapping)
        
        X = df[self.feature_cols]
        prediction = self.model.predict(X)
        return prediction.tolist()

pricing_model = PricingModel()
