import React from "react";
import Link from "next/link";
import Image from "next/image";

import Shop from "@/components/Shop";
import { products } from "@/lib/products";

export default function App() {
  return (
    <React.Fragment>
      <main className="container mx-auto flex my-2">
        <Shop items={products} />
      </main>
    </React.Fragment>
  );
}
