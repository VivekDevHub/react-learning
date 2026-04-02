import React from "react";
import { useNavigate } from "react-router";

const Register = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>This is for registration</h1>
      <p>
        Already have an account{" "}
        <span onClick={() => navigate("/auth")} style={{ color: "blue" }}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;