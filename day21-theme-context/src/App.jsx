import React, { useContext } from "react";
import About from "../components/About";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import { Theme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const App = () => {
  const { theme } = useContext(Theme);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-100"
      }`}
    >
      <Navbar />

      <div className="px-[100px] py-10 flex justify-center">
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;