import React from "react";
import {
  Bell,
  Settings,
  Search,
  Download,
  Plus,
  Users,
  UserPlus,
  CalendarCheck,
  Building,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex-1 bg-gray-50 p-6">
      {/* 🔷 Top Navbar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-blue-600">Architect ERP</h1>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm border">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="ml-2 outline-none text-sm"
            />
          </div>

          <Bell className="text-gray-600 cursor-pointer" />
          <Settings className="text-gray-600 cursor-pointer" />

          {/* Profile */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">Admin Support</p>
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* 🔷 Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Employee Overview</h2>
          <p className="text-gray-500 text-sm">
            Operational insights and workforce health.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">
            <Download size={16} /> Export Report
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            <Plus size={16} /> New Employee
          </button>
        </div>
      </div>

      {/* 🔷 Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <Users className="text-blue-500 mb-3" />
          <p className="text-sm text-gray-500">TOTAL EMPLOYEES</p>
          <h2 className="text-2xl font-bold">1,284</h2>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <UserPlus className="text-gray-600 mb-3" />
          <p className="text-sm text-gray-500">NEW HIRES (MOM)</p>
          <h2 className="text-2xl font-bold">42</h2>
          <p className="text-xs text-gray-400">5 scheduled for next week</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <CalendarCheck className="text-green-500 mb-3" />
          <p className="text-sm text-gray-500">ATTENDANCE RATE</p>
          <h2 className="text-2xl font-bold">94.8%</h2>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <Building className="text-blue-500 mb-3" />
          <p className="text-sm text-gray-500">DEPARTMENTS</p>
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-xs text-gray-400">3 vacancies in Design</p>
        </div>
      </div>

      {/* 🔷 Bottom Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Chart Section */}
        <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm h-80">
          <h3 className="font-medium mb-4">Departmental Distribution</h3>

          {/* Fake Chart Placeholder */}
          <div className="h-full flex items-center justify-center text-gray-400">
            Chart will go here
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-medium mb-4">Recent Activity</h3>

          <div className="flex flex-col gap-4 text-sm">
            <div>
              <p>
                <span className="font-medium">Sarah Jenkins</span> onboarded for
                Product Team
              </p>
              <p className="text-xs text-gray-400">2 hours ago</p>
            </div>

            <div>
              <p>
                Leave Request from{" "}
                <span className="font-medium">Marcus Aurelius</span> approved
              </p>
              <p className="text-xs text-gray-400">5 hours ago</p>
            </div>

            <div>
              <p>
                <span className="font-medium">David Chen</span> completed 5
                years anniversary
              </p>
              <p className="text-xs text-gray-400">Yesterday</p>
            </div>
          </div>

          <button className="mt-4 w-full bg-blue-100 text-blue-600 py-2 rounded-lg">
            View Full Log
          </button>
        </div>
      </div>

      {/* 🔷 Footer Section */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-medium">Active Hires (This Month)</h3>
      </div>
    </div>
  );
};

export default HomePage;
