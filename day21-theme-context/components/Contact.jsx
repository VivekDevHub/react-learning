import React, { useContext } from "react";
import { Theme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(Theme);

  return (
    <div className={theme === "dark" ? "text-white" : "text-black"}>
      <h1 className="text-6xl">This is Contact</h1>
    </div>
  );
};

export default Contact;
