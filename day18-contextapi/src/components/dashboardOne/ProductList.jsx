import React from "react";

const ProductList = ({ product , handleProductDelete }) => {
  console.log('product dikha =-=-=-=-', product);
  return (
    <div>
      <h1>{product?.title}</h1>
      <button onClick={()=>{handleProductDelete(product.id)}}>Delete</button>
    </div>
  );
};

export default ProductList;
