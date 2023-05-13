import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="h-12 bg-white shadow-md">
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
          <Link
            href="/cart"
            className="button-normal mr-1 flex aspect-square h-full w-8 items-center justify-center rounded-full"
          >
            <Image
              src={require("../public/images/cart.svg")}
              width="16"
              height="14"
              alt="Cart"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
