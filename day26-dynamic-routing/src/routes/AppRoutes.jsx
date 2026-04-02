import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import ProductDetails from "../screens/ProductDetails";
import More from "../components/More";
import Auth from "../screens/Auth";
import Login from "../components/Login";
import Register from "../components/Register";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />}>
          <Route path="more" element={<More />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route index path="" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
