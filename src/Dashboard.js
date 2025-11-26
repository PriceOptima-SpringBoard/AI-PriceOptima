// src/Dashboard.js

import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";

function Dashboard() {
  // Dummy data for charts
  const revenueData = [
    { day: "Mon", value: 120 },
    { day: "Tue", value: 180 },
    { day: "Wed", value: 140 },
    { day: "Thu", value: 200 },
    { day: "Fri", value: 260 },
    { day: "Sat", value: 300 },
    { day: "Sun", value: 220 },
  ];

  const demandData = [
    { hr: "6 AM", rides: 40 },
    { hr: "9 AM", rides: 90 },
    { hr: "12 PM", rides: 120 },
    { hr: "3 PM", rides: 150 },
    { hr: "6 PM", rides: 220 },
    { hr: "9 PM", rides: 180 },
  ];

  const donutData = [
    { name: "Economy", value: 65 },
    { name: "Premium", value: 35 },
  ];
  const donutColors = ["#6366F1", "#EC4899"];

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
           Unified Dashboard
        </h1>
        <p className="text-slate-400 text-lg">
          Insights, predictions & KPIs — all in one place.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

        {/* Pricing Tool */}
        <div
          className="p-7 bg-slate-950/70 rounded-3xl border border-slate-800 shadow-xl 
          backdrop-blur-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300 flex flex-col"
        >
          <h2 className="text-xl font-bold mb-2">💡 Pricing Tool</h2>
          <p className="text-slate-400 mb-6">
            Enter ride features to get real-time AI-powered prices.
          </p>
          <Link
            to="/predict"
            className="mt-auto inline-block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
          >
            Open Tool →
          </Link>
        </div>

        {/* Insights */}
        <div
          className="p-7 bg-slate-950/70 rounded-3xl border border-slate-800 shadow-xl 
          backdrop-blur-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300 flex flex-col"
        >
          <h2 className="text-xl font-bold mb-2">📘 Model Insights</h2>
          <p className="text-slate-400 mb-6">
            View feature importances & model evaluation visuals.
          </p>
          <Link
            to="/insights"
            className="mt-auto inline-block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
          >
            View Insights →
          </Link>
        </div>

        {/* KPI */}
        <div
          className="p-7 bg-slate-950/70 rounded-3xl border border-slate-800 shadow-xl 
          backdrop-blur-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300 flex flex-col"
        >
          <h2 className="text-xl font-bold mb-2">📈 KPI Analysis</h2>
          <p className="text-slate-400 mb-6">
            Compare AI pricing vs baseline & measure revenue lift.
          </p>
          <Link
            to="/kpi"
            className="mt-auto inline-block px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition"
          >
            Explore KPIs →
          </Link>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">

        {/* Weekly Revenue */}
        <div className="p-6 bg-slate-950/70 rounded-3xl border border-slate-800 shadow-xl hover:shadow-2xl transition">
          <h3 className="text-lg font-bold mb-4">📊 Weekly Revenue Trend</h3>

          <div className="h-56">
            <ResponsiveContainer>
              <BarChart data={revenueData}>
                <XAxis dataKey="day" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Bar dataKey="value" fill="#6366F1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demand Pattern */}
        <div className="p-6 bg-slate-950/70 rounded-3xl border border-slate-800 shadow-xl hover:shadow-2xl transition">
          <h3 className="text-lg font-bold mb-4">📈 Demand Pattern Over Day</h3>

          <div className="h-56">
            <ResponsiveContainer>
              <LineChart data={demandData}>
                <XAxis dataKey="hr" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="rides"
                  stroke="#10B981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="p-6 bg-slate-950/70 rounded-3xl border border-slate-800 shadow-xl hover:shadow-2xl transition">
          <h3 className="text-lg font-bold mb-4">🚗 Ride Type Split</h3>

          <div className="h-56">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {donutData.map((entry, idx) => (
                    <Cell key={idx} fill={donutColors[idx]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
