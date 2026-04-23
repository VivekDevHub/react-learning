import React from "react";
import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const logUser = useSelector((state) => state.userReducer.logUser);

  if (logUser) return <Navigate to="/home" replace />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
