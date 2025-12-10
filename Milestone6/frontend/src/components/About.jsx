import React from 'react';

const About = () => {
  const milestones = [
    {
      id: 1,
      title: "Data Preparation & Analysis",
      icon: "📊",
      description: "Cleaned and engineered features from raw ride data.",
      details: [
        "Handled missing values and outliers in standard datasets.",
        "Created advanced features: Demand Ratio, Supply Constraints, and Time-based cyclic encoding.",
        "Split data into Training (80%), Validation (10%), and Test (10%) sets."
      ]
    },
    {
      id: 2,
      title: "Model Development (XGBoost & LightGBM)",
      icon: "🤖",
      description: "Trained and optimized ML models to predict ride costs.",
      details: [
        "Benchmarked Baseline Linear Regression vs. Tree-based models.",
        "Selected LightGBM for superior speed and accuracy (R² > 0.85).",
        "Saved trained models and encoders using Joblib for portability."
      ]
    },
    {
      id: 3,
      title: "Backend API (Flask Integration)",
      icon: "⚙️",
      description: "Built a robust REST API to serve predictions.",
      details: [
        "Exposed endpoints: `/api/predict` (Real-time pricing) and `/api/kpi` (Dashboard stats).",
        "Implemented CORS handling for secure frontend communication.",
        "Integrated saved models to inference ride prices dynamically."
      ]
    },
    {
      id: 4,
      title: "Frontend Development (React + Tailwind)",
      icon: "💻",
      description: "Created a modern, interactive dashboard.",
      details: [
        "Designed a dark-themed UI with `recharts` for data visualization.",
        "Built a Simulator to test pricing strategies in real-time.",
        "Ensured responsiveness and smooth UX with Tailwind CSS."
      ]
    }
  ];

  return (
    <div className="space-y-16 max-w-5xl mx-auto pb-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 pt-8">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 animate-fade-in p-2">
          Project Architecture
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          From raw data to real-time dynamic pricing. A deep dive into how AI-PriceOptima was built.
        </p>
      </div>

      {/* Milestones Timeline */}
      <div className="relative border-l-2 border-slate-700 ml-6 md:ml-12 space-y-12">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative pl-8 md:pl-12 w-full max-w-4xl">
            {/* Timeline Dot */}
            <div className="absolute top-0 left-[-11px] w-6 h-6 rounded-full bg-slate-800 border-4 border-emerald-500 z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

            {/* Content Card */}
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl hover:border-emerald-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{milestone.icon}</span>
                <h3 className="text-xl font-bold text-white tracking-tight">{milestone.title}</h3>
              </div>
              <p className="text-slate-400 mb-4 italic text-sm border-l-2 border-emerald-500/30 pl-3">
                {milestone.description}
              </p>
              <ul className="space-y-2">
                {milestone.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-300">
                    <span className="mr-2 text-emerald-500 mt-1">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

       {/* System Diagram / Flow */}
       <div className="bg-slate-900/50 p-10 rounded-3xl border border-slate-800 text-center space-y-10">
            <h3 className="text-3xl font-bold text-white">System Architecture & Data Flow</h3>
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 max-w-4xl mx-auto z-0">
                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-700 via-emerald-900 to-slate-700 -z-10 transform -translate-y-1/2 rounded-full"></div>

                {/* Step 1 */}
                <div className="relative group w-full lg:w-auto">
                    <div className="bg-slate-800 p-6 rounded-xl border-2 border-slate-700 group-hover:border-emerald-500/50 transition-all duration-300 shadow-lg w-full lg:w-48 flex flex-col items-center z-10 bg-opacity-100">
                         <span className="text-4xl mb-3">👤</span>
                        <div className="font-bold text-slate-200">User Input</div>
                        <div className="text-xs text-slate-500 mt-1">Simulator Interface</div>
                    </div>
                </div>

                {/* Arrow Mobile/Tablet */}
                <div className="lg:hidden text-emerald-500 text-2xl">⬇</div>

                {/* Step 2 */}
                <div className="relative group w-full lg:w-auto">
                    <div className="bg-slate-800 p-6 rounded-xl border-2 border-slate-700 group-hover:border-emerald-500/50 transition-all duration-300 shadow-lg w-full lg:w-48 flex flex-col items-center z-10 bg-opacity-100">
                        <span className="text-4xl mb-3">🌐</span>
                        <div className="font-bold text-slate-200">Frontend App</div>
                        <div className="text-xs text-slate-500 mt-1">React + Vite</div>
                    </div>
                </div>

                <div className="lg:hidden text-emerald-500 text-2xl">⬇</div>

                {/* Step 3 */}
                <div className="relative group w-full lg:w-auto">
                    <div className="bg-slate-800 p-6 rounded-xl border-2 border-slate-700 group-hover:border-emerald-500/50 transition-all duration-300 shadow-lg w-full lg:w-48 flex flex-col items-center z-10 bg-opacity-100">
                        <span className="text-4xl mb-3">⚙️</span>
                        <div className="font-bold text-slate-200">Backend API</div>
                        <div className="text-xs text-slate-500 mt-1">Flask Service</div>
                    </div>
                </div>

                <div className="lg:hidden text-emerald-500 text-2xl">⬇</div>

                {/* Step 4 */}
                <div className="relative group w-full lg:w-auto">
                     <div className="bg-emerald-900/20 p-6 rounded-xl border-2 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)] w-full lg:w-48 flex flex-col items-center z-10 backdrop-blur-sm">
                        <span className="text-4xl mb-3">🧠</span>
                        <div className="font-bold text-emerald-400">AI Model</div>
                        <div className="text-xs text-emerald-300/70 mt-1">XGBoost / LightGBM</div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
};

export default About;
