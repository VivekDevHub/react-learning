import React from "react";
import { ArrowLeft, User, Briefcase, FileText, Upload } from "lucide-react";
import { useRHF } from "../../../shared/hooks/useRHF";
import { useEmployeeContext } from "../../../shared/hooks/useContextData";
import { nanoid } from "nanoid";
import { storage } from "../../../utils/localStorage";

const RegistrationPage = () => {
  let { register, handleSubmit, errors, reset } = useRHF();
  let { setRegisteredEmployees, registeredEmployees } = useEmployeeContext();

  let handleFormSubmit = (data) => {
    let arr = [...registeredEmployees, { ...data, id: nanoid() }];
    setRegisteredEmployees(arr);
    storage.set("employees", arr);

    console.log(data);
  };

  return (
    <div className="flex gap-6 p-6 bg-gray-50 min-h-screen">
      {/* 🔷 LEFT SECTION */}
      <div className="flex-1">
        {/* Header */}
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-6">
            <p className="flex items-center gap-2 text-sm text-blue-600 cursor-pointer">
              <ArrowLeft size={16} /> Back to Directory
            </p>

            <h1 className="text-2xl font-semibold mt-2">
              Employee Registration
            </h1>

            <p className="text-gray-500 text-sm">
              Onboard a new digital architect to the Core HR ecosystem.
            </p>
          </div>

          {/* 🔷 Personal Info */}
          <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
            <h2 className="flex items-center gap-2 font-medium mb-4">
              <User size={18} /> Personal Information
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("personal_info.name")}
                placeholder="Full Name"
                className="input"
              />
              <input
                {...register("personal_info.email")}
                placeholder="Email Address"
                className="input"
              />
              <input
                {...register("personal_info.phone")}
                placeholder="Phone Number"
                className="input"
              />
              <input
                {...register("personal_info.dob")}
                type="date"
                className="input"
              />
            </div>
          </div>

          {/* 🔷 Employment Details */}
          <div className="bg-white p-5 rounded-xl shadow-sm mb-6">
            <h2 className="flex items-center gap-2 font-medium mb-4">
              <Briefcase size={18} /> Employment Details
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <select {...register("employee_Detail.role")} className="input">
                <option value={"Senior UX Architect"}>
                  Senior UX Architect
                </option>
                <option value={"Frontend Developer"}>Frontend Developer</option>
              </select>

              <select
                {...register("employee_Detail.manager")}
                className="input"
              >
                <option value={"Sarah Chen (Director)"}>
                  Sarah Chen (Director)
                </option>
              </select>

              <input
                {...register("employee_Detail.salary")}
                placeholder="Annual Salary"
                className="input"
              />

              <input
                {...register("employee_Detail.department")}
                placeholder="Department"
                className="input"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button className="text-gray-500">Cancel</button>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
              Save Employee
            </button>
          </div>
        </form>
      </div>

      {/* 🔷 RIGHT SIDEBAR */}
      <div className="w-80 flex flex-col gap-6">
        {/* Profile Preview */}
        <div className="bg-white p-5 rounded-xl shadow-sm text-center">
          <div className="w-20 h-20 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-3">
            📷
          </div>
          <h3 className="font-medium">New Profile Preview</h3>
          <p className="text-xs text-gray-400">
            Employee photo will appear here after upload.
          </p>

          <div className="mt-4 text-left text-sm">
            <p>
              <span className="text-gray-400">Security Access:</span> Standard
            </p>
            <p>
              <span className="text-gray-400">Probation:</span> 90 Days
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-medium mb-3">Onboarding Progress</h3>

          <ul className="text-sm space-y-2">
            <li className="text-blue-600">● Core Details Submission</li>
            <li className="text-gray-400">○ Document Verification</li>
            <li className="text-gray-400">○ System Provisioning</li>
            <li className="text-gray-400">○ Orientation Invite</li>
          </ul>

          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div className="w-1/4 h-2 bg-blue-600 rounded-full"></div>
          </div>

          <p className="text-xs text-blue-600 mt-1">25% Completed</p>
        </div>

        {/* Help Card */}
        <div className="bg-blue-700 text-white p-5 rounded-xl">
          <h3 className="font-medium mb-2">Need Guidance?</h3>
          <p className="text-sm mb-4">
            Refer to the Architect HR Guidelines for internal hiring protocols.
          </p>

          <button className="bg-white text-blue-700 px-4 py-2 rounded-lg text-sm">
            View Manual
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
