import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import RevenueSimulation from "./components/RevenueSimulation";
import LivePredictionForm from "./components/LivePredictionForm";
import MetricsDisplay from "./components/MetricsDisplay";
import PriceOptimaDashboard from "./pages/Dashboard";  // <-- added import

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<PriceOptimaDashboard />} />
          <Route path="/simulation" element={<RevenueSimulation />} />
          <Route path="/prediction" element={<LivePredictionForm />} />
          <Route path="/metrics" element={<MetricsDisplay />} />
          <Route path="/dashboard" element={<PriceOptimaDashboard />} />  {/* <-- added route */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
