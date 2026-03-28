import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const DashboardOne = ({ setCartItems, setGetClickedProduct }) => {
  const [allProducts, setAllProducts] = useState([]);

  let fetchAllProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res);
    setAllProducts(res.data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  let handleProductDelete = (product_id) => {
    let filterProducts = allProducts.filter((elem) => elem.id !== product_id);
    setAllProducts(filterProducts);
  };

  return (
    <div>
      <h1>Product Home</h1>
      <div>
        {allProducts.map((elem) => {
          return (
            <ProductList
              setGetClickedProduct={setGetClickedProduct}
              key={elem.id}
              handleProductDelete={handleProductDelete}
              product={elem}
              setCartItems={setCartItems}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardOne;