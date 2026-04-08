import React, { useCallback, useMemo, useState } from "react";
import About from "./components/About";

const App = () => {
  console.log("App rendering..");

  const [count, setCount] = useState(0);

  let heavyCalc = useMemo(() => {
    console.log("heavy calculation running...");
    for (let i = 0; i < 1000000000; i++) {}
  }, []);

  let greet = useCallback(() => {
    console.log("hey good evening bhaiyo...");
  }, []);

  return (
    <div>
      <h1>app - {count}</h1>
      <h1>HEavy calculation value - </h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <About greet={greet} />
    </div>
  );
};

export default App;
