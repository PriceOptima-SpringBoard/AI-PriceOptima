import React, { useState } from "react";
import { api } from "../api";

const LivePredictionForm = () => {
  const [form, setForm] = useState({
    ride_distance: 0,
    ride_duration: 0,
    day_of_week: "",
    time_of_day: "",
    traffic_level: "",
    surge_factor: 1,
    weather_condition: "",
    base_fare: 0,
    vehicle_type: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post("/predict_price", form);
      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Prediction failed!");
    }
  };

  return (
    <div className="card">
      <h2>Live Price Prediction</h2>

      <div className="form-grid">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
          />
        ))}
      </div>

      <button onClick={handleSubmit}>Predict</button>

      {result && (
        <div className="result-box">
          <h3>Prediction Result</h3>
          <p>XGBoost: ₹{result.predicted_price_xgb}</p>
          <p>LightGBM: ₹{result.predicted_price_lgb}</p>
          <p><b>Ensemble Price: ₹{result.ensemble_predicted_price}</b></p>
        </div>
      )}
    </div>
  );
};

export default LivePredictionForm;
