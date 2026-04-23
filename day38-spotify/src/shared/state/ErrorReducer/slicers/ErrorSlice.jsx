import { createSlice } from "@reduxjs/toolkit";
import { setError } from "../actions/ErrorActions";

const ErrorSlice = createSlice({
    name: "error",
    initialState: {
        error: false,
        message: "",
    },
    reducers: {
        setErr: setError
    }
});

export const { setErr } = ErrorSlice.actions;

export default ErrorSlice.reducer;