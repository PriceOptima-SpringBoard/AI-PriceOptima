import React, { useEffect, useState } from "react";
import axios from "axios";

const MetricsDisplay = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/metrics")
      .then((res) => setMetrics(res.data))
      .catch((err) => console.error("Error fetching metrics:", err));
  }, []);

  if (!metrics) return <p>Loading metrics...</p>;

  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Model Metrics</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">MAE</p>
          <p className="text-xl font-bold text-gray-800">{metrics.MAE}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">RMSE</p>
          <p className="text-xl font-bold text-gray-800">{metrics.RMSE}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">R² Score</p>
          <p className="text-xl font-bold text-gray-800">{metrics.R2_Score}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-sm">Revenue Lift</p>
          <p className="text-xl font-bold text-green-600">
            {metrics.Revenue_Lift_Percent}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
