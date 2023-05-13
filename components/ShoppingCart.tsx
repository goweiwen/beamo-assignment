import ShoppingCartItem from "@/components/ShoppingCartItem";
import { CartItem } from "@/lib/types";
import Link from "next/link";

type ShoppingCartProps = {
  items: CartItem[];
};

function ShoppingCart({ items }: ShoppingCartProps) {
  return items.length === 0 ? (
    <p className="mb-2">
      <span>Your cart is empty. Continue shopping on the </span>
      <Link href="/" className="link text-blue-300">
        homepage
      </Link>
      .
    </p>
  ) : (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="px-2">Image</th>
          <th className="px-2">Item</th>
          <th className="px-2">Quantity</th>
          <th className="px-2">Subtotal</th>
          <th className="px-2"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <ShoppingCartItem
            key={i}
            product={item.product}
            quantity={item.quantity}
          />
        ))}

        <tr>
          <td></td>
          <td></td>
          <td className="text-right">Total:</td>
          <td className="text-center">
            $
            {items
              .reduce((a, b) => a + b.product.price * b.quantity, 0)
              .toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default ShoppingCart;
