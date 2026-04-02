import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { CartStore } from "../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  let { cartItems } = useContext(CartStore);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://dummyjson.com/products");

        setProducts(res.data.products);
      } catch (error) {
        console.log("error in api", error);
      }
    })();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-4">
      {products.map((elem) => {
        let productInCart = cartItems.find((val) => val.id === elem.id);

        return (
          <ProductCard
            key={elem.id}
            product={elem}
            quantity={productInCart?.quantity}
          />
        );
      })}
    </div>
  );
};

export default Home;