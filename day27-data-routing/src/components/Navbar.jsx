import React, { useContext } from "react";
import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  let { setLoggedInUser } = useAuth();
  return (
    <div className="flex flex-col px-4 py-8 justify-between border-r border-gray-500">
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="flex flex-col gap-5">
          <NavLink to="/dashboard">Home</NavLink>
          <NavLink to={`/dashboard/about/${Math.floor(Math.random() * 10)}`}>
            About
          </NavLink>
          <NavLink to="/dashboard/contact">Contact</NavLink>
        </div>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("log user");
          setLoggedInUser(null);
        }}
        className="bg-black text-white py-3 text-xl cursor-pointer rounded-xl"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;