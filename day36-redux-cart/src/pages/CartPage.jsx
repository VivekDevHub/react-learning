import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const CartPage = () => {
  let { cartItems } = useSelector((store) => store.cart);

  if (cartItems.length < 1)
    return <h1 className="text-5xl font-semibold">No Items here</h1>;
  return (
    <div className="grid grid-cols-4">
      {cartItems.map((elem) => {
        return <ProductCard product={elem} key={elem.id} quantity={elem.quantity} />;
      })}
    </div>
  );
};

export default CartPage;