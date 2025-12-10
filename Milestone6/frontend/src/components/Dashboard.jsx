import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({
    total_rides: 0,
    avg_rating: 0,
    avg_price: 0,
    revenue_lift: 0,
    model_accuracy: 0
  });
  const [loading, setLoading] = useState(true);

  // Mock data for charts
  const trendData = [
    { time: '08:00', revenue: 4000 },
    { time: '10:00', revenue: 3000 },
    { time: '12:00', revenue: 5000 },
    { time: '14:00', revenue: 4500 },
    { time: '16:00', revenue: 6000 },
    { time: '18:00', revenue: 8000 },
    { time: '20:00', revenue: 7500 },
  ];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/kpi`)
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch KPIs", err);
        setLoading(false);
      });
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 p-2 rounded shadow-lg text-xs">
          <p className="text-slate-200">{`Time: ${label}`}</p>
          <p className="text-emerald-400">{`Revenue: ₹${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
           <h2 className="text-3xl font-bold text-white tracking-tight">Executive Overview</h2>
           <p className="text-slate-400 mt-1">Real-time insights on pricing performance and market demand.</p>
        </div>
        <div className="text-right hidden sm:block">
            <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">LIVE SYSTEM</span>
        </div>
      </div>
      
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue Lift Card */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
          <div className="absolute top-0 right-0 p-3">
            <span className="text-6xl">📈</span>
          </div>
          <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Revenue Lift</p>
          <div className="mt-2 flex items-baseline gap-2">
             <p className="text-3xl font-bold text-emerald-400">+{stats.revenue_lift}%</p>
          </div>
          <p className="text-xs text-slate-500 mt-2">vs Static Pricing Strategy</p>
        </div>

        {/* Model Accuracy Card */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group hover:border-violet-500/50 transition-all duration-300">
          <div className="absolute top-0 right-0 p-3">
            <span className="text-6xl">🎯</span>
          </div>
          <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Model Accuracy (R²)</p>
          <div className="mt-2">
             <p className="text-3xl font-bold text-violet-400">{(stats.model_accuracy * 100).toFixed(1)}%</p>
          </div>
          <p className="text-xs text-slate-500 mt-2">Best Model: LightGBM</p>
        </div>

        {/* Total Rides Card */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group hover:border-blue-500/50 transition-all duration-300">
           <div className="absolute top-0 right-0 p-3">
            <span className="text-6xl">🚕</span>
          </div>
          <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Rides Analyzed</p>
          <div className="mt-2">
             <p className="text-3xl font-bold text-white">{stats.total_rides.toLocaleString()}</p>
          </div>
          <p className="text-xs text-slate-500 mt-2">Historical Dataset</p>
        </div>

        {/* Avg Price Card */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
           <div className="absolute top-0 right-0 p-3">
            <span className="text-6xl">💰</span>
          </div>
          <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Avg Price</p>
          <div className="mt-2">
             <p className="text-3xl font-bold text-amber-400">₹{stats.avg_price}</p>
          </div>
          <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
             <span>Avg Rating:</span>
             <span className="text-amber-400 font-bold">{stats.avg_rating}</span>
             <span>⭐</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
          <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-emerald-500 rounded-sm"></span>
            Revenue Trends (Today)
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="time" stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{r: 4, strokeWidth: 2}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
          <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-violet-500 rounded-sm"></span>
            Demand Heatmap (Hourly)
          </h3>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                 <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="time" stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false}/>
                <YAxis stroke="#94a3b8" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
