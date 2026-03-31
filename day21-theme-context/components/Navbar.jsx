import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";
import { NavLink } from "react-router";

const Navbar = () => {
  let { theme, setTheme, setRenderPages, renderPages } = useContext(Theme);

  return (
    <div
      className={`h-[10%] ${
        theme === "dark" ? "text-white bg-black" : "text-black bg-white"
      } flex px-[100px] shadow-2xl justify-between items-center`}
    >
      <h1 className="text-3xl font-bold">Logo</h1>
      <div className="flex items-center gap-10 text-xl font-semibold">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700" : "text-white"
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700" : "text-white"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700" : "text-white"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        className={`text-xl px-4 py-3 rounded-xl ${
          theme === "dark"
            ? "text-white bg-black border-white"
            : "text-black border-black bg-white"
        } border cursor-pointer`}
      >
        {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default Navbar;