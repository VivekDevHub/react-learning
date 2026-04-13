import React from "react";
import { Search, Download, Plus, Eye, Pencil, Trash2 } from "lucide-react";

const employees = [
  {
    name: "Alexandria Mercer",
    email: "amercer@arch-erp.com",
    role: "Lead Architect",
    dept: "Design",
    status: "Active",
    date: "Jan 12, 2021",
  },
  {
    name: "Julian Thorne",
    email: "jthorne@arch-erp.com",
    role: "Senior Project Manager",
    dept: "Operations",
    status: "On Leave",
    date: "Nov 28, 2019",
  },
  {
    name: "Elena Rodriguez",
    email: "erodriguez@arch-erp.com",
    role: "BIM Specialist",
    dept: "Engineering",
    status: "Active",
    date: "Mar 05, 2022",
  },
  {
    name: "Marcus Chen",
    email: "mchen@arch-erp.com",
    role: "Urban Planner",
    dept: "Design",
    status: "Active",
    date: "Jun 15, 2023",
  },
];

const EmployeePage = () => {
  return (
    <div className="flex-1 bg-gray-50 p-6">
      {/* 🔷 Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Personnel Directory</h1>
          <p className="text-gray-500 text-sm">
            Manage and monitor the organization's human capital.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="btn-light">
            <Download size={16} /> Export
          </button>
          <button className="btn-primary">
            <Plus size={16} /> Add Employee
          </button>
        </div>
      </div>

      {/* 🔷 Search + Filter */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center bg-white px-3 py-2 rounded-lg border w-full">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search by name, role, or department..."
            className="ml-2 outline-none text-sm w-full"
          />
        </div>

        <select className="input w-48">
          <option>All Departments</option>
        </select>

        <div className="bg-white p-3 rounded-lg border">☰</div>

        {/* Active Staff Card */}
        <div className="bg-green-700 text-white px-6 py-4 rounded-xl ml-auto">
          <p className="text-xs">ACTIVE STAFF</p>
          <h2 className="text-2xl font-bold">142</h2>
        </div>
      </div>

      {/* 🔷 Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-6 px-6 py-3 text-xs text-gray-400 border-b">
          <p>EMPLOYEE NAME</p>
          <p>ROLE</p>
          <p>DEPARTMENT</p>
          <p>STATUS</p>
          <p>JOINED DATE</p>
          <p className="text-right">ACTIONS</p>
        </div>

        {/* Rows */}
        {employees.map((emp, i) => (
          <div
            key={i}
            className="grid grid-cols-6 items-center px-6 py-4 border-b hover:bg-gray-50"
          >
            {/* Name */}
            <div className="flex items-center gap-3">
              <img
                src={`https://i.pravatar.cc/40?img=${i + 1}`}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">{emp.name}</p>
                <p className="text-xs text-gray-400">{emp.email}</p>
              </div>
            </div>

            {/* Role */}
            <p className="text-sm">{emp.role}</p>

            {/* Department */}
            <span className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-full w-fit">
              {emp.dept}
            </span>

            {/* Status */}
            <p
              className={`text-sm ${
                emp.status === "Active" ? "text-green-600" : "text-orange-500"
              }`}
            >
              ● {emp.status}
            </p>

            {/* Date */}
            <p className="text-sm">{emp.date}</p>

            {/* Actions */}
            <div className="flex justify-end gap-3 text-gray-600">
              <Eye size={16} className="cursor-pointer" />
              <Pencil size={16} className="cursor-pointer" />
              <Trash2 size={16} className="cursor-pointer" />
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-3 text-sm text-gray-500">
          <p>Showing 1 to 4 of 142 results</p>

          <div className="flex gap-2">
            <button className="page-btn">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
