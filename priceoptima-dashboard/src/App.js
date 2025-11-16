import React from "react";
import MetricsDisplay from "./components/MetricsDisplay";
import LivePredictionForm from "./components/LivePredictionForm";
import RevenueSimulation from "./components/RevenueSimulation";

function App() {
  return (
    <div className="app-container">
      <h1>AI PriceOptima Dashboard</h1>

      {/* Metrics Section */}
      <MetricsDisplay />

      {/* Live Prediction Form */}
      <LivePredictionForm />

      {/* Revenue Simulation */}
      <RevenueSimulation />
    </div>
  );
}

export default App;
