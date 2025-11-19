import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">

      {/* ===== FIXED NAVBAR ===== */}
      <header className="fixed top-0 left-0 w-full z-50 
        bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700
        px-6 py-6 flex items-center justify-between">

        {/* Left: Title */}
        <h2 className="text-xl font-bold dark:text-white">AI PriceOptima Dashboard</h2>

        {/* Center: Navigation Menu */}
        <nav className="flex space-x-10 text-gray-700 dark:text-gray-100 font-medium">
          <Link to="/" className="hover:text-blue-500">Dashboard</Link>
          <Link to="/simulation" className="hover:text-blue-500">Revenue Simulation</Link>
          <Link to="/prediction" className="hover:text-blue-500">Live Prediction</Link>
          <Link to="/metrics" className="hover:text-blue-500">Model Metrics</Link>
        </nav>

        {/* Right: Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-xl"
        >
          {dark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-800" />}
        </button>
      </header>

      {/* ===== SCROLLABLE PAGE CONTENT ===== */}
      <main className="flex-1 px-6 py-8 mt-24 mb-20 overflow-y-auto">
        {children}
      </main>

      {/* ===== FIXED FOOTER ===== */}
      <footer className="fixed bottom-0 left-0 w-full z-50 
        bg-white dark:bg-gray-800 shadow-inner 
        text-center py-3 text-gray-700 dark:text-gray-300 text-sm border-t border-gray-200 dark:border-gray-700">

        © {new Date().getFullYear()} PriceOptima — All Rights Reserved
      </footer>

    </div>
  );
};

export default Layout;
