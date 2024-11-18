import React from "react";
import Mobnav from "./Mobnav";
import Navbar from "./Navbar";
import { Logo } from "./ui/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo component */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Mobnav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
