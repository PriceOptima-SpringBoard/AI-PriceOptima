import pandas as pd
import numpy as np
from typing import Dict, Any

# 1. MAPPINGS & CONFIGURATION
LOYALTY_MAP = {'Regular': 0, 'Silver': 1, 'Gold': 2}
OHE_COLS = ['Location_Category', 'Time_of_Booking', 'Vehicle_Type']

# List of all final 14 feature columns in the EXACT order the model was trained on.
FEATURE_COLS = [
    'Number_of_Riders', 
    'Number_of_Drivers', 
    'Customer_Loyalty_Status', 
    'Number_of_Past_Rides', 
    'Average_Ratings', 
    'Expected_Ride_Duration', 
    # --> THE TWO MISSING DERIVED FEATURES ARE HERE <--
    'Demand_Supply_Ratio', 
    'Ride_Experience', 
    # ------------------------------------------------
    'Location_Category_Suburban', 
    'Location_Category_Urban', 
    'Time_of_Booking_Evening', 
    'Time_of_Booking_Morning', 
    'Time_of_Booking_Night', 
    'Vehicle_Type_Premium'
]


def preprocess_data(raw_data: Dict[str, Any]) -> pd.DataFrame:
    """
    Applies all 4 preprocessing steps (including 2 feature engineering steps) 
    to the raw input data, ensuring the output has 14 features.
    """
    # 1. Convert raw input dict to a DataFrame
    df = pd.DataFrame([raw_data])

    # --- Preprocessing Steps ---

    # 2. FEATURE ENGINEERING (DEMAND/SUPPLY and EXPERIENCE)
    # THIS WAS THE MISSING STEP!
    df['Demand_Supply_Ratio'] = df['Number_of_Riders'] / (df['Number_of_Drivers'] + 1)
    df['Ride_Experience'] = df['Number_of_Past_Rides'] * df['Average_Ratings']

    # 3. Ordinal Mapping for Loyalty Status
    df['Customer_Loyalty_Status'] = df['Customer_Loyalty_Status'].map(LOYALTY_MAP)

    # 4. One-Hot Encoding (OHE) for nominal features (drop_first=True)
    df = pd.get_dummies(df, columns=OHE_COLS, drop_first=True)

    # --- Critical Step: Column Alignment (14 Columns) ---
    final_df = pd.DataFrame(columns=FEATURE_COLS)
    
    # Iterate over the one row of processed data
    for col in FEATURE_COLS:
        if col in df.columns:
            # Transfer the value if the column exists (e.g., 'Number_of_Riders' or 'Location_Category_Urban')
            final_df[col] = df[col]
        else:
            # Add missing OHE columns as 0 (e.g., if the location is 'Rural', 'Urban' and 'Suburban' are 0)
            final_df[col] = 0
            
    # Remove any extra columns created by OHE that were not in the training set
    final_df = final_df[FEATURE_COLS]

    return final_df.astype(float) # Ensure all features are numeric for the model