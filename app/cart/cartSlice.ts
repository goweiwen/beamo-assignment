import { CartItem } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quantico } from "next/font/google";

type CartState = {
  items: CartItem[];
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Add a new item to the cart. If an item of the same ID already exists,
    // increase the quantity of it instead.
    addItem: (state: CartState, action: PayloadAction<CartItem>) => {
      let item = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (item !== undefined) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    // Remove an item from the cart by product ID
    removeItem: (state: CartState, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
    // Update the quantity of an item in the cart
    updateItem: (state: CartState, action: PayloadAction<CartItem>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (item !== undefined) {
        item.quantity = action.payload.quantity;
      }
    },
    // Empty the cart
    clear: (state: CartState) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;

export const selectItems = (state: { cart: CartState }) => state.cart.items;
export const selectItemIds = (state: { cart: CartState }) =>
  state.cart.items.map((item) => ({
    id: item.product.id,
    quantity: item.quantity,
  }));

export default cartSlice.reducer;
