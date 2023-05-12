export interface Product {
  sku: number;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
