import Image from "next/image";

import { products } from "@/lib/products";
import { addItem } from "@/app/cart/cartSlice";
import AddToCartButton from "@/components/AddToCartButton";

function ProductPage({ params }: { params: { sku: string } }) {
  const sku = Number(params.sku);
  const product = products[sku];

  if (!product) {
    return null;
  }

  return (
    <main className="container mx-auto my-2 sm:px-3">
      <Image
        src={product.imageUrl}
        alt={product.name}
        className="w-full object-cover"
      />
      <div className="mt-1 px-2 sm:px-0 md:mt-2">
        <h1 className="font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
      <footer className="flex justify-end px-2 sm:px-0">
        <AddToCartButton product={product} quantity={1} />
      </footer>
    </main>
  );
}

export default ProductPage;
