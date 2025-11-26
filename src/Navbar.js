// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: "📌" },
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/predict", label: "Pricing Tool", icon: "💡" },
    { to: "/insights", label: "Model Insights", icon: "📊" },
    { to: "/kpi", label: "KPI Analysis", icon: "🧪" },
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-slate-800/80
        bg-gradient-to-r from-slate-950/95 via-slate-950/95 to-slate-900/95
        backdrop-blur-2xl
        shadow-soft
      "
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* BRAND */}
          <Link to="/dashboard" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-semibold tracking-tight text-slate-100">
                AI PriceOptima
              </span>
              <span className="hidden lg:block text-[11px] text-slate-400 tracking-wide">
                Dynamic Pricing Dashboard
              </span>
            </div>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-full
                  text-[13px] lg:text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive(item.to)
                      ? "bg-indigo-500/18 text-indigo-100 border border-indigo-400/40 shadow-soft2"
                      : "text-slate-200/90 border border-transparent hover:border-slate-600/70 hover:bg-slate-900/70 hover:text-slate-50"
                  }
                `}
              >
                <span className="text-base lg:text-lg">{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            ))}

          {/* THEME TOGGLE */}
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
