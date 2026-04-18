import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      let res = await axios.post(
        "https://dummyjson.com/auth/login",
        credentials
      );
      localStorage.setItem("accessToken", res.data.accessToken);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue("login failed");
    }
  }
);