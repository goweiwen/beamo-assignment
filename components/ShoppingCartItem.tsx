import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/types";
import { store } from "@/app/store";

type ShoppingCartItemProps = {
  product: Product;
  quantity: number;
};

const formatSlug = (name: string) =>
  name.replace(/ /g, "+").replace(/[^a-zA-Z0-9+]/g, "");

function ShopItem({ product, quantity }: ShoppingCartItemProps) {
  const handleRemoveClick = () => {
    store.dispatch({ type: "cart/removeItem", payload: product.id });
  };

  return (
    <tr>
      <td className="w-32">
        <Link
          href={`/item/${product.id}/${formatSlug(product.name)}`}
          className="link"
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="w-32 object-cover"
          />
        </Link>
      </td>
      <td className="px-2">
        <p>{product.name}</p>
        <p className="hidden text-sm sm:inline">{product.description}</p>
      </td>
      <td className="mx-2 text-center">
        <button
          className="button button-sm button-normal hidden sm:inline"
          onClick={() =>
            store.dispatch({
              type: "cart/updateItem",
              payload: { product, quantity: quantity - 1 },
            })
          }
        >
          -
        </button>
        <span className="px-2">{quantity}</span>
        <button
          className="button button-sm button-normal hidden sm:inline"
          onClick={() =>
            store.dispatch({
              type: "cart/updateItem",
              payload: { product, quantity: quantity + 1 },
            })
          }
        >
          +
        </button>
      </td>
      <td className="px-2 text-center">
        <span>
          $
          {(quantity * product.price).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </td>
      <td className="px-2 text-right">
        <button
          className="button button-normal button-md"
          onClick={handleRemoveClick}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default ShopItem;
