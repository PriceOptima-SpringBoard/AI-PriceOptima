import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PredictionTool from './PredictionTool';
import ModelInsights from './ModelInsights';
import KPIAnalysis from './KPIAnalysis';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/predict" element={<PredictionTool />} />
          <Route path="/insights" element={<ModelInsights />} />
          <Route path="/kpi" element={<KPIAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;