import React from "react";
import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  let { register, handleSubmit, handleLoginFormSubmit, navigate, errors } =
    useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-3xl blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200 rounded-3xl blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              NexusCore
            </h1>
          </div>
          <p className="text-gray-600 text-sm font-medium">
            Architect ERP Management
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Administrator Login
            </h2>
            <p className="text-gray-600 text-sm">
              Secure access to the global employee framework.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleLoginFormSubmit)}
            className="space-y-6 mb-5"
          >
            {/* Email/Username Field */}
            <Input
              register={register}
              name={"email"}
              rules={{
                required: "Email is reqauired",
              }}
              placeholder={"Email"}
              type={"email"}
              label={"Email"}
              error={errors.email}
            />

            {/* Password Field */}
            <Input
              register={register}
              name={"password"}
              rules={{
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "At least 6 characters are required",
                },
              }}
              placeholder={"Password"}
              type={"password"}
              label={"Password"}
              error={errors.password}
            />

            {/* Login Button */}
            <Button text={"Login as Admin"} />
          </form>
          <div>
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-blue-600 cursor-pointer"
              >
                Register Here
              </span>
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 mt-8 pt-6 border-t border-slate-200">
          <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2">
            ? System Support
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2">
            ? Compliance
          </button>
        </div>

        {/* Version Info */}
        <div className="text-center mt-8 pt-6 text-xs text-gray-500">
          VERSION 4.0-ALPHA | Encrypted Environment
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
