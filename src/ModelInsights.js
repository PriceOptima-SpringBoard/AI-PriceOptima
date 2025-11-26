

// frontend/src/ModelInsights.js

import React from 'react';
import FeatureImportanceChart from './assets/feature_importance.png';

function ModelInsights() {
  return (
    <div className="min-h-screen p-6 lg:p-10 bg-gradient-to-br from-slate-950 via-slate-950 to-black">
      <div className="max-w-6xl mx-auto">
        <div
          className="
            group relative p-6 lg:p-8 rounded-[34px]
            bg-slate-950/80
            border border-slate-800/80
            shadow-soft
            backdrop-blur-2xl
            transition-all duration-500
            hover:shadow-soft2 hover:-translate-y-[2px]
          "
        >
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80">
                <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400/80 ring-4 ring-indigo-500/10" />
                <span className="text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-slate-300">
                  Model & Data Insights
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                LightGBM • Milestone 5
              </p>
            </div>

            <h2
              className="
                text-2xl md:text-3xl lg:text-4xl
                font-semibold lg:font-bold
                text-slate-50 tracking-tight mb-2
              "
            >
              Understanding the Dynamic Pricing Model
            </h2>
            <p className="text-sm md:text-base text-slate-300/90 max-w-2xl leading-relaxed">
              Key evaluation metrics, hyperparameters, and feature importance analysis for the{' '}
              <span className="font-semibold text-indigo-300">LGBMRegressor</span> powering the
              pricing engine.
            </p>
          </div>

          {/* Grid sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mb-6">
            {/* Final Metrics */}
            <div
              className="
                relative p-5 lg:p-6 rounded-3xl
                bg-slate-950/85
                border border-slate-800
                shadow-sm hover:shadow-lg hover:-translate-y-[2px]
                transition-all duration-300
                overflow-hidden
              "
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.16),transparent_55%)] opacity-80" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-50">
                    Final Model Performance (LGBM)
                  </h3>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                    Test Set • 20%
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Metrics computed on a held-out test split to approximate performance on unseen
                  rides.
                </p>

                <div className="space-y-3">
                  <div
                    className="
                      flex items-center justify-between gap-3
                      rounded-2xl px-4 py-3
                      bg-slate-900/80 border border-slate-800
                    "
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        Mean Absolute Error
                      </p>
                      <p className="text-xs text-slate-300">on log-transformed prices</p>
                    </div>
                    <p className="text-xl font-semibold text-sky-300">~ 0.15</p>
                  </div>

                  <div
                    className="
                      flex items-center justify-between gap-3
                      rounded-2xl px-4 py-3
                      bg-slate-900/80 border border-slate-800
                    "
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        R² score
                      </p>
                      <p className="text-xs text-slate-300">variance explained by the model</p>
                    </div>
                    <p className="text-xl font-semibold text-emerald-300">~ 0.95</p>
                  </div>
                </div>

                <p className="mt-4 text-[12px] text-slate-400">
                  A high R² indicates the model explains roughly{' '}
                  <span className="font-semibold text-slate-200">95% of the variance</span> in ride
                  costs on the evaluation split.
                </p>
              </div>
            </div>

            {/* Hyperparameters */}
            <div
              className="
                relative p-5 lg:p-6 rounded-3xl
                bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-900/90
                border border-slate-800
                shadow-sm hover:shadow-lg hover:-translate-y-[2px]
                transition-all duration-300
                overflow-hidden
              "
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.14),transparent_55%)] opacity-80" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  LGBM Hyperparameters
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Key settings chosen after tuning to balance bias, variance, and training speed.
                </p>

                <ul className="space-y-2">
                  <li
                    className="
                      px-4 py-2.5 rounded-2xl
                      bg-slate-900/80 border border-slate-800
                      text-[13px] text-slate-200
                    "
                  >
                    <span className="font-semibold text-indigo-300">n_estimators:</span> 500 – number
                    of boosting stages/trees.
                  </li>
                  <li
                    className="
                      px-4 py-2.5 rounded-2xl
                      bg-slate-900/80 border border-slate-800
                      text-[13px] text-slate-200
                    "
                  >
                    <span className="font-semibold text-indigo-300">learning_rate:</span> 0.03 – step
                    size controlling how quickly the model adapts.
                  </li>
                  <li
                    className="
                      px-4 py-2.5 rounded-2xl
                      bg-slate-900/80 border border-slate-800
                      text-[13px] text-slate-200
                    "
                  >
                    <span className="font-semibold text-indigo-300">subsample / colsample:</span>{' '}
                    0.8 – row/feature subsampling to reduce overfitting.
                  </li>
                  <li
                    className="
                      px-4 py-2.5 rounded-2xl
                      bg-slate-900/80 border border-slate-800
                      text-[13px] text-slate-200
                    "
                  >
                    <span className="font-semibold text-indigo-300">
                      reg_alpha (L1) / reg_lambda (L2):
                    </span>{' '}
                    0.2 / 1.0 – regularization terms for better generalization.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Importance (full width, slightly lighter visual section) */}
          <div
            className="
              relative mt-3 p-5 lg:p-6 rounded-3xl
              bg-gradient-to-br from-slate-900/95 via-slate-900 to-slate-950
              border border-slate-800
              shadow-sm hover:shadow-lg hover:-translate-y-[2px]
              transition-all duration-300
            "
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_60%)] opacity-80" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                  Top Feature Importances
                </h3>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/40 text-sky-200">
                  Duration • Derived features highly weighted
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-4 max-w-3xl">
                The model learns which inputs influence the predicted price the most.{' '}
                <span className="font-semibold text-slate-50">
                  Expected Ride Duration
                </span>{' '}
                and engineered signals like{' '}
                <span className="font-semibold text-slate-50">Demand/Supply Ratio</span> and{' '}
                <span className="font-semibold text-slate-50">Ride Experience</span> tend to dominate
                the importance rankings.
              </p>

              <div
                className="
                  mt-2 rounded-2xl
                  bg-slate-950/80 border border-slate-800
                  p-9
                "
              >
                <img
                  src={FeatureImportanceChart}
                  alt="Feature Importance Chart showing duration and derived features as key signals"
                  className="w-full h-auto rounded-xl border border-slate-900/80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelInsights;
