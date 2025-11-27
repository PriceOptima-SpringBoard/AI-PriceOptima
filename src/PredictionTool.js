// frontend/src/PredictionTool.js

import React, { useState } from 'react';
import axios from 'axios';

// --- Static Options for Dropdowns ---
const CATEGORY_OPTIONS = ['Urban', 'Suburban', 'Rural'];
const LOYALTY_OPTIONS = ['Regular', 'Silver', 'Gold'];
const TIME_OPTIONS = ['Morning', 'Afternoon', 'Evening', 'Night'];
const VEHICLE_OPTIONS = ['Economy', 'Premium'];

function PredictionTool() {
  // 1. STATE MANAGEMENT: Store form data and results
  const [formData, setFormData] = useState({
    Number_of_Riders: 50,
    Number_of_Drivers: 30,
    Number_of_Past_Rides: 50,
    Average_Ratings: 4.5,
    Expected_Ride_Duration: 60,
    Location_Category: 'Urban',
    Customer_Loyalty_Status: 'Gold',
    Time_of_Booking: 'Morning',
    Vehicle_Type: 'Premium',
  });

  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 2. HANDLERS
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'number' ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPredictedPrice(null);
    setError('');

    try {
      // 🔥 FIXED URL: FastAPI runs on 127.0.0.1, NOT localhost
      const response = await axios.post(
        'http://127.0.0.1:8000/predict_price',
        formData
      );

      setPredictedPrice(response.data.predicted_price);
    } catch (err) {
      console.error('API Error:', err);
      setError(
        'Prediction failed. Ensure the FastAPI service is running at http://127.0.0.1:8000.'
      );
    } finally {
      setLoading(false);
    }
  };

  // 3. DERIVED FEATURES
  const demandSupplyRatio = (
    formData.Number_of_Riders / (formData.Number_of_Drivers + 1)
  ).toFixed(2);

  const rideExperience = (
    formData.Number_of_Past_Rides * formData.Average_Ratings
  ).toFixed(2);

  return (
    <div className="min-h-screen p-6 lg:p-10 bg-gradient-to-br from-slate-950 via-slate-950 to-black">
      <div className="max-w-6xl mx-auto">
        <div
          className="
            group relative p-6 lg:p-8 rounded-[34px]
            bg-slate-950/80
            border border-slate-800/80
            shadow-soft
            backdrop-blur-2xl
            transition-all duration-500
            hover:shadow-soft2 hover:-translate-y-[2px]
          "
        >
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="
                    inline-flex items-center gap-2 px-3 py-1 rounded-full
                    bg-slate-900/80 border border-slate-700/80
                  "
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-sky-400/80 ring-4 ring-sky-500/10" />
                  <span className="text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-slate-300">
                    Dynamic Pricing Tool
                  </span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Live Simulation
                </p>
                <p className="text-xs text-slate-400">
                  LGBMRegressor • FastAPI backend
                </p>
              </div>
            </div>

            <h2
              className="
                text-2xl md:text-3xl lg:text-4xl
                font-semibold lg:font-bold
                text-slate-50 tracking-tight mb-2
              "
            >
              Configure a Ride Scenario
            </h2>
            <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed">
              Provide rider, driver, and context features to estimate a{' '}
              <span className="font-semibold text-indigo-300">
                revenue-optimized dynamic price
              </span>{' '}
              for the ride.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr,1fr] gap-5 lg:gap-6">
            {/* === Input Form === */}
            <form
              onSubmit={handleSubmit}
              className="
                relative p-5 lg:p-6 rounded-3xl
                bg-slate-950/85
                border border-slate-800
                shadow-sm
                hover:shadow-lg hover:-Translate-y-[2px]
                transition-all duration-300
              "
            >
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_55%)] opacity-70" />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                {Object.keys(formData).map((key) => {
                  let type =
                    typeof formData[key] === 'number' ? 'number' : 'select';
                  let label = key.replace(/_/g, ' ');

                  if (
                    CATEGORY_OPTIONS.includes(formData[key]) ||
                    LOYALTY_OPTIONS.includes(formData[key]) ||
                    TIME_OPTIONS.includes(formData[key]) ||
                    VEHICLE_OPTIONS.includes(formData[key])
                  ) {
                    type = 'select';
                  }

                  return (
                    <div className="flex flex-col gap-1.5" key={key}>
                      <label className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                        {label}
                      </label>

                      {type === 'number' ? (
                        <input
                          type="number"
                          step="0.01"
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          required
                          className="
                            px-3 py-2.5 rounded-xl
                            bg-slate-950/80
                            border border-slate-800
                            text-sm text-slate-100
                            placeholder:text-slate-500
                            focus:outline-none
                            focus:ring-2 focus:ring-sky-500/70
                            focus:border-sky-400/70
                            transition-all duration-200
                          "
                        />
                      ) : (
                        <select
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          className="
                            px-3 py-2.5 rounded-xl
                            bg-slate-950/80
                            border border-slate-800
                            text-sm text-slate-100
                            focus:outline-none
                            focus:ring-2 focus:ring-sky-500/70
                            focus:border-sky-400/70
                            transition-all duration-200
                          "
                        >
                          {(key === 'Location_Category'
                            ? CATEGORY_OPTIONS
                            : key === 'Customer_Loyalty_Status'
                            ? LOYALTY_OPTIONS
                            : key === 'Time_of_Booking'
                            ? TIME_OPTIONS
                            : VEHICLE_OPTIONS
                          ).map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Button */}
              <div className="relative mt-5 md:mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full md:w-auto
                    inline-flex items-center justify-center
                    px-5 md:px-6 py-3
                    rounded-2xl
                    bg-gradient-to-r from-emerald-500 to-emerald-400
                    text-sm md:text-base font-semibold text-slate-950
                    shadow-lg shadow-emerald-500/30
                    hover:shadow-emerald-400/40
                    hover:-translate-y-[1px]
                    transition-all duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                >
                  {loading ? 'Predicting…' : 'Predict Dynamic Price'}
                </button>
              </div>
            </form>

            {/* === Results === */}
            <div
              className="
                relative p-5 lg:p-6 rounded-3xl
                bg-slate-950/85
                border border-slate-800
                shadow-sm
                hover:shadow-lg hover:-translate-y-[2px]
                transition-all duration-300
                flex flex-col gap-4
              "
            >
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.16),transparent_55%)] opacity-80" />

              <div className="relative flex items-center justify-between gap-3 mb-1">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                    Prediction Results
                  </p>
                  <p className="text-xs text-slate-500">
                    Derived signals and model output
                  </p>
                </div>
                <div className="px-2.5 py-1 text-[11px] rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-300">
                  LGBM • Regression
                </div>
              </div>

              {error && (
                <p className="relative text-xs text-rose-300 bg-rose-500/10 border border-rose-500/40 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}

              {/* Derived Features Card */}
              <div
                className="
                  relative mt-1 p-4 rounded-2xl
                  bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90
                  border border-slate-800
                  shadow-sm
                "
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                  Derived Features
                </p>

                <div className="space-y-3">
                  {/* Demand / Supply */}
                  <div
                    className="
                      flex flex-col gap-1.5
                      rounded-xl p-3
                      bg-slate-950/80
                      border border-slate-800
                    "
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-slate-200">
                        Demand / Supply Ratio
                      </span>
                      <span className="text-sm font-semibold text-emerald-300">
                        {demandSupplyRatio}
                      </span>
                    </div>
                    <div className="h-2 mt-1 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 transition-all duration-300"
                        style={{
                          width: `${Math.min(
                            Number(demandSupplyRatio) * 18,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div
                    className="
                      flex flex-col gap-1.5
                      rounded-xl p-3
                      bg-slate-950/80
                      border border-slate-800
                    "
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-slate-200">
                        Ride Experience Score
                      </span>
                      <span className="text-sm font-semibold text-indigo-300">
                        {rideExperience}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Prediction */}
              {predictedPrice !== null && (
                <div
                  className="
                    relative mt-3 p-5 rounded-2xl
                    bg-gradient-to-br from-emerald-500/18 via-emerald-500/10 to-sky-500/18
                    border border-emerald-400/50
                    shadow-lg shadow-emerald-500/30
                    text-center
                  "
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-100 mb-2">
                    Predicted Dynamic Price
                  </p>
                  <p className="text-3xl md:text-4xl font-black text-emerald-50 tracking-tight mb-1">
                    ₹ {predictedPrice.toLocaleString()}
                  </p>
                </div>
              )}

              {!predictedPrice && !loading && !error && (
                <p className="relative mt-3 text-[12px] text-slate-400">
                  Fill in the inputs on the left and click{' '}
                  <span className="font-semibold text-slate-200">
                    “Predict Dynamic Price”
                  </span>{' '}
                  to view the model’s recommendation.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PredictionTool;
