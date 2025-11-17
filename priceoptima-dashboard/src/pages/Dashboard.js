import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="ml-64 p-8 space-y-6">
      <h1 className="text-3xl font-bold">Overview</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-6">
        <Card title="Avg RMSE" value="78.9" />
        <Card title="MAE" value="58.3" />
        <Card title="R² Score" value="0.83" />
      </div>

      {/* Add charts here later */}
    </div>
  );
};

export default Dashboard;
