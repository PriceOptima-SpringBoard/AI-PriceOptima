"""
Driver to run ingestion -> cleaning -> save cleaned data
Run from project root: python run_pipeline.py
"""

#Milestone 2: Data Ingestion Pipeline
import os, sys
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder
from sklearn.impute import SimpleImputer
import warnings
warnings.filterwarnings('ignore')
raw_data_path = "Iris.csv"
cleaned_data_path = "cleaned_Iris.csv"


def ingest_data(file_path):
    print("📥 Reading data from:", file_path)
    df = pd.read_csv(file_path)
    print("✅ Data successfully loaded!")
    print("Shape of data:", df.shape)
    return df

def validate_data(df):
    print("\n🔍 Checking for missing values...")
    missing = df.isnull().sum()
    print(missing)
    return missing

def clean_data(df):
    print("\n🧹 Cleaning data...")  
    df = df.drop_duplicates()
    
    print("✅ Cleaning complete. Shape after cleaning:", df.shape)
    # Impute numeric with median, categorical with mode
    num_cols = df.select_dtypes(include=[np.number]).columns.tolist()
    cat_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()

    # numeric imputer
    num_imputer = SimpleImputer(strategy='median')
    df[num_cols] = num_imputer.fit_transform(df[num_cols])

    # categorical imputer (mode)
    for c in cat_cols:
        df[c] = df[c].fillna(df[c].mode()[0])
    return df

def save_data(df, output_path):
    print("\n💾 Saving cleaned data to:", output_path)
    print("✅ File saved successfully!")
    cleaned_data_path = "cleaned_dynamic_pricing.csv"
    df.to_csv(output_path, index=False)
    print(f"Saved cleaned CSV to {cleaned_data_path}")





def main():
    df = ingest_data(raw_data_path)
    validate_data(df)
    df = clean_data(df)
    save_data(df, cleaned_data_path)


if __name__ == "__main__":
    main()