import React, { useState } from "react";
import { api } from "../api"; // Your axios instance or however you call your API
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const emptyRide = {
  ride_distance: 0,
  ride_duration: 0,
  day_of_week: "",
  time_of_day: "",
  traffic_level: "",
  surge_factor: 1,
  weather_condition: "",
  base_fare: 0,
  vehicle_type: ""
};

const LivePredictionForm = () => {
  const [rides, setRides] = useState([{ ...emptyRide }]);
  const [result, setResult] = useState(null);

  const addRide = () => {
    setRides((prev) => [...prev, { ...emptyRide }]);
  };

  const deleteRide = (index) => {
    setRides((prev) => prev.filter((_, i) => i !== index));
  };

  const updateRide = (index, field, value) => {
    const updated = [...rides];
    updated[index][field] =
      ["ride_distance", "ride_duration", "surge_factor", "base_fare"].includes(field)
        ? parseFloat(value) || 0
        : value;
    setRides(updated);
  };

  // New submit handler: send each ride individually and collect results
  const handleSubmit = async () => {
    try {
      const promises = rides.map((ride) => api.post("/predict_price", ride));
      const responses = await Promise.all(promises);
      const allResults = responses.map((res) => res.data);
      setResult(allResults);
    } catch (err) {
      console.error(err);
      alert("Prediction failed! Check backend.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md mt-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700">Live Price Prediction</h2>
        <button
          onClick={addRide}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          aria-label="Add Ride"
        >
          <PlusIcon className="h-5 w-5" />
          Add Ride
        </button>
      </div>

      {rides.map((ride, index) => (
        <div
          key={index}
          className="p-5 bg-gray-50 rounded-lg shadow-sm border mb-6 relative"
        >
          <h4 className="text-xl font-semibold mb-4 text-gray-700">Ride {index + 1}</h4>

          {rides.length > 1 && (
            <button
              onClick={() => deleteRide(index)}
              className="absolute top-3 right-3 text-red-600 hover:text-red-800"
              aria-label={`Delete Ride ${index + 1}`}
              title={`Delete Ride ${index + 1}`}
            >
              <TrashIcon className="h-6 w-6" />
            </button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(ride).map((field) => (
              <div key={field} className="flex flex-col">
                <label className="font-medium text-gray-600 mb-1">
                  {field.replace(/_/g, " ").toUpperCase()}
                </label>

                <input
                  name={field}
                  value={ride[field]}
                  onChange={(e) => updateRide(index, field, e.target.value)}
                  type={["ride_distance", "ride_duration", "surge_factor", "base_fare"].includes(field)
                    ? "number"
                    : "text"
                  }
                  className="border p-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        Predict Price
      </button>

      {/* Display all prediction results */}
      {result && (
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Prediction Summary</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.map((pred, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2 text-gray-700">Ride {i + 1}</h4>
                <p className="text-gray-500">XGBoost Prediction</p>
                <p className="text-xl font-semibold text-blue-600">
                  ₹{pred.ensemble_predicted_price ? pred.ensemble_predicted_price.toFixed(2) : "N/A"}
                </p>

                <p className="text-gray-500 mt-3">LightGBM Prediction</p>
                <p className="text-xl font-semibold text-green-600">
                  ₹{pred.predicted_price_lgb ? pred.predicted_price_lgb.toFixed(2) : "N/A"}
                </p>

                <p className="text-gray-500 mt-3">Ensemble Prediction</p>
                <p className="text-xl font-semibold text-orange-600">
                  ₹{pred.ensemble_predicted_price ? pred.ensemble_predicted_price.toFixed(2) : "N/A"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LivePredictionForm;
