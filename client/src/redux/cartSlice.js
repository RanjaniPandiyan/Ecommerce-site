import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((prev) => prev.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const { addToCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
