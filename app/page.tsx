import Shop from "@/components/Shop";
import { products } from "@/lib/products";

export default function App() {
  return (
    <main className="container mx-auto flex">
      <Shop items={products} />
    </main>
  );
}
