import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";

const ProductCard = () => {
  const { theme } = useContext(Theme);

  return (
    <div
      className={`w-[320px] rounded-2xl overflow-hidden backdrop-blur-lg shadow-2xl transition-all duration-500 hover:scale-105 ${
        theme === "dark"
          ? "bg-white/10 text-white border border-white/20"
          : "bg-white text-black border border-gray-200"
      }`}
    >
      {/* Image */}
      <div className="h-[200px] overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="product"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h1 className="text-xl font-bold">Apple Watch</h1>
        <p className="text-lg font-semibold text-pink-500">₹19,999</p>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Update
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;