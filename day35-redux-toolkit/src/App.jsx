import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./features/counterSlice";

const App = () => {
  const [number, setNumber] = useState(0);
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.kittu);

  return (
    <div>
      <h1>Redux padhne wale hai ham</h1>
      <h1>Count is - {count}</h1>
      <input
        onChange={(e) => setNumber(e.target.value)}
        type="text"
        placeholder="Number of amount"
      />
      <button onClick={() => dispatch(incrementByValue(number))}>
        Add amount
      </button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
