import React, { useState } from "react";
import About from "./About";

const App = () => {
  console.log("app rendering....");

  let [val, setVal] = useState(0);

  let [count, setCount] = useState({ name: "rahul", age: 80 });

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl">Count is {count.age}</h1>
      <h1>Val is {val}</h1>
      <button
        onClick={() => {
          count.age = 100;
          setCount(count)
          console.log(count)
        }}
        className="p-1 text-sm bg-blue-600 text-white"
      >
        Increment count
      </button>
      <button
        onClick={() => {
          setVal(++val)
        }} 
      >
        val update
      </button>
      <About/>
    </div>
  );
};

export default App;