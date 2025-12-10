import pandas as pd
import json
import os

def load_data(path):
    if os.path.exists(path):
        return pd.read_csv(path)
    return None

def save_json(data, path):
    with open(path, 'w') as f:
        json.dump(data, f)

def load_json(path):
    if os.path.exists(path):
        with open(path, 'r') as f:
            return json.load(f)
    return None
