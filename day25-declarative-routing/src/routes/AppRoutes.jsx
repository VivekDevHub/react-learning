import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Product from "../screens/Product";
import Names from "../screens/Names";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/names/:name" element={<Names />} />
        <Route path="*" element={<h1>Bhqai ye nahi hai..</h1>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;