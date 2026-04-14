import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let { id } = action.payload;

      let isExist = state.cartItems.find((elem) => elem.id === id);

      if (isExist) {
        isExist.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    decrementQuantity: (state, action) => {
      let { id } = action.payload;

      let item = state.cartItems.find((elem) => elem.id === id);

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((elem) => elem.id !== id);
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (elem) => elem.id !== action.payload.id,
      );
    },
  },
});

export let { addToCart, removeFromCart, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
