import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [dark, setDark] = useState(false);

  const toggleSidebar = () => setOpen(!open);
  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`flex min-h-screen bg-gray-100 dark:bg-gray-900`}>
      
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-16"
        } bg-white dark:bg-gray-800 shadow-xl transition-all duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className={`text-xl font-bold dark:text-white ${open ? "block" : "hidden"}`}>
            PriceOptima
          </h1>
          <button onClick={toggleSidebar} className="text-xl dark:text-white">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="mt-4">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">

            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/simulation"
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition"
              >
                Revenue Simulation
              </Link>
            </li>

            <li>
              <Link
                to="/prediction"
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition"
              >
                Live Prediction
              </Link>
            </li>

            <li>
              <Link
                to="/metrics"
                className="block px-4 py-2 hover:bg-blue-500 hover:text-white rounded-lg transition"
              >
                Model Metrics
              </Link>
            </li>

          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
          <h2 className="text-xl font-semibold dark:text-white">AI PriceOptima Dashboard</h2>

          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-xl"
          >
            {dark ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-800" />}
          </button>
        </header>

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
