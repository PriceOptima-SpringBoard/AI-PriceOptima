import React, { useState } from "react";
import "./layout.css";

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dashboard dark" : "dashboard"}>
      
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">🚖 PriceOptima</div>

        <nav className="menu">
          <a href="#" className="menu-item active">Dashboard</a>
          <a href="#" className="menu-item">Metrics</a>
          <a href="#" className="menu-item">Simulation</a>
          <a href="#" className="menu-item">Settings</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="main-content">
        
        {/* TOPBAR */}
        <header className="topbar">
          <h2>Revenue Simulation</h2>

          <button 
            className="dark-toggle" 
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        {/* PAGE CONTENT */}
        <div className="page-container">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
