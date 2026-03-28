import React from "react";

const Cart = ({ setShowCart, cartItems }) => {
  return (
    <div>
      <h1>Cart screen</h1>
      <button onClick={() => setShowCart(false)}>Close</button>

      <div>
        {cartItems.map(elem => <h1>{elem.title}</h1>)}
      </div>
    </div>
  );
};

export default Cart;