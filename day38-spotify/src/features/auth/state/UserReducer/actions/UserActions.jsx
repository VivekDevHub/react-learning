export const setUsersAction = (state, action) => {
  state.users = action.payload;
};

export const setLogUserAction = (state, action) => {
  state.logUser = action.payload;
};
