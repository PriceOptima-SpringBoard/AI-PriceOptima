import pandas as pd

def load_dataset(file_path):
    try:
        df = pd.read_csv(file_path)
        print("Dataset loaded successfully.")
        return df
    except Exception as e:
        print(f"Failed to load dataset: {e}")
        return None

def clean_data(df):
    df = df.drop_duplicates()
    for col in df.columns:
        if df[col].isnull().any():
            if df[col].dtype == 'object':
                df[col].fillna(df[col].mode()[0], inplace=True)
            else:
                df[col].fillna(df[col].median(), inplace=True)
    print("Cleaned missing values and removed duplicates.")
    return df

def encode_categoricals(df):
    for col in df.select_dtypes(include='object').columns:
        unique_vals = df[col].unique()
        mapping = {val: idx for idx, val in enumerate(unique_vals)}
        df[col] = df[col].map(mapping)
    print("Encoded categorical columns.")
    return df

def preprocess_pipeline(file_path):
    df = load_dataset(file_path)
    if df is not None:
        df = clean_data(df)
        df = encode_categoricals(df)
        print("Preprocessing complete.")
        return df
    else:
        print("Pipeline aborted due to loading error.")
        return None

if __name__ == "__main__":
    processed_df = preprocess_pipeline("dynamic_pricing.csv")
    if processed_df is not None:
        print("Preview of processed data:")
        print(processed_df.head())