"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/cart/cartSlice";

export const store = configureStore({
  preloadedState:
    typeof window !== "undefined" && localStorage.getItem("reduxState")
      ? JSON.parse(localStorage.getItem("reduxState")!)
      : undefined,
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
