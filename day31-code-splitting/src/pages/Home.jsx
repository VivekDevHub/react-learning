import React, { useEffect } from "react";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  let { data } = useProducts();

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;