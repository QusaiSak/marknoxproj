import React from "react";
import Mobnav from "./Mobnav";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-40 w-full">
      <div className="container flex py-2 items-center justify-between px-6 md:px-8">
        {/* Brand Name */}
        <Link href="#home" className="text-2xl font-bold">MyPortfolio</Link>

        {/* Desktop Navbar (hidden on smaller screens) */}
        <div className="hidden md:flex">
          <Navbar />
        </div>

        {/* Mobile Navigation (visible only on smaller screens) */}
        <div className="md:hidden ">
          <Mobnav />
        </div>
      </div>
    </div>
  );
};

export default Header;
