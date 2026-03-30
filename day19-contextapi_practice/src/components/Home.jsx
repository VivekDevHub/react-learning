import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {
  console.log("home rendering...");
  let { count, setCount } = useContext(MyStore);
  console.log(count)

  return (
    <div>
      <h1>Home - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Home;