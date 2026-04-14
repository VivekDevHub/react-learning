import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});

console.log("counter slice->", counterSlice);

export let { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
