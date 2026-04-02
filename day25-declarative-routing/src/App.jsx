import React from "react";
import Navbar from "./components/Navbar";
import { Routes } from "react-router";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="h-screen p-5">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
