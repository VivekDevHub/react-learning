import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartStore } from "../context/CartContext";

const ProductCard = ({ product, quantity }) => {
  let { handleAddToCart, cartItems, handleQtyDec, handleQtyInc } =
    useContext(CartStore);

  let navigate = useNavigate();

  let isInCart = cartItems.find((elem) => elem.id === product.id);

  return (
    <div className=" p-5 h-fit flex flex-col gap-4 rounded-xl border-2 border-blue-600">
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="flex items-center"
      >
        <img width={300} src={product?.images[0]} alt="" />
      </div>
      <div>
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
        <h3>${product.price}</h3>
      </div>
      <div className="w-full flex justify-between items-center">
        {isInCart ? (
          <div className="flex gap-4 items-center">
            <p
              onClick={() => handleQtyDec(product.id)}
              className="px-2 bg-red-600 text-white"
            >
              -
            </p>
            <p>{quantity}</p>
            <p
              onClick={() => handleQtyInc(product.id)}
              className="px-2 bg-green-600 text-white"
            >
              +
            </p>
          </div>
        ) : (
          <button
            onClick={() => handleAddToCart(product)}
            className="border-3 p-2 rounded-xl border-green-700"
          >
            Add to Cart
          </button>
        )}
        <button className="border-3 p-2 rounded-xl border-red-700">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;