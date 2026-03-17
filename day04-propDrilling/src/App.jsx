import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const App = () => {
  let getDataFromChild = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>Hello APP</h1>
      <About fn={getDataFromChild} />
      <Contact />
    </div>
  );
};

export default App;
