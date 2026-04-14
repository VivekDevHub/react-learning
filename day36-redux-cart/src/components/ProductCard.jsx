import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  removeFromCart,
} from "../features/cartSlice";
import { useLocation } from "react-router";

const ProductCard = ({ product, quantity }) => {
  let dispatch = useDispatch();

  let { pathname } = useLocation();

  return (
    <div className="w-72 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
  
  {/* Image */}
  <div className="h-52 w-full overflow-hidden bg-gray-100">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-contain p-4 group-hover:scale-110 transition duration-300"
    />
  </div>

  {/* Content */}
  <div className="p-4 flex flex-col gap-2">
    
    {/* Title */}
    <h2 className="text-md font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
      {product.title}
    </h2>

    {/* Description */}
    <p className="text-xs text-gray-500 line-clamp-2">
      {product.description}
    </p>

    {/* Price + Rating */}
    <div className="flex items-center justify-between mt-2">
      <span className="text-lg font-bold text-green-600">
        ₹{product.price}
      </span>

      <span className="text-yellow-500 text-sm font-medium flex items-center gap-1">
        ⭐ {product.rating?.rate}
      </span>
    </div>

    {/* Buttons Section */}
    {pathname === "/cart" ? (
      <div className="mt-3">
        <p className="text-sm text-gray-600">Quantity: {quantity}</p>

        <button
          onClick={() => dispatch(removeFromCart(product))}
          className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-all duration-200 active:scale-95"
        >
          Remove
        </button>
      </div>
    ) : quantity ? (
      <div className="flex items-center justify-center gap-4 mt-3">
        
        <button
          onClick={() => dispatch(decrementQuantity(product))}
          className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition active:scale-90"
        >
          -
        </button>

        <span className="text-lg font-semibold">{quantity}</span>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition active:scale-90"
        >
          +
        </button>

      </div>
    ) : (
      <button
        onClick={() => dispatch(addToCart(product))}
        className="w-full mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition-all duration-200 active:scale-95"
      >
        Add to Cart
      </button>
    )}
  </div>
</div>
  );
};

export default ProductCard;
