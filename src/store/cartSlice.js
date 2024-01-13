import { createSlice } from "@reduxjs/toolkit";

/**
 *
 * Creating a slice requires a string name to identify the slice, an initial state value,
 * and one or more reducer functions to define how the state can be updated.
 * Once a slice is created, we can export the generated Redux action creators and
 * the reducer function for the whole slice.
 */

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice( action.payload, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
