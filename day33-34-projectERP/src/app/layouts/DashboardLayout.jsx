import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../features/dashboard/components/Navbar";
import Breadcrumbs from "../../shared/components/Breadcrumbs";

const DashboardLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[1fr_7fr]">
      <Navbar />
      <div className="p-4">
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;