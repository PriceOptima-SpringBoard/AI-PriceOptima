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

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        isNaN(Number(e.target.value)) ? e.target.value : Number(e.target.value)
    });
  };

  // Call backend API
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
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-6">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">Live Price Prediction</h2>

      {/* Form grid */}
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="mb-1 text-sm text-gray-600 dark:text-gray-300 capitalize">
              {key.replace(/_/g, " ")}
            </label>

            <input
              name={key}
              placeholder={key.replace(/_/g, " ")}
              value={form[key]}
              onChange={handleChange}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white border focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        ))}
      </div>

      {/* Predict Button */}
      <button
        onClick={handleSubmit}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Predict Price
      </button>

      {/* Result Section */}
      {result && (
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2">Prediction Result</h3>

          <p className="text-gray-700 dark:text-gray-300">
            <strong>XGBoost:</strong> ₹{result.predicted_price_xgb}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>LightGBM:</strong> ₹{result.predicted_price_lgb}
          </p>
          <p className="text-gray-900 dark:text-white text-lg font-bold mt-2">
            Ensemble Price: ₹{result.ensemble_predicted_price}
          </p>
        </div>
      )}
    </div>
  );
};

export default LivePredictionForm;
