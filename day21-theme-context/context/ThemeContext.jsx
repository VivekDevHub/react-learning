import { createContext, useState } from "react";

//consumer
export let Theme = createContext();

export let ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [renderPages, setRenderPages] = useState("home");


  return (
    // provider
    <Theme.Provider value={{ theme, setTheme, renderPages, setRenderPages, Theme }}>
      {children}
    </Theme.Provider>
  );
};