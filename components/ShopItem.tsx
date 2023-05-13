import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/types";
import AddToCartButton from "./AddToCartButton";

type ShopItemProps = {
  product: Product;
};

const formatSlug = (name: string) =>
  name.replace(/ /g, "+").replace(/[^a-zA-Z0-9+]/g, "");

function ShopItem({ product }: ShopItemProps) {
  return (
    <div className="w-full overflow-hidden bg-white pb-3 sm:w-96 sm:shadow-md">
      <Link
        href={`/item/${product.id}/${formatSlug(product.name)}`}
        className="link"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="object-cover"
        />
        <div className="mt-2 px-2 md:mt-3 md:px-3">
          <h1 className="font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </Link>
      <footer className="flex justify-end px-2">
        <AddToCartButton product={product} quantity={1} />
      </footer>
    </div>
  );
}

export default ShopItem;
