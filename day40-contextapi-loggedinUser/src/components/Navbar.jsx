import React from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>Auth App</h1>
      {isLoggedIn ? (
        <div className="nav-right">
          <span>Welcome, {user.name}</span>

          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <span>Please Login</span>
      )}
    </nav>
  );
};

export default Navbar;
