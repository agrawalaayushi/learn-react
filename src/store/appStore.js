import { configureStore } from "@reduxjs/toolkit";

// import the reducer function from the counter slice and add it to our store.
import cartReducer from "./cartSlice";

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
const appStore = configureStore({
  reducer: {
    // By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
    cart: cartReducer,
  },
});

export default appStore