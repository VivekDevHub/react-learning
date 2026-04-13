import React from "react";

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
    >
      {text}
    </button>
  );
};

export default Button;
