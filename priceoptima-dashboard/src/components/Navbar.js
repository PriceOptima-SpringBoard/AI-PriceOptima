import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6 ml-64">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
