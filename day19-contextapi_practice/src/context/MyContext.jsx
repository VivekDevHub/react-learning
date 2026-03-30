import { createContext, useState } from "react";

export let MyStore = createContext(); //this is consumer

export let ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  //provider
  return (
    <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
  );
};
