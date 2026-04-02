import React, { useContext } from "react";
import { CartStore } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  let { cartItems } = useContext(CartStore);

  return (
    <div>
      <h1>Cart </h1>

      <div className="grid grid-cols-5 gap-4">
        {cartItems.map((elem) => {
          return <ProductCard key={elem.id} product={elem} />;
        })}
      </div>
    </div>
  );
};

export default Cart;