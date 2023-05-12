import ShoppingCartItem from "@/components/ShoppingCartItem";
import { CartItem } from "@/lib/types";

interface ShoppingCartProps {
  items: CartItem[];
}

function ShoppingCart({ items }: ShoppingCartProps) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <ShoppingCartItem product={item.product} quantity={item.quantity} />
        </li>
      ))}
    </ul>
  );
}

export default ShoppingCart;
