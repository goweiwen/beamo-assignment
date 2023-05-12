import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/types";

interface ShoppingCartItemProps {
  product: Product;
  quantity: number;
}

const formatSlug = (name: string) =>
  name.replace(/ /g, "+").replace(/[^a-zA-Z0-9+]/g, "");

function ShopItem({ product, quantity }: ShoppingCartItemProps) {
  return (
    <div className="flex w-full flex-row px-2 sm:px-0">
      <Link
        href={`/item/${product.sku}/${formatSlug(product.name)}`}
        className="link"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-32 object-cover"
        />
      </Link>
      <div className="mx-2 flex flex-1 items-center sm:mx-4">
        <div>
          <h1 className="font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
      <div className="mx-2 flex items-center sm:mx-4">
        <p>{quantity}x</p>
      </div>
      <div className="mx-2 flex items-center sm:mx-4">
        <p>${quantity * product.price}</p>
      </div>
      <footer className="flex items-center justify-end">
        <button className="button button-normal button-md">Remove</button>
      </footer>
    </div>
  );
}

export default ShopItem;
