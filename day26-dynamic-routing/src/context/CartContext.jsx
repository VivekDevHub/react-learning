import { createContext, useState } from "react";

export let CartStore = createContext();

export let ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  let cartLength = cartItems.length;

  let handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Items added in cart");
  };

  let handleQtyInc = (id) => {
    let product = cartItems.find((elem) => elem.id === id);
    product.quantity += 1;
    setCartItems([...cartItems]);
  };

  let handleQtyDec = (id) => {
    let product = cartItems.find((elem) => elem.id === id);

    if (product.quantity > 1) {
      product.quantity -= 1;
      setCartItems([...cartItems]);
    } else {
      let updatedCart = cartItems.filter((elem) => elem.id !== id);
      setCartItems(updatedCart);
    }
  };

  //   console.log("this is Cart items", cartItems);
  return (
    <CartStore.Provider
      value={{
        cartItems,
        setCartItems,
        cartLength,
        handleAddToCart,
        handleQtyInc,
        handleQtyDec,
      }}
    >
      {children}
    </CartStore.Provider>
  );
};