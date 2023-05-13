"use client";

import { useSelector } from "react-redux";
import Link from "next/link";

import ShoppingCart from "@/components/ShoppingCart";
import { selectItems } from "./cartSlice";
import { store } from "../store";

function Cart() {
  const items = useSelector(selectItems);

  return (
    <main className="container mx-auto my-2 sm:px-2">
      <h1 className="mx-2 mb-3 text-lg font-bold sm:mx-0">Shopping Cart</h1>
      <ShoppingCart items={items} />
      <div className="my-2 flex w-full flex-col items-end">
        <Link href="/checkout">
          <button
            className="button button-primary button-lg mx-2 sm:mx-0"
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Cart;
