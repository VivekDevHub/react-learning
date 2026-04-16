import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  let { isAuthenticated, isLoading } = useSelector((store) => store.auth);

  if (isLoading) return <h1>Loading....</h1>;

  if (isAuthenticated) return <Navigate to={"/main"} />;
  return <Outlet />;
};

export default PublicRoute;