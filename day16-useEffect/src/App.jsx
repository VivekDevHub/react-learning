import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import axios from "axios";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  console.log("users->", users);

  // API CALL-----

  (() => {
    console.log("hellosssss...");
  })();

  useEffect(() => {
    (async () => {
      let res = await axios.get("https://dummyjson.com/users");
      setUsers(res.data.users);
    })();
  }, []);

  return (
    <div>
      <h1>App</h1>

      <button onClick={() => setToggle((prev) => !prev)}>Change</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        {users.map((elem) => (
          <h1 key={elem.id}>{elem.firstName}</h1>
        ))}
      </div>
    </div>
  );
};

export default App;