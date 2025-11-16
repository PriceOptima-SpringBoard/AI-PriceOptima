// Metrics.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const MetricsDisplay = () => {
  // State to hold metrics data
  const [metrics, setMetrics] = useState(null);

  // Fetch metrics once when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:8000/metrics")
      .then((res) => setMetrics(res.data))
      .catch((err) => console.error("Error fetching metrics:", err));
  }, []);

  // Show loading message if metrics not yet loaded
  if (!metrics) return <p>Loading metrics...</p>;

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Model Metrics</h2>
      <p>MAE: {metrics.MAE}</p>
      <p>RMSE: {metrics.RMSE}</p>
      <p>R² Score: {metrics.R2_Score}</p>
      <p>Revenue Lift: {metrics.Revenue_Lift_Percent}%</p>
    </div>
  );
};

export default MetricsDisplay;
