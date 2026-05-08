import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, token, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return (
      <div className="card">
        <h2>No User Logged In</h2>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>User Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>

      <p>
        <strong>Token:</strong> {token}
      </p>
    </div>
  );
};

export default Profile;
