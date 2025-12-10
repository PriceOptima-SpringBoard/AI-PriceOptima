import React, { useState } from 'react';

const Simulator = () => {
  const [formData, setFormData] = useState({
    Number_of_Riders: 50,
    Number_of_Drivers: 30,
    Location_Category: 'Urban',
    Customer_Loyalty_Status: 'Regular',
    Time_of_Booking: 'Evening',
    Vehicle_Type: 'Premium',
    Expected_Ride_Duration: 45,
    Number_of_Past_Rides: 10,
    Average_Ratings: 4.5
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const locations = ['Urban', 'Suburban', 'Rural'];
  const loyaltyStatus = ['Regular', 'Silver', 'Gold'];
  const times = ['Morning', 'Afternoon', 'Evening', 'Night'];
  const vehicles = ['Economy', 'Premium'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSimulate = () => {
    setLoading(true);
    // Convert inputs to numbers for API
    const payload = {
      ...formData,
      Number_of_Riders: parseFloat(formData.Number_of_Riders) || 0,
      Number_of_Drivers: parseFloat(formData.Number_of_Drivers) || 0,
      Expected_Ride_Duration: parseFloat(formData.Expected_Ride_Duration) || 0,
      Number_of_Past_Rides: parseFloat(formData.Number_of_Past_Rides) || 0,
      Average_Ratings: parseFloat(formData.Average_Ratings) || 0
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      setPrediction(data[0]);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center text-white">
          <span className="mr-3 p-2 bg-emerald-500/20 rounded-lg text-emerald-400">⚙️</span> 
          Configure Ride Parameters
        </h2>
        
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">Riders (Demand)</label>
            <input type="number" name="Number_of_Riders" value={formData.Number_of_Riders} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors p-2.5 sm:text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">Drivers (Supply)</label>
            <input type="number" name="Number_of_Drivers" value={formData.Number_of_Drivers} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors p-2.5 sm:text-sm" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">Location</label>
            <select name="Location_Category" value={formData.Location_Category} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors p-2.5 sm:text-sm appearance-none">
              {locations.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">Time</label>
            <select name="Time_of_Booking" value={formData.Time_of_Booking} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors p-2.5 sm:text-sm appearance-none">
              {times.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">Vehicle Type</label>
            <select name="Vehicle_Type" value={formData.Vehicle_Type} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors p-2.5 sm:text-sm appearance-none">
              {vehicles.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">Duration (min)</label>
            <input type="number" name="Expected_Ride_Duration" value={formData.Expected_Ride_Duration} onChange={handleChange} className="w-full rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors p-2.5 sm:text-sm" />
          </div>
        </div>

        <button 
          onClick={handleSimulate}
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:from-emerald-500 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Calculating Pricing...' : 'Run Simulation'}
        </button>
      </div>

      {/* Results Panel */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg relative min-h-[400px]">
        <h2 className="text-xl font-bold mb-6 flex items-center text-white">
          <span className="mr-3 p-2 bg-violet-500/20 rounded-lg text-violet-400">📊</span> 
          Pricing Output
        </h2>
        
        {prediction ? (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center p-8 bg-slate-900/50 rounded-2xl border border-slate-700/50">
              <p className="text-sm text-emerald-400 font-bold uppercase tracking-widest mb-2">Recommended Price</p>
              <div className="flex items-center justify-center gap-1">
                 <span className="text-4xl text-slate-500 font-light">₹</span>
                 <p className="text-6xl font-extrabold text-white tracking-tight">{Math.round(prediction.predicted_price)}</p>
              </div>
              <p className="text-slate-500 text-xs mt-2">Dynamic Pricing Model Output</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Baseline</p>
                <p className="text-2xl font-bold text-slate-300">₹{Math.round(prediction.baseline_price)}</p>
              </div>
              <div className="p-4 bg-emerald-900/20 rounded-lg text-center border border-emerald-500/30">
                <p className="text-xs text-emerald-400 uppercase tracking-wide mb-1">Revenue Lift</p>
                <p className="text-2xl font-bold text-emerald-400">+{prediction.lift}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <h3 className="text-sm font-semibold text-slate-300 mb-3">Active Pricing Factors:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20">
                  Demand Multiplier: {(Number(formData.Number_of_Riders) / Number(formData.Number_of_Drivers)).toFixed(1)}x
                </span>
                {['Morning', 'Evening'].includes(formData.Time_of_Booking) && (
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-medium rounded-full border border-red-500/20">Peak Hour Surge</span>
                )}
                {formData.Vehicle_Type === 'Premium' && (
                  <span className="px-3 py-1 bg-violet-500/10 text-violet-400 text-xs font-medium rounded-full border border-violet-500/20">Premium Tier</span>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 space-y-4 opacity-50">
            <span className="text-6xl">🧮</span>
            <p className="font-medium">Enter parameters to simulate pricing</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulator;
