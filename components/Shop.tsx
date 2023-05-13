import { Product } from "@/lib/types";

import ShopItem from "@/components/ShopItem";

type ShopProps = {
  items: Product[];
};

function Shop(props: ShopProps) {
  return (
    <ul className="flex flex-wrap justify-center">
      {Array.from(props.items.values()).map((item) => (
        <li key={item.id} className="mb-2 sm:mt-4 md:mx-2">
          <ShopItem product={item} />
        </li>
      ))}
    </ul>
  );
}

export default Shop;
