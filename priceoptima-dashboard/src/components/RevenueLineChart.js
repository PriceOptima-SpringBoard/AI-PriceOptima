import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const RevenueLineChart = ({ summary }) => {
  const data = [
    {
      name: "Revenue",
      XGB: summary.xgb_dynamic_revenue,
      LGB: summary.lgb_dynamic_revenue,
      Ensemble: summary.ensemble_revenue,
    }
  ];

  return (
    <div style={{ width: "100%", height: 300, marginTop: 20 }}>
      <h3>📈 Revenue Comparison (Dynamic Models)</h3>

      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="XGB" stroke="#8884d8" />
          <Line type="monotone" dataKey="LGB" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Ensemble" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueLineChart;
