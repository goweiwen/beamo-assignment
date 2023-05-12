import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="h-12 bg-gray-100">
      <div className="container mx-auto flex flex-row justify-between">
        <Link href="/">
          <Image
            src={require("../public/images/next.svg")}
            alt="Beamo Store"
            className="h-full px-2"
            width="120"
          />
        </Link>
        <div className="me-2 flex h-full py-2">
          <Link href="/cart">
            <button className="button button-md button-normal">
              <Image
                className="mr-1 inline-block"
                src={require("../public/images/cart.svg")}
                width="16"
                height="14"
                alt="Cart"
              />
              Cart
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
