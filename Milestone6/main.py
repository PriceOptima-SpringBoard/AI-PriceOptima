from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import pandas as pd
import joblib
import traceback

# Initialize FastAPI app with metadata
app = FastAPI(
    title="AI PriceOptima - Dynamic Pricing API",
    description="API service for generating optimal prices using trained ML models",
    version="1.0.0"
)

# Enable CORS middleware so frontend (React) can access this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins — restrict in production for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_DIR = "/app"  # Path where your models are stored in Docker container

# Load pre-trained ML models and feature columns
try:
    xgb_model = joblib.load(f"{MODEL_DIR}/xgb_pricing_model.pkl")
    lgb_model = joblib.load(f"{MODEL_DIR}/lgb_pricing_model.pkl")
    model_columns = joblib.load(f"{MODEL_DIR}/model_columns.pkl")
    print("✅ Models and feature columns loaded successfully.")
except Exception as e:
    print(f"❌ Error loading models: {e}")
    raise e

# Define Pydantic model for a single ride's data validation
class RideData(BaseModel):
    ride_distance: float
    ride_duration: float
    day_of_week: str
    time_of_day: str
    traffic_level: str
    surge_factor: float
    weather_condition: str
    base_fare: float
    vehicle_type: str

# Define Pydantic model for batch of rides + optional base revenue
class RideBatch(BaseModel):
    rides: List[RideData]
    base_revenue: float = 0.0

# Root endpoint to confirm API is running
@app.get("/")
def root():
    return {"message": "🚀 Welcome to AI PriceOptima Dynamic Pricing API"}

# Helper function: preprocess incoming ride data to match training feature columns
def preprocess_input(data: dict) -> pd.DataFrame:
    df = pd.DataFrame([data])
    df_enc = pd.get_dummies(df)  # One-hot encode categorical features
    # Reindex columns to match training model columns, filling missing with zeros
    df_enc = df_enc.reindex(columns=model_columns, fill_value=0)
    return df_enc

# Endpoint to predict price for a single ride
@app.post("/predict_price")
def predict_price(data: RideData):
    try:
        print("🔹 Incoming data:", data.dict())

        # Preprocess input data
        df = preprocess_input(data.dict())
        print(f"🔹 Encoded features shape: {df.shape}")

        # Predict using both models
        pred_xgb = float(xgb_model.predict(df)[0])
        pred_lgb = float(lgb_model.predict(df)[0])
        # Average predictions
        pred_avg = round((pred_xgb + pred_lgb) / 2, 2)

        return {
            "input_data": data.dict(),
            "predicted_price_xgb": round(pred_xgb, 2),
            "predicted_price_lgb": round(pred_lgb, 2),
            "ensemble_predicted_price": pred_avg
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

# Static metrics endpoint (for example)
@app.get("/metrics")
def get_metrics():
    return {
        "MAE": 58.3,
        "RMSE": 78.9,
        "R2_Score": 0.83,
        "Revenue_Lift_Percent": 12.5
    }

# Endpoint to run revenue simulation for batch of rides
@app.post("/revenue-simulation")
def simulate_revenue(batch: RideBatch):
    try:
        # Validate if rides list is empty
        if not batch.rides:
            raise HTTPException(status_code=400, detail="No rides provided for simulation")

        # Convert list of RideData to pandas DataFrame
        df = pd.DataFrame([ride.dict() for ride in batch.rides])

        # One-hot encode features to match model training
        df_enc = pd.get_dummies(df)
        df_enc = df_enc.reindex(columns=model_columns, fill_value=0)

        # Predict dynamic prices using both models
        df["Pred_XGB"] = xgb_model.predict(df_enc)
        df["Pred_LGB"] = lgb_model.predict(df_enc)
        df["Pred_Avg"] = (df["Pred_XGB"] + df["Pred_LGB"]) / 2

        # Calculate static revenue from input or sum of base fares if not provided
        static_rev = batch.base_revenue if batch.base_revenue > 0 else df["base_fare"].sum()

        # Sum of predicted revenues
        dyn_xgb_rev = df["Pred_XGB"].sum()
        dyn_lgb_rev = df["Pred_LGB"].sum()
        dyn_avg_rev = df["Pred_Avg"].sum()

        # Return summary and detailed results, converting numpy floats to native Python float
        return {
            "summary": {
                "static_revenue": round(float(static_rev), 2),
                "xgb_dynamic_revenue": round(float(dyn_xgb_rev), 2),
                "lgb_dynamic_revenue": round(float(dyn_lgb_rev), 2),
                "ensemble_revenue": round(float(dyn_avg_rev), 2),
                "xgb_lift_percent": round(float(((dyn_xgb_rev / static_rev) - 1) * 100), 2),
                "lgb_lift_percent": round(float(((dyn_lgb_rev / static_rev) - 1) * 100), 2),
                "ensemble_lift_percent": round(float(((dyn_avg_rev / static_rev) - 1) * 100), 2),
            },
            "details": [
                {
                    "base_fare": float(row["base_fare"]),
                    "Pred_XGB": float(row["Pred_XGB"]),
                    "Pred_LGB": float(row["Pred_LGB"]),
                    "Pred_Avg": float(row["Pred_Avg"]),
                }
                for _, row in df.iterrows()
            ],
        }

    except Exception as e:
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Revenue simulation failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    # Run the API server
    uvicorn.run("main:app", host="0.0.0.0", port=8000)
