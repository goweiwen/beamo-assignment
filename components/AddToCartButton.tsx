"use client";

import { store } from "@/app/store";
import { Product } from "@/lib/types";
import Toast from "@/components/Toast";

type AddToCartButtonProps = {
  product: Product;
  quantity: number;
};

function AddToCartButton({ product, quantity }: AddToCartButtonProps) {
  const { toast, setVisible } = Toast("Added to cart");

  const handleClick = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
    store.dispatch({
      type: "cart/addItem",
      payload: { product, quantity },
    });
  };

  return (
    <>
      <button className="button button-lg button-primary" onClick={handleClick}>
        Add to Cart
      </button>
      {toast}
    </>
  );
}

export default AddToCartButton;
