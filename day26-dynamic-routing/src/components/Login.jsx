import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Here is for Login</h1>

      <p>
        Don't have an account{" "}
        <span
          onClick={() => navigate("/auth/register")}
          style={{ color: "blue" }}
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
