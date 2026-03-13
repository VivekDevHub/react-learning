import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
   
    <div className="product-card">
      
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p className="category">{product.category}</p>

      <p className="price">₹{product.price}</p>

      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
