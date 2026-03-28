import React, { useContext, useState } from "react";
import { MyStore } from "./context/MyContext";
import DashboardOne from "./components/dashboardOne/DashboardOne";
import DashboardTwo from "./components/dashboardTwo/DashboardTwo";
import Cart from "./components/dashboardOne/Cart";

const App = () => {
  let data = useContext(MyStore);
  console.log("data from context->",data);

  const [toggle, setToggle] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [getClickedProduct, setGetClickedProduct] = useState(null);

  console.log("cart items->", cartItems);

  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>
        Go to {toggle ? "Home" : "Users"}
      </button>
      <button onClick={() => setShowCart(true)} style={{ marginLeft: "40px" }}>
        Show Cart
      </button > 

      {toggle ? (
        <div>
          <DashboardTwo getClickedProduct={getClickedProduct} />
        </div>
      ) : (
        <div>
          <DashboardOne
            setGetClickedProduct={setGetClickedProduct}
            setCartItems={setCartItems}
          />
        </div>
      )}

      {showCart && (
        <div
          style={{
            position: "absolute",
            top: "0",
            height: "100vh",
            backgroundColor: "gray",
            width: "100vw",
          }}
        >
          <Cart cartItems={cartItems} setShowCart={setShowCart} />
        </div>
      )}
    </div>
  );
};

export default App;