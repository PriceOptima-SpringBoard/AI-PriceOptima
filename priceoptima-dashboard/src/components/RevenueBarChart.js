import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const RevenueBarChart = ({ summary }) => {
  const data = [
    { name: "Static", Revenue: summary.static_revenue },
    { name: "XGB", Revenue: summary.xgb_dynamic_revenue },
    { name: "LGB", Revenue: summary.lgb_dynamic_revenue },
    { name: "Ensemble", Revenue: summary.ensemble_revenue },
  ];

  return (
    <div style={{ width: "100%", height: 300, marginTop: 20 }}>
      <h3>📊 Total Revenue Comparison</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueBarChart;
