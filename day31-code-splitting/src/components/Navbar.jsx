import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between px-10 py-3">
      <h1>Logo</h1>
      <div className="flex gap-6 text-sm">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-white"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-white"
          }
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-semibold" : "text-white"
          }
          to="/users"
        >
          Users
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;