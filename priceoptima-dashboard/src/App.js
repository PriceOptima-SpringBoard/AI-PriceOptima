import React from "react";
import MetricsDisplay from "./components/MetricsDisplay";
import LivePredictionForm from "./components/LivePredictionForm";
import RevenueSimulation from "./components/RevenueSimulation";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          AI PriceOptima Dashboard
        </h1>

        <div className="grid gap-8">
          <MetricsDisplay />
          <LivePredictionForm />
          <RevenueSimulation />
        </div>
      </div>
    </div>
  );
}

export default App;
