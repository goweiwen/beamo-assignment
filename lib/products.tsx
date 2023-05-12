import { Product } from "./types";

export const products: Product[] = [
  {
    sku: 0,
    name: "Lemonade",
    imageUrl: require("@/public/images/lemonade.webp"),
    description: "A refreshing summer drink.",
    price: 4.5,
  },
];
