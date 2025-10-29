from sklearn.preprocessing import LabelEncoder
import pandas as pd
import os

INPUT_FILE = os.path.join("data", "raw", "dynamic_pricing.csv")
OUTPUT_FILE = os.path.join("data", "cleaned", "cleaned_csv_data.csv")

def load_data(file_path):
    df = pd.read_csv(file_path)
    print("Data loaded. Shape:", df.shape)
    return df

def clean_data(df):
    numeric_cols = df.select_dtypes(include="number").columns
    cat_cols = df.select_dtypes(include="object").columns

    df = df.dropna()

    for col in numeric_cols:
        Q1, Q3 = df[col].quantile([0.25, 0.75])
        IQR = Q3 - Q1
        df = df[~((df[col] < (Q1 - 1.5 * IQR)) | (df[col] > (Q3 + 1.5 * IQR)))]

    df = df.drop_duplicates()

    for col in cat_cols:
        df[col] = LabelEncoder().fit_transform(df[col])

    print("Data cleaned successfully")
    print("Final shape after cleaning:", df.shape)
    return df

def save_data(df, output_file):
    df.to_csv(output_file, index=False)
    print(f"Cleaned data saved to: {output_file}")

def run_pipeline():
    df_raw = load_data(INPUT_FILE)
    df_cleaned = clean_data(df_raw)
    save_data(df_cleaned, OUTPUT_FILE)
    print("Pipeline completed successfully.")
    return df_cleaned

if __name__ == "__main__":
    df_cleaned = run_pipeline()