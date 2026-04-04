import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="h-screen p-10">
      <h1 className="text-2xl">Authentication</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;