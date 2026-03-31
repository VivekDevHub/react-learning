import React, { useContext, useState } from "react";
import About from "../components/About";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Contact from "../components/Contact";
import { Theme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const App = () => {
  let { theme, renderPages } = useContext(Theme);

  return (
    <div
      className={`h-screen ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } flex flex-col gap-6`}
    >
      <Navbar />
      <div className=" px-[100px]">
        <Routes>
          <Route path="/" element={<ProductCard /> } />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;