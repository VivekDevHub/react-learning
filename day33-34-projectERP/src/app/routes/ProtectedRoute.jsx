import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../shared/hooks/useContextData";

const ProtectedRoute = () => {
  let { loggedInAdmin } = useAuthContext();

  if (!loggedInAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
