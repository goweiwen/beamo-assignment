import { Product } from "@/lib/types";

import ShopItem from "@/components/ShopItem";

interface ShopProps {
  items: Product[];
}

function Shop(props: ShopProps) {
  return (
    <ul className="flex flex-wrap justify-center">
      {props.items.map((item) => (
        <li key={item.sku} className="my-2 md:mx-2">
          <ShopItem
            sku={item.sku}
            name={item.name}
            imageUrl={item.imageUrl}
            description={item.description}
            price={item.price}
          />
        </li>
      ))}
    </ul>
  );
}

export default Shop;
