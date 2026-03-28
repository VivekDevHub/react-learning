import React from "react";

const ProductList = ({
  product,
  handleProductDelete,
  setGetClickedProduct,
  setCartItems,
}) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <button onClick={() => handleProductDelete(product.id)}>Delete</button>
      <button
        onClick={() =>
          setCartItems((prev) => {
            return [...prev, product];
          })
        }
      >
        Add to cart
      </button>

      <button onClick={() => setGetClickedProduct(product)}>Send to User</button>
    </div>
  );
};

export default ProductList;