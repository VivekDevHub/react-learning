import React from "react";
import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const logUser = useSelector((state) => state.userReducer.logUser);

  if (!logUser) return <Navigate to="/login" replace />;

  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
