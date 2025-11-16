import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const ModelComparison = ({ data }) => {
  if (!data || data.length === 0) return <p>No comparison data yet.</p>;

  return (
    <div className="card">
      <h2>Model Comparison</h2>

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="Pred_XGB" stroke="blue" />
        <Line type="monotone" dataKey="Pred_LGB" stroke="green" />
        <Line type="monotone" dataKey="Pred_Avg" stroke="red" />
      </LineChart>
    </div>
  );
};

export default ModelComparison;
