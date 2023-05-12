import Image from "next/image";
import Link from "next/link";

interface ShopItemProps {
  sku: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

const formatSlug = (name: string) =>
  name.replace(/ /g, "+").replace(/[^a-zA-Z0-9+]/g, "");

function ShopItem(props: ShopItemProps) {
  return (
    <div className="w-full bg-gray-100 p-4 md:w-96">
      <Link
        href={`/item/${props.sku}/${formatSlug(props.name)}`}
        className="link"
      >
        <Image src={props.imageUrl} alt={props.name} className="object-cover" />
        <div className="mt-1 md:mt-2">
          <h1 className="font-bold">{props.name}</h1>
          <p>{props.description}</p>
          <p>${props.price}</p>
        </div>
      </Link>
      <footer className="flex justify-end">
        <button className="button button-lg button-primary">Add to Cart</button>
      </footer>
    </div>
  );
}

export default ShopItem;
