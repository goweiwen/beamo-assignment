export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
