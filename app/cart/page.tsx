import ShoppingCartItem from "@/components/ShoppingCartItem";
import { products } from "@/lib/products";

let cart = [{ product: products[0], quantity: 1 }];

function Cart() {
  return (
    <main className="container mx-auto my-2 sm:px-2">
      <h1 className="mx-2 mb-3 text-lg font-bold sm:mx-0">Shopping Cart</h1>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            <ShoppingCartItem product={item.product} quantity={item.quantity} />
          </li>
        ))}
      </ul>
      <div className="my-2 flex w-full justify-end">
        <button className="button button-primary button-lg">Checkout</button>
      </div>
    </main>
  );
}

export default Cart;
