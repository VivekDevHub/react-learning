import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../shared/hooks/useContextData";

const PublicRoute = () => {
  let { loggedInAdmin } = useAuthContext();
  console.log(loggedInAdmin, "public");

  if (loggedInAdmin) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default PublicRoute;
