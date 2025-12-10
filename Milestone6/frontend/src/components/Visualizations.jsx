import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ScatterChart, Scatter, ZAxis
} from 'recharts';

const Visualizations = () => {
  const [features, setFeatures] = useState([]);
  const [scatterData, setScatterData] = useState([]);
  
  // Custom dark tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 p-2 rounded shadow-lg text-xs">
          <p className="text-slate-200">{label ? `${label}` : ''}</p>
          {payload.map((p, index) => (
             <p key={index} style={{color: p.color}}>{`${p.name}: ${p.value}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    // Fetch Feature Importance
    fetch(`${import.meta.env.VITE_API_URL}/api/feature-importance`)
      .then(res => res.json())
      .then(data => setFeatures(data.slice(0, 10)))
      .catch(console.error);

    // Fetch Scatter Data
    fetch(`${import.meta.env.VITE_API_URL}/api/visualizations/scatter`)
      .then(res => res.json())
      .then(data => setScatterData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Data Visualizations</h2>
        <p className="text-slate-400 mt-1">Deep dive into model behavior and dataset distribution.</p>
      </div>

      {/* Feature Importance Bar Chart */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
        <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-emerald-500 rounded-sm"></span>
            Top Pricing Drivers (Feature Importance)
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={features}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
              <XAxis type="number" stroke="#94a3b8" tick={{fontSize: 12}} />
              <YAxis dataKey="feature" type="category" width={150} stroke="#94a3b8" tick={{fontSize: 12}} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
              <Bar dataKey="importance" fill="#10b981" name="Importance Score" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scatter Plot */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg min-h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-violet-500 rounded-sm"></span>
                Duration vs Price (Scatter)
            </h3>
            <div className="flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" dataKey="Expected_Ride_Duration" name="Duration" unit="m" stroke="#94a3b8" tick={{fontSize: 12}} />
                  <YAxis type="number" dataKey="Historical_Cost_of_Ride" name="Price" unit="₹" stroke="#94a3b8" tick={{fontSize: 12}} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                  <Scatter name="Rides" data={scatterData} fill="#8b5cf6" fillOpacity={0.6} />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
        </div>

        {/* Mock Price Distribution (Bar Chart for histogram feel) */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg min-h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                 <span className="w-2 h-6 bg-amber-500 rounded-sm"></span>
                 Price Distribution (Mock)
            </h3>
            <div className="flex-grow flex items-center justify-center">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { range: '0-100', count: 120 },
                        { range: '100-200', count: 250 },
                        { range: '200-300', count: 300 },
                        { range: '300-400', count: 180 },
                        { range: '400+', count: 150 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                      <XAxis dataKey="range" stroke="#94a3b8" tick={{fontSize: 12}} />
                      <YAxis stroke="#94a3b8" tick={{fontSize: 12}} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="count" fill="#f59e0b" name="Ride Count" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Visualizations;
