import { createSlice } from "@reduxjs/toolkit";
import { setLogUserAction, setUsersAction } from "../actions/UserActions";
import { getUsers, getLoggedUser } from "../../../api/AuthApi";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    users: getUsers(),
    logUser: getLoggedUser(),
  },
  reducers: {
    setUsers: setUsersAction,
    setLogUser: setLogUserAction,
  },
});

export const { setUsers, setLogUser } = UserSlice.actions;

export default UserSlice.reducer;
