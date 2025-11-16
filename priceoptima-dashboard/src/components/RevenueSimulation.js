// RevenueSimulation.js
import React, { useState } from "react";
import axios from "axios";

const RevenueSimulation = () => {
  // Initialize state with one example ride
  const [rides, setRides] = useState([
    {
      ride_distance: 10,
      ride_duration: 25,
      day_of_week: "Monday",
      time_of_day: "Morning",
      traffic_level: "Medium",
      surge_factor: 1.2,
      weather_condition: "Clear",
      base_fare: 200,
      vehicle_type: "Sedan",
    },
  ]);

  // State for simulation results from backend
  const [results, setResults] = useState(null);

  // Update ride data on input change
  const updateRide = (index, field, value) => {
    const updated = [...rides];
    // Convert numeric fields to floats, else keep as string
    if (
      ["ride_distance", "ride_duration", "surge_factor", "base_fare"].includes(field)
    ) {
      updated[index][field] = value === "" ? 0 : parseFloat(value);
    } else {
      updated[index][field] = value;
    }
    setRides(updated);
  };

  // Call backend to run revenue simulation
  const runSimulation = async () => {
    try {
      const payload = { rides };
      const res = await axios.post("http://localhost:8000/revenue-simulation", payload);
      setResults(res.data);
    } catch (err) {
      console.error("Simulation error:", err);
      alert("Simulation failed! Check backend logs.");
    }
  };

  return (
    <div>
      <h2>Revenue Simulation</h2>

      {/* Render form for each ride */}
      {rides.map((ride, index) => (
        <div
          key={index}
          style={{ marginBottom: "20px", padding: 10, border: "1px solid #ddd" }}
        >
          <h4>Ride {index + 1}</h4>

          <label>Distance:</label>
          <input
            type="number"
            value={ride.ride_distance}
            onChange={(e) => updateRide(index, "ride_distance", e.target.value)}
          />

          <br />
          <label>Duration:</label>
          <input
            type="number"
            value={ride.ride_duration}
            onChange={(e) => updateRide(index, "ride_duration", e.target.value)}
          />

          <br />
          <label>Day of Week:</label>
          <input
            type="text"
            value={ride.day_of_week}
            onChange={(e) => updateRide(index, "day_of_week", e.target.value)}
          />

          <br />
          <label>Time of Day:</label>
          <input
            type="text"
            value={ride.time_of_day}
            onChange={(e) => updateRide(index, "time_of_day", e.target.value)}
          />

          <br />
          <label>Traffic Level:</label>
          <input
            type="text"
            value={ride.traffic_level}
            onChange={(e) => updateRide(index, "traffic_level", e.target.value)}
          />

          <br />
          <label>Surge Factor:</label>
          <input
            type="number"
            value={ride.surge_factor}
            onChange={(e) => updateRide(index, "surge_factor", e.target.value)}
          />

          <br />
          <label>Weather Condition:</label>
          <input
            type="text"
            value={ride.weather_condition}
            onChange={(e) => updateRide(index, "weather_condition", e.target.value)}
          />

          <br />
          <label>Base Fare:</label>
          <input
            type="number"
            value={ride.base_fare}
            onChange={(e) => updateRide(index, "base_fare", e.target.value)}
          />

          <br />
          <label>Vehicle Type:</label>
          <input
            type="text"
            value={ride.vehicle_type}
            onChange={(e) => updateRide(index, "vehicle_type", e.target.value)}
          />
        </div>
      ))}

      {/* Button to trigger backend simulation */}
      <button onClick={runSimulation}>Run Revenue Simulation</button>

      {/* Show results after simulation */}
      {results && (
        <div style={{ marginTop: 20 }}>
          <h3>Revenue Summary</h3>

          <p>Static Revenue: {results.summary.static_revenue}</p>
          <p>XGB Dynamic Revenue: {results.summary.xgb_dynamic_revenue}</p>
          <p>LGB Dynamic Revenue: {results.summary.lgb_dynamic_revenue}</p>
          <p>Ensemble Revenue: {results.summary.ensemble_revenue}</p>

          <h4>Revenue Lift (%)</h4>
          <p>XGB Lift: {results.summary.xgb_lift_percent}%</p>
          <p>LGB Lift: {results.summary.lgb_lift_percent}%</p>
          <p>Ensemble Lift: {results.summary.ensemble_lift_percent}%</p>

          <h3 style={{ marginTop: 20 }}>Ride Details</h3>
          {results.details &&
            results.details.map((item, i) => (
              <div key={i} style={{ padding: 10, border: "1px solid #eee" }}>
                <p>Base Fare: {item.base_fare}</p>
                <p>Pred XGB: {item.Pred_XGB}</p>
                <p>Pred LGB: {item.Pred_LGB}</p>
                <p>Pred Avg: {item.Pred_Avg}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default RevenueSimulation;
