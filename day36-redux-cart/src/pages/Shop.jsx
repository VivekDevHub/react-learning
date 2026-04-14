import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);
  let { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    (async () => {
      try {
        let res = await axiosInstance.get("/products");
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        console.log("Error in products api", error);
      }
    })();
  }, []);

 return (
  <div className="min-h-screen bg-gray-50 px-6 py-8">
    
    {/* Heading */}
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      🛍️ Explore Products
    </h1>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((elem) => {
        let cartItem = cartItems.find((val) => val.id === elem.id);

        return (
          <ProductCard
            product={elem}
            key={elem.id}
            quantity={cartItem?.quantity}
          />
        );
      })}
    </div>
  </div>
);
};

export default Shop;