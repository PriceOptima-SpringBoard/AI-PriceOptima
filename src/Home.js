import React from 'react';

function Home() {
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
        {/* Hero Header */}
        <div className="mb-8 lg:mb-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <div
              className="
                inline-flex items-center gap-2 px-3 py-1 rounded-full
                bg-slate-900/80 border border-slate-700/80
              "
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/80 ring-4 ring-emerald-500/10" />
              <span className="text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-slate-300">
                Project Overview
              </span>
            </div>
          </div>

          <h2
            className="
              text-2xl md:text-3xl lg:text-4xl
              font-semibold lg:font-bold
              text-slate-50 tracking-tight mb-4
            "
          >
            Dynamic Pricing Optimization Project
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            An AI-powered solution for maximizing revenue in ride-sharing by dynamically adjusting prices based on real-time market conditions,
            demand signals, and operational constraints.
          </p>
        </div>

        {/* Snapshot / Visualisation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-5 lg:gap-6 mb-7 lg:mb-8">
          {/* Mini chart */}
          <div
            className="
              relative p-5 lg:p-6 rounded-3xl
              bg-slate-950/85
              border border-slate-800
              shadow-sm
              hover:shadow-lg hover:-translate-y-[2px]
              transition-all duration-300
              overflow-hidden
            "
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.16),transparent_55%)] opacity-80 pointer-events-none" />
            <div className="relative flex items-center justify-between mb-3">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-slate-400 mb-1">
                  Simulated Revenue Lift
                </p>
                <p className="text-xl lg:text-2xl font-semibold text-slate-50">
                  +18.4%
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                Model v/s Baseline
              </span>
            </div>

            <p className="relative text-[11px] md:text-xs text-slate-400 mb-4">
              Example trend of revenue lift for recent simulated days.
            </p>

            {/* CLEAN VERTICAL BAR CHART */}
            <div className="relative mt-1">
              {/* subtle baseline grid */}
              <div className="absolute inset-x-0 top-1 bottom-6 flex flex-col justify-between pointer-events-none">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-px w-full bg-slate-800/80"
                  />
                ))}
              </div>

              <div className="relative flex items-end gap-3 h-32">
                {[
                  { label: 'D1', heightClass: 'h-10' },
                  { label: 'D2', heightClass: 'h-16' },
                  { label: 'D3', heightClass: 'h-20' },
                  { label: 'D4', heightClass: 'h-14' },
                  { label: 'D5', heightClass: 'h-24', highlight: true },
                ].map((day) => (
                  <div
                    key={day.label}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div
                      className="
                        w-8 lg:w-9
                        rounded-2xl
                        bg-slate-900/80
                        border border-slate-800
                        overflow-hidden
                        flex items-end justify-center
                        h-full
                      "
                    >
                      <div
                        className={`
                          w-full rounded-2xl
                          ${day.heightClass}
                          ${
                            day.highlight
                              ? 'bg-gradient-to-t from-emerald-500 via-emerald-400 to-emerald-300'
                              : 'bg-gradient-to-t from-indigo-500 via-indigo-400 to-sky-400'
                          }
                        `}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {day.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KPI bento cards */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="
                p-4 rounded-2xl
                bg-slate-950/85
                border border-slate-800
                flex flex-col justify-between
              "
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Avg. Acceptance
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/30">
                  +4.2%
                </span>
              </div>
              <p className="text-2xl font-semibold text-slate-50">91%</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Drivers accepting dynamically priced rides.
              </p>
            </div>

            <div
              className="
                p-4 rounded-2xl
                bg-slate-950/85
                border border-slate-800
                flex flex-col justify-between
              "
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Demand Surge
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-400/30">
                  Peak
                </span>
              </div>
              <p className="text-2xl font-semibold text-slate-50">1.7×</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Multiplicative factor during evening rush hours.
              </p>
            </div>

            <div
              className="
                p-4 rounded-2xl
                bg-slate-950/85
                border border-slate-800
                flex flex-col justify-between
              "
            >
              <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                Avg. Ride Price
              </span>
              <p className="text-2xl font-semibold text-slate-50">₹312</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Dynamic price after model adjustments.
              </p>
            </div>

            <div
              className="
                p-4 rounded-2xl
                bg-slate-950/85
                border border-slate-800
                flex flex-col justify-between
              "
            >
              <span className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                Coverage
              </span>
              <p className="text-2xl font-semibold text-slate-50">12k</p>
              <p className="text-[11px] text-slate-500 mt-1">
                Historical rides used to train & evaluate.
              </p>
            </div>
          </div>
        </div>

        {/* Project Goal Section */}
        <div
          className="
            group relative p-6 lg:p-7 rounded-3xl
            border border-slate-800
            bg-gradient-to-br from-slate-950/85 via-slate-950/95 to-slate-900/85
            shadow-soft
            hover:shadow-soft2
            transition-all duration-300 mb-7 lg:mb-8
          "
        >
          <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.16),transparent_55%)] opacity-70" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-2xl
                  bg-slate-900/80
                  border border-slate-700/80
                  text-lg shadow-soft
                "
              >
                🎯
              </div>
              <div className="text-left">
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-50">
                  Project Goal
                </h3>
                <p className="text-[11px] tracking-[0.16em] uppercase text-slate-400 mt-1">
                  Revenue-focused dynamic pricing for ride-sharing
                </p>
              </div>
            </div>

            <p className="text-[13px] md:text-sm lg:text-[15px] text-slate-200 leading-relaxed">
              The objective is to develop a machine learning model that predicts
              an optimal dynamic price for each ride. The price aims to balance
              driver utilization, rider demand, and customer experience in order
              to{' '}
              <span className="font-semibold text-indigo-300 px-1.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-400/30">
                maximize total revenue
              </span>{' '}
              (measured via simulated revenue lift) compared to a static or
              rule-based baseline strategy.
            </p>
          </div>
        </div>

        {/* Core Components Section */}
        <div
          className="
            group relative p-6 lg:p-7 rounded-3xl
            border border-slate-800
            bg-gradient-to-br from-slate-950/85 via-slate-950/95 to-slate-900/85
            shadow-soft
            hover:shadow-soft2
            transition-all duration-300 mb-7 lg:mb-8
          "
        >
          <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.14),transparent_55%)] opacity-80" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="
                  w-10 h-10 flex items-center justify-center
                  rounded-2xl
                  bg-slate-900/80
                  border border-slate-700/80
                  text-lg shadow-soft
                "
              >
                ⚙️
              </div>
              <div className="text-left">
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-50">
                  Core Components
                </h3>
                <p className="text-[11px] tracking-[0.16em] uppercase text-slate-400 mt-1">
                  From raw events to production-ready pricing
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {[
                {
                  icon: '📊',
                  title: 'Data Ingestion & Cleaning',
                  description:
                    'Handled missing values (imputed by median/mode) and enforced robust quality checks.',
                  color: 'blue',
                },
                {
                  icon: '🔧',
                  title: 'Feature Engineering',
                  description: 'Created key predictors such as',
                  highlight: 'Demand/Supply Ratio',
                  extra: 'and',
                  highlight2: 'Ride Experience',
                  color: 'indigo',
                },
                {
                  icon: '🤖',
                  title: 'Model Selection',
                  description: 'Used',
                  highlight: 'LightGBM (LGBMRegressor)',
                  extra:
                    ', a gradient-boosted tree model well suited for non-linear interactions and heterogenous signals.',
                  color: 'purple',
                },
                {
                  icon: '🚀',
                  title: 'Deployment',
                  description: 'Served the trained model via a',
                  highlight: 'FastAPI',
                  extra:
                    ' backend, enabling low-latency inference for real-time pricing decisions.',
                  color: 'emerald',
                },
              ].map((component, idx) => (
                <div
                  key={idx}
                  className="
                    group/card relative p-5 lg:p-6 rounded-2xl
                    bg-slate-900/80
                    border border-slate-800
                    hover:border-slate-600
                    hover:bg-slate-900
                    transition-all duration-300
                    hover:-translate-y-[2px]
                    shadow-sm hover:shadow-lg
                    overflow-hidden
                  "
                >
                  <div
                    className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-${component.color}-400/18 dark:from-${component.color}-400/12 to-transparent rounded-full blur-2xl -mr-10 -mt-10`}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3.5">
                      <div
                        className={`
                          w-9 h-9 flex items-center justify-center rounded-xl
                          bg-gradient-to-br from-${component.color}-500/16 to-${component.color}-500/6
                          text-xl shadow-md shadow-slate-950/60
                        `}
                      >
                        {component.icon}
                      </div>
                      <h4 className="text-sm lg:text-[15px] font-semibold text-slate-50">
                        {component.title}
                      </h4>
                    </div>

                    <p className="text-[13px] lg:text-sm text-slate-300 leading-relaxed">
                      {component.description}
                      {component.highlight && (
                        <>
                          {' '}
                          <span
                            className={`font-semibold text-${component.color}-300`}
                          >
                            {component.highlight}
                          </span>
                        </>
                      )}
                      {component.extra && ` ${component.extra}`}
                      {component.highlight2 && (
                        <>
                          {' '}
                          <span
                            className={`font-semibold text-${component.color}-300`}
                          >
                            {component.highlight2}
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="
            relative p-6 lg:p-7 rounded-3xl
            bg-slate-950
            border border-slate-800
            overflow-hidden
            shadow-soft
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/65 via-indigo-500/60 to-violet-500/70 opacity-80" />
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-3xl -mr-28 -mt-28" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-white/12 to-transparent rounded-full blur-3xl -ml-28 -mb-28" />

          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/12 backdrop-blur-sm text-3xl mb-3 shadow-lg">
              🚀
            </div>
            <p className="text-lg lg:text-2xl font-semibold text-white mb-1.5">
              Ready to see it in action?
            </p>
            <p className="text-sm lg:text-base text-indigo-100/95 mb-4 max-w-xl mx-auto">
              Head over to the <span className="font-semibold">Dynamic Pricing Tool</span>{' '}
              to experiment with scenarios, understand model behaviour, and
              observe the projected revenue lift.
            </p>
            <button
              className="
                px-6 lg:px-7 py-3.5 rounded-xl
                bg-slate-950/90
                text-indigo-100
                text-sm lg:text-base font-semibold
                border border-white/15
                hover:bg-slate-900
                hover:border-white/25
                transition-all duration-200
                shadow-soft hover:shadow-soft2 hover:-translate-y-[1px]
              "
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
