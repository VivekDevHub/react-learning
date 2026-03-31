import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useContext(Theme);
  const navigate = useNavigate();
  return (
    <div
      className={`h-[80px] px-[100px] flex justify-between items-center backdrop-blur-lg shadow-lg border-b transition-all duration-500 ${
        theme === "dark"
          ? "bg-white/10 text-white border-white/20"
          : "bg-white/70 text-black border-black/10"
      }`}
    >
      {/* Logo */}
      <h1 onClick={()=>{navigate('/')}} className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Kodex
      </h1>

      {/* Links */}
      <div className="flex gap-10 text-lg font-semibold">
        {["home", "about", "contact"].map((item) => (
          <NavLink
            key={item}
            to={`/${item}`}
            className={({ isActive }) =>
              `capitalize relative transition-all duration-300 ${
                isActive
                  ? "text-pink-500"
                  : theme === "dark"
                  ? "text-gray-300"
                  : "text-gray-700"
              } hover:text-pink-500`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Navbar;