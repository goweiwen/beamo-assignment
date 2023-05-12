import Image from "next/image";
import Link from "next/link";

import { addItem } from "@/app/cart/cartSlice";
import { Product } from "@/lib/types";
import AddToCartButton from "./AddToCartButton";

interface ShopItemProps {
  product: Product;
}

const formatSlug = (name: string) =>
  name.replace(/ /g, "+").replace(/[^a-zA-Z0-9+]/g, "");

function ShopItem({ product }: ShopItemProps) {
  return (
    <div className="w-full bg-gray-100 p-4 md:w-96">
      <Link
        href={`/item/${product.sku}/${formatSlug(product.name)}`}
        className="link"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="object-cover"
        />
        <div className="mt-1 md:mt-2">
          <h1 className="font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </Link>
      <footer className="flex justify-end">
        <AddToCartButton product={product} quantity={1} />
      </footer>
    </div>
  );
}

export default ShopItem;
