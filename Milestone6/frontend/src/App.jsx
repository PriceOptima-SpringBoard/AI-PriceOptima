import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Simulator from './components/Simulator';
import Visualizations from './components/Visualizations';
import About from './components/About';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans transition-colors duration-300 flex flex-col">
      {/* Navbar */}
      <nav className="bg-slate-800 border-b border-slate-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🚕</span>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Dynamic Pricing
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['dashboard', 'simulator', 'visualizations', 'about'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
                      activeTab === tab
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none p-2"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                   <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-slide-in-top">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['dashboard', 'simulator', 'visualizations', 'about'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize ${
                    activeTab === tab
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in flex-grow w-full">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'simulator' && <Simulator />}
        {activeTab === 'visualizations' && <Visualizations />}
        {activeTab === 'about' && <About />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-sm">
            © 2025 AI-PriceOptima. Powered by XGBoost & LightGBM.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
