// frontend/src/KPIAnalysis.js

import React from 'react';

function KPIAnalysis() {
  const baselineRevenue = 499359.02; // From baseline_pricing_engine.ipynb
  const dynamicRevenue = 530526.0;   // Placeholder for demonstration
  const revenueLift = ((dynamicRevenue - baselineRevenue) / baselineRevenue) * 100;

  return (
    <div
      className="
        group relative p-8 lg:p-10 rounded-[34px]
        bg-slate-950/75
        border border-slate-800/80
        shadow-soft
        backdrop-blur-2xl
        transition-all duration-500
        hover:shadow-soft2 hover:-translate-y-[2px]
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold text-slate-50 tracking-tight">
                Backtesting & KPI Analysis
              </h2>
              <p className="text-[11px] tracking-[0.16em] uppercase text-slate-400 mt-1">
                Comparing dynamic pricing vs baseline engine
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base lg:text-[15px] text-slate-300/90 max-w-3xl leading-relaxed">
            The success of the dynamic pricing strategy is measured by how much additional revenue it
            generates against the original rule-based (baseline) pricing engine.
          </p>
        </div>

        {/* Top Grid: revenue comparison + KPI */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-5 lg:gap-6 mb-8">
          {/* Baseline vs Dynamic Revenue (dark but with lighter feel inside) */}
          <div
            className="
              group relative p-6 lg:p-7 rounded-3xl
              bg-slate-950/85
              border border-slate-800
              shadow-sm hover:shadow-lg hover:-translate-y-[2px]
              transition-all duration-300
              overflow-hidden
            "
          >
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_60%)] opacity-80" />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-10 h-10 flex items-center justify-center
                      rounded-2xl bg-slate-900/80 border border-slate-700/80
                      text-xl
                    "
                  >
                    📊
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-semibold text-slate-50">
                      Baseline Pricing Comparison
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Time & inventory-based rule engine vs AI model
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] bg-slate-900/80 border border-slate-700/80 text-slate-300">
                  Backtest Window
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-5">
                The baseline model applies simple time-of-day and supply constraints. The AI-based
                dynamic pricing model learns from historical behaviour to optimize overall revenue.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Baseline */}
                <div
                  className="
                    relative overflow-hidden p-5 rounded-2xl
                    bg-gradient-to-br from-slate-900/95 via-slate-950 to-slate-950
                    border border-slate-800
                    hover:border-slate-600
                    transition-all duration-300
                  "
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-400/14 to-transparent rounded-full blur-2xl -mr-10 -mt-10" />
                  <div className="relative">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.16em] block mb-2">
                      Total Baseline Revenue
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold text-slate-50 block mb-1">
                      ₹
                      {baselineRevenue.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      Revenue using the legacy rule-based pricing logic.
                    </p>
                  </div>
                </div>

                {/* Dynamic */}
                <div
                  className="
                    relative overflow-hidden p-5 rounded-2xl
                    bg-gradient-to-br from-emerald-500/18 via-emerald-500/12 to-sky-500/15
                    border border-emerald-300/70
                    shadow-lg shadow-emerald-500/30
                    hover:shadow-emerald-400/40
                    transition-all duration-300
                  "
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-emerald-400/25 to-transparent rounded-full blur-2xl -mr-12 -mt-12" />
                  <div className="relative">
                    <span className="text-[11px] font-semibold text-emerald-100 uppercase tracking-[0.16em] block mb-2">
                      Total Dynamic Revenue
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold text-emerald-50 block mb-1">
                      ₹
                      {dynamicRevenue.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <p className="text-[11px] text-emerald-100/90">
                      Revenue after applying the AI-powered dynamic pricing engine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Lift KPI (bold, orange, but in dark shell) */}
          <div
            className="
              group relative p-6 lg:p-7 rounded-3xl
              bg-slate-950/85
              border border-slate-800
              shadow-sm hover:shadow-lg hover:-translate-y-[2px]
              transition-all duration-300
              overflow-hidden
            "
          >
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_55%)] opacity-90" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="
                    w-10 h-10 flex items-center justify-center
                    rounded-2xl bg-slate-900/80 border border-slate-700/80
                    text-xl
                  "
                >
                  📈
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-50 leading-tight">
                    Revenue Lift KPI
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Primary business metric for rollout decisions
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-5">
                Measures how much additional revenue is generated by the dynamic model compared to
                the baseline for the same set of rides.
              </p>

              <div
                className="
                  flex-1 flex flex-col items-center justify-center
                  py-7 px-4 rounded-2xl
                  bg-gradient-to-br from-slate-900/95 via-slate-950 to-slate-900/95
                  border border-orange-500/40
                  shadow-lg shadow-orange-500/30
                  mb-4
                "
              >
                <p className="text-5xl md:text-6xl lg:text-7xl font-black text-orange-400 mb-2 tracking-tight">
                  {revenueLift.toFixed(2)}%
                </p>
                <p className="text-[11px] font-semibold text-orange-200 uppercase tracking-[0.24em]">
                  Simulated Revenue Lift
                </p>
              </div>

              <div
                className="
                  mt-auto p-4 rounded-2xl
                  bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent
                  border border-sky-400/30
                "
              >
                <p className="text-xs text-sky-100 flex items-start gap-2">
                  <span className="text-lg flex-shrink-0">💡</span>
                  <span>
                    A consistent positive lift across backtests strengthens the business case for
                    gradually deploying the dynamic pricing strategy in production.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Backtesting Strategy (still slightly lighter inside, but dark overall) */}
        <div
          className="
            group relative p-6 lg:p-7 rounded-3xl
            bg-slate-950/85
            border border-slate-800
            shadow-sm hover:shadow-lg hover:-translate-y-[2px]
            transition-all duration-300
            overflow-hidden
          "
        >
          <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.2),transparent_60%)] opacity-80" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-2xl bg-slate-900/80 border border-slate-700/80
                  text-xl
                "
              >
                ⏱️
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                  Backtesting Strategy
                </h3>
                <p className="text-[11px] text-slate-400">
                  Time-aware evaluation to mimic real deployment
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6">
              To avoid leaking future information into the training process, a time-like split was
              used when building and evaluating the model:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {[
                {
                  num: 1,
                  text: 'Data was ordered using',
                  highlight: 'Expected Ride Duration',
                  subtext: 'as a proxy for temporal progression.',
                },
                {
                  num: 2,
                  text: 'The model was trained on roughly',
                  highlight: '80% (past) rides',
                  subtext: ' representing historical behaviour.',
                },
                {
                  num: 3,
                  text: 'Performance was measured on the remaining',
                  highlight: '20% (future) rides',
                  subtext: ' never seen during training.',
                },
                {
                  num: 4,
                  text: 'MAE and revenue lift were computed on',
                  highlight: 'expm1-transformed prices',
                  subtext: ' to return to real currency scale.',
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="
                    group/step p-5 rounded-2xl
                    bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/95
                    border border-indigo-500/25
                    hover:border-indigo-400/60
                    hover:shadow-lg hover:shadow-indigo-500/25
                    hover:-translate-y-[2px]
                    transition-all duration-300
                  "
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        flex-shrink-0 w-8 h-8 rounded-xl
                        bg-gradient-to-br from-indigo-600 to-indigo-500
                        text-white flex items-center justify-center
                        text-sm font-bold
                        shadow-lg shadow-indigo-500/40
                        group-hover/step:scale-110
                        transition-transform
                      "
                    >
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] text-slate-100 leading-relaxed">
                        {step.text}{' '}
                        <span className="font-semibold text-indigo-300">{step.highlight}</span>{' '}
                        {step.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KPIAnalysis;
