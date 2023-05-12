"use client";

import { useSelector } from "react-redux";

import ShoppingCart from "@/components/ShoppingCart";
import { selectItems } from "./cartSlice";
import { store } from "../store";

function Cart() {
  const items = useSelector(selectItems);

  const checkout = () => {
    store.dispatch({ type: "cart/clear" });
  };

  return (
    <main className="container mx-auto my-2 sm:px-2">
      <h1 className="mx-2 mb-3 text-lg font-bold sm:mx-0">Shopping Cart</h1>
      <ShoppingCart items={items} />
      <div className="my-2 flex w-full justify-end">
        <button className="button button-primary button-lg" onClick={checkout}>
          Checkout
        </button>
      </div>
    </main>
  );
}

export default Cart;
