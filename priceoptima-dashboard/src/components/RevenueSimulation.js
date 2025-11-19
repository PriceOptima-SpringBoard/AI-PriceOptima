// RevenueSimulation.js
import React, { useState } from "react";
import axios from "axios";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, Legend
} from "recharts";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const RevenueSimulation = () => {
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

  const [results, setResults] = useState(null);

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
<div className="max-w-8xl mx-auto px-28 lg:px-28">
  <div className="p-6 bg-white rounded-xl shadow-md mt-6">

{/* ORIGINAL CARD */}

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
          <div key={index} className="p-5 bg-gray-50 rounded-lg shadow-sm border mb-6 relative">
            <h4 className="text-xl font-semibold mb-4 text-gray-700">
              Ride {index + 1}
            </h4>

            <button
              onClick={() => deleteRide(index)}
              className="absolute top-3 right-3 text-red-600 hover:text-red-800"
              aria-label={`Delete Ride ${index + 1}`}
              title={`Delete Ride ${index + 1}`}
            >
              <TrashIcon className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(ride).map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="font-medium text-gray-600 mb-1">
                    {field.replace("_", " ").toUpperCase()}
                  </label>

                  <input
                    type={typeof ride[field] === "number" ? "number" : "text"}
                    value={ride[field]}
                    onChange={(e) => updateRide(index, field, e.target.value)}
                    className="
                      border p-2 rounded-lg 
                      bg-white text-gray-900 
                      dark:text-black dark:border-gray-600 
                      focus:ring-2 focus:ring-blue-400
                    "
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
                <p className="text-xl font-semibold text-blue-600">
                  {results.summary.xgb_dynamic_revenue}
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="text-gray-500">LGB Revenue</p>
                <p className="text-xl font-semibold text-green-600">
                  {results.summary.lgb_dynamic_revenue}
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <p className="text-gray-500">Ensemble Revenue</p>
                <p className="text-xl font-semibold text-orange-600">
                  {results.summary.ensemble_revenue}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-3 text-gray-700">
              Model Comparison (Line Chart)
            </h3>

            <LineChart width={650} height={300} data={[
              {
                name: "Model Revenue",
                XGB: results.summary.xgb_dynamic_revenue,
                LGB: results.summary.lgb_dynamic_revenue,
                Ensemble: results.summary.ensemble_revenue,
              }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="XGB" stroke="#3b82f6" strokeWidth={3} />
              <Line type="monotone" dataKey="LGB" stroke="#10b981" strokeWidth={3} />
              <Line type="monotone" dataKey="Ensemble" stroke="#f97316" strokeWidth={3} />
            </LineChart>

            <h3 className="text-xl font-semibold mt-10 mb-3 text-gray-700">
              Revenue Comparison (Bar Chart)
            </h3>

            <BarChart width={650} height={300} data={[
              {
                name: "Revenue",
                Static: results.summary.static_revenue,
                Ensemble: results.summary.ensemble_revenue,
              }
            ]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Static" fill="#6366f1" />
              <Bar dataKey="Ensemble" fill="#34d399" />
            </BarChart>

            <h3 className="text-xl font-semibold mt-10 mb-3 text-gray-700">
              Ride-wise Revenue Table
            </h3>

            <table className="w-full border border-gray-400 mt-3 bg-white">
              <thead className="bg-gray-300 text-black border-b border-gray-400">
                <tr>
                  <th className="p-2 border border-gray-400 text-black">Base Fare</th>
                  <th className="p-2 border border-gray-400 text-black">Pred XGB</th>
                  <th className="p-2 border border-gray-400 text-black">Pred LGB</th>
                  <th className="p-2 border border-gray-400 text-black">Pred Avg</th>
                </tr>
              </thead>

              <tbody>
                {results.details.map((row, i) => (
                  <tr key={i} className="text-center bg-white text-black border border-gray-400">
                    <td className="p-2 border border-gray-400 text-black">{row.base_fare}</td>
                    <td className="p-2 border border-gray-400 text-black">{row.Pred_XGB}</td>
                    <td className="p-2 border border-gray-400 text-black">{row.Pred_LGB}</td>
                    <td className="p-2 border border-gray-400 text-black">{row.Pred_Avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div> // END WRAPPER
  );
};

export default RevenueSimulation;
