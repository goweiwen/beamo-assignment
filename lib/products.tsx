import { Product } from "./types";

export const products: Map<string, Product> = new Map([
  [
    "prod_20fe7f878c7ccf29",
    {
      id: "prod_20fe7f878c7ccf29",
      name: "Lemonade",
      imageUrl: require("@/public/images/lemonade.webp"),
      description: "A refreshing summer drink.",
      price: 1.0,
    },
  ],
]);
