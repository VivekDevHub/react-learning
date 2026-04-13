import React from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Settings,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const navLinkClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition";

  const activeClass = "bg-blue-100 text-blue-600 font-medium";

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between px-4 py-6">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <LayoutDashboard size={18} />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Core HR</h1>
            <p className="text-xs text-gray-500">Management Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeClass : ""}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/employee"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeClass : ""}`
            }
          >
            <Users size={18} />
            Employees
          </NavLink>

          <NavLink
            to="/dashboard/registration"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeClass : ""}`
            }
          >
            <UserPlus size={18} />
            Registration
          </NavLink>

          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? activeClass : ""}`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-500 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Navbar;
