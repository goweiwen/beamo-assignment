"use client";

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/cart/cartSlice";

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

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
