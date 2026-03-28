import { createContext } from "react";

export let MyStore = createContext();
console.log(MyStore)

export let ContextProvider = ({ children }) => {
  let greet = "good evening";
  let a = 10;
  return <MyStore.Provider value={{ greet, a }}>{children}</MyStore.Provider>;
};