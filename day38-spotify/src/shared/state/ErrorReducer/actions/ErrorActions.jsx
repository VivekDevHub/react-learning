export const setError = (state, action) => {
    let { error, message } = action.payload;
    state.error = error,
    state.message = message;
}