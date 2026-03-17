import React from "react";

const Register = ({ setToggle }) => {
  return (
    <div className="bg-white w-2xl max-w-md p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Create account
      </h2>
      <p className="text-center text-gray-500 mt-1 mb-6">
        Join us today
      </p>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <button className="w-full mt-2 bg-slate-900 text-white py-3 rounded-xl hover:bg-slate-800 transition">
          Sign up
        </button>
      </div>

      <p className="text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <span
          onClick={() => setToggle(prev => !prev)}
          className="font-semibold text-black cursor-pointer"
        >
          Sign in
        </span>
      </p>
    </div>
  );
};

export default Register;