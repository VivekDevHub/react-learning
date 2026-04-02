import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { CartStore } from "../context/CartContext";

const Navbar = () => {
  let { cartLength } = useContext(CartStore);

  let navigate = useNavigate();

  return (
    <div className="h-[10%] flex justify-between items-center">
      <h1 className="text-3xl font-bold">Navbar</h1>

      <div className="flex gap-10 text-xl font-semibold ">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-white"
          }
          to="/cart"
        >
          Cart
          <span>{cartLength}</span>
        </NavLink>
      </div>
      <div onClick={() => navigate("/auth")}>Login</div>
    </div>
  );
};

export default Navbar;