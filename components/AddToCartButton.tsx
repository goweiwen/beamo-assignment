"use client";

import { addItem } from "@/app/cart/cartSlice";
import { store } from "@/app/store";
import { Product } from "@/lib/types";

interface AddToCartButtonProps {
  product: Product;
  quantity: number;
}

function AddToCartButton({ product, quantity }: AddToCartButtonProps) {
  return (
    <button
      className="button button-lg button-primary"
      onClick={() => {
        store.dispatch({
          type: "cart/addItem",
          payload: { product, quantity },
        });
      }}
    >
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
