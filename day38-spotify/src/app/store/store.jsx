import { configureStore } from "@reduxjs/toolkit";

export let store = configureStore({
  reducer: {
    player: playerReducer,
    error: errorReducer,
  },
});

export let dispatch = store.dispatch;