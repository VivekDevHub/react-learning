import React, {useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const DashboardOne = () => {
  const [allProduct, setAllProduct] = useState([]);

  let fetchAllProduct = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setAllProduct(res?.data);
  };
  
  useEffect(() => {
    fetchAllProduct();
  }, []);

  let handleProductDelete = (prod_id) => {
    console.log(prod_id);
    let filterProducts = allProduct.filter((elem) => elem.id !== prod_id);
    
    setAllProduct(filterProducts);
  };

  return (
    <div>
      <h1>Product Home</h1>
      <div>
        {allProduct.map((elem) => {
          return (
            <ProductList
              key={elem.id}
              product={elem}
              handleProductDelete={handleProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DashboardOne;
