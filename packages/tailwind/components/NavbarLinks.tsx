import React from "react";
import Link from "next/link";

const NavbarLinks = () => {
  const basicLinkStyle =
    "flex text-sm text-white hover:text-white-300 cursor-pointer px-4 py-1 rounded-md bg-product-300 hover:bg-product-400";
  return (
    <div className="flex gap-4">
      <Link href="/" className={basicLinkStyle}>
        Main
      </Link>
      <Link href="/second" className={basicLinkStyle}>
        Second Page
      </Link>
      <Link href="/third" className={basicLinkStyle}>
        Third Page
      </Link>
    </div>
  );
};

export default NavbarLinks;
