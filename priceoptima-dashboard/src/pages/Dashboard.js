import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, Legend, ResponsiveContainer
} from "recharts";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

// -------- ModelMetrics --------
const ModelMetrics = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/metrics")
      .then((res) => setMetrics(res.data))
      .catch(() => setMetrics(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading model metrics...</p>;
  if (!metrics) return <p>Failed to load metrics.</p>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md mb-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Model Metrics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">MAE</p>
          <p className="text-xl font-bold text-gray-800">{metrics.MAE}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">RMSE</p>
          <p className="text-xl font-bold text-gray-800">{metrics.RMSE}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">R² Score</p>
          <p className="text-xl font-bold text-gray-800">{metrics.R2_Score}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">Revenue Lift</p>
          <p className="text-xl font-bold text-green-600">{metrics.Revenue_Lift_Percent}%</p>
        </div>
      </div>
    </div>
  );
};

// -------- RevenueSimulation --------
const RevenueSimulation = () => {
  const [rides, setRides] = React.useState([
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

  const [results, setResults] = React.useState(null);

  const addRide = () => {
    setRides((prev) => [
      ...prev,
      {
        ride_distance: 0,
        ride_duration: 0,
        day_of_week: "",
        time_of_day: "",
        traffic_level: "",
        surge_factor: 1,
        weather_condition: "",
        base_fare: 0,
        vehicle_type: "",
      },
    ]);
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

  const runSimulation = async () => {
    try {
      const payload = { rides };
      const res = await axios.post("http://127.0.0.1:8000/revenue-simulation", payload);
      setResults(res.data);
    } catch (err) {
      console.error("Simulation error:", err);
      alert("Simulation failed! Check backend logs.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700">Revenue Simulation</h2>
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
          <h4 className="text-xl font-semibold mb-4 text-gray-700">
            Ride {index + 1}
          </h4>

          {/* Delete button only if more than one ride */}
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
                  type={["ride_distance", "ride_duration", "surge_factor", "base_fare"].includes(field) ? "number" : "text"}
                  value={ride[field]}
                  onChange={(e) => updateRide(index, field, e.target.value)}
                  className="border p-2 rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={runSimulation}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
      >
        Run Revenue Simulation
      </button>

      {results && (
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Revenue Summary</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-500">Static Revenue</p>
              <p className="text-xl font-semibold">{results.summary.static_revenue}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-500">XGB Revenue</p>
              <p className="text-xl font-semibold text-blue-600">{results.summary.xgb_dynamic_revenue}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-500">LGB Revenue</p>
              <p className="text-xl font-semibold text-green-600">{results.summary.lgb_dynamic_revenue}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-500">Ensemble Revenue</p>
              <p className="text-xl font-semibold text-orange-600">{results.summary.ensemble_revenue}</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-3 text-gray-700">Model Comparison (Line Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[{
              name: "Model Revenue",
              XGB: results.summary.xgb_dynamic_revenue,
              LGB: results.summary.lgb_dynamic_revenue,
              Ensemble: results.summary.ensemble_revenue,
            }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="XGB" stroke="#3b82f6" strokeWidth={3} />
              <Line type="monotone" dataKey="LGB" stroke="#10b981" strokeWidth={3} />
              <Line type="monotone" dataKey="Ensemble" stroke="#f97316" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>

          <h3 className="text-xl font-semibold mt-10 mb-3 text-gray-700">Revenue Comparison (Bar Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[{
              name: "Revenue",
              Static: results.summary.static_revenue,
              Ensemble: results.summary.ensemble_revenue,
            }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Static" fill="#6366f1" />
              <Bar dataKey="Ensemble" fill="#34d399" />
            </BarChart>
          </ResponsiveContainer>

          <h3 className="text-xl font-semibold mt-10 mb-3 text-gray-700">Ride-wise Revenue Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full border mt-3">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Base Fare</th>
                  <th className="p-2 border">Pred XGB</th>
                  <th className="p-2 border">Pred LGB</th>
                  <th className="p-2 border">Pred Avg</th>
                </tr>
              </thead>
              <tbody>
                {results.details.map((row, i) => (
                  <tr key={i} className="text-center border">
                    <td className="p-2 border">{row.base_fare}</td>
                    <td className="p-2 border">{row.Pred_XGB}</td>
                    <td className="p-2 border">{row.Pred_LGB}</td>
                    <td className="p-2 border">{row.Pred_Avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

// -------- LivePredictionForm --------
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
  const [rides, setRides] = useState([ { ...emptyRide } ]);
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

  const handleSubmit = async () => {
    try {
      const payload = { rides };
      const res = await axios.post("http://127.0.0.1:8000/predict_price_bulk", payload);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Prediction failed! Check backend.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
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

      {result && (
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Prediction Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.map((pred, i) => (
              <div key={i} className="bg-gray-100 p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2 text-gray-700">Ride {i + 1}</h4>
                <p className="text-gray-500">XGBoost Prediction</p>
                <p className="text-xl font-semibold text-blue-600">₹{pred.predicted_price_xgb}</p>

                <p className="text-gray-500 mt-3">LightGBM Prediction</p>
                <p className="text-xl font-semibold text-green-600">₹{pred.predicted_price_lgb}</p>

                <p className="text-gray-500 mt-3">Ensemble Prediction</p>
                <p className="text-xl font-semibold text-orange-600">₹{pred.ensemble_predicted_price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// -------- Dashboard combining all --------
export default function PriceOptimaDashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">PriceOptima Dashboard</h1>

      <ModelMetrics />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <RevenueSimulation />
        </div>

        <div className="md:w-1/2">
          <LivePredictionForm />
        </div>
      </div>
    </div>
  );
}
