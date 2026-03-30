import React, { useContext } from "react";
import { ContextProvider, MyStore } from "./context/MyContext";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering...");

  let data = useContext(MyStore);
  console.log(data);
  return (
    <div>
      <h1>App</h1>
      <ContextProvider>
        <Home />
      </ContextProvider>
      <About />
    </div>
  );
};

export default App;