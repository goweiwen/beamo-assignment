import { CartItem } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: CartItem[];
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state: CartState, action: PayloadAction<CartItem>) => {
      let item = state.items.find(
        (item) => item.product.sku === action.payload.product.sku
      );
      if (item !== undefined) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state: CartState, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.sku !== action.payload
      );
    },
    clear: (state: CartState) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;

export const selectItems = (state: { cart: CartState }) => state.cart.items;

export default cartSlice.reducer;
