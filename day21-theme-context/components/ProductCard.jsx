import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";

const ProductCard = () => {
  let { theme } = useContext(Theme);

  return (
    <div
      className={`w-[30%] ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}  flex flex-col gap-8 rounded-xl p-6 shadow-xl`}
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div>
        <h1>Product name</h1>
        <p>Product price</p>
      </div>
      <div className="flex justify-between w-full">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
