import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";

const Home = () => {
    const { theme } = useContext(Theme);
  
  return (
    <div className={theme === "dark" ? "text-white" : "text-black"}>
      <h1 className="text-6xl">This is Home</h1>
    </div>
  );
};

export default Home;