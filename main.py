import joblib
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import numpy as np

# --- NEW IMPORT ---
from fastapi.middleware.cors import CORSMiddleware 

# --- 1. Import Preprocessing Logic ---
from preprocessor import preprocess_data

# 2. Define the Input Data Schema (Pydantic Model)
class RideFeatures(BaseModel):
    Number_of_Riders: int
    Number_of_Drivers: int
    Number_of_Past_Rides: int
    Average_Ratings: float
    Expected_Ride_Duration: int
    Location_Category: str
    Customer_Loyalty_Status: str
    Time_of_Booking: str
    Vehicle_Type: str

# 3. Initialize App and Load Model
app = FastAPI(title="Dynamic Pricing Predictor")

# --- CORS CONFIGURATION (THE FIX!) ---
origins = [
    "http://localhost:3000",  # Your React Frontend URL
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows GET, POST, OPTIONS, etc.
    allow_headers=["*"],  # Allows all headers
)
# -----------------------------------

try:
    model = joblib.load('lgbm_model.pkl')
except FileNotFoundError:
    print("FATAL ERROR: lgbm_model.pkl not found. Please save your model.")
    model = None

# 4. Prediction Endpoint
@app.post("/predict_price")
def predict_price(features: RideFeatures):
    if model is None:
        return {"error": "Model failed to load."}

    # Use the imported function to process the raw input
    processed_data = preprocess_data(features.dict())
    
    # Prediction (on log scale)
    log_prediction = model.predict(processed_data)[0]
    
    # Reverse log-transformation (np.expm1 is the inverse of np.log1p)
    predicted_price = float(np.expm1(log_prediction))
    
    return {
        "predicted_price": round(predicted_price, 2)
    }

# Health check endpoint
@app.get("/")
def read_root():
    return {"status": "Model service is operational"}