import React from "react";

const ProductCard = ({ product, deleteProduct }) => {
  return (
    <div className="w-[260px] bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden flex flex-col group">

      {/* Image */}
     <div className="w-full h-[220px] bg-white flex items-center justify-center p-4">
  <img
    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
    src={product.image}
    alt={product.title}
  />
{/* </div> */}

        {/* Category Badge */}
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {product.rating.rate}
          <span className="text-gray-400 text-xs">
            ({product.rating.count})
          </span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-green-600 mt-1">
          ${product.price}
        </p>
      </div>

      {/* Button */}
      <div className="p-4 pt-0">
        <button
          onClick={() => deleteProduct(product.id)}
          className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-200 active:scale-95"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;