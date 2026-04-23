import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "../../shared/state/ErrorReducer/slicers/ErrorSlice.jsx";
import userReducer from "../../features/auth/state/UserReducer/slicers/UserSlice.jsx";
import songsReducer from "../../features/home/state/SongsReducer/slicers/SongsSlice.jsx";

const store = configureStore({
  reducer: {
    errorReducer: errorReducer,
    userReducer: userReducer,
    songsReducer: songsReducer,
  },
});

export default store;
