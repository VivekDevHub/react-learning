import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[10%] flex items-center justify-between">
      <h1>Logo</h1>
      <div className="flex gap-10 text-xl font-semibold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
          to="/product"
        >
          Product
        </NavLink>
      </div>
      <button>Signup</button>
    </div>
  );
};

export default Navbar;