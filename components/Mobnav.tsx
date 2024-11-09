"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

// Define the structure of navigation items.
interface NavigationItem {
  path: string;
  label: string;
}

// Example navigation items.
const Navigation: NavigationItem[] = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#project", label: "Project" },
  { path: "#contact", label: "Contact" },
];

const Mobnav = () => {
  return (
    <div>
      {/* Mobile Navigation Sheet */}
      <Sheet>
        {/* Button to trigger opening of the sheet */}
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-4 z-10 md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>

        {/* Sheet content (side menu) */}
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>
              <Link href="#home" className="flex items-center space-x-2">
                <span className="text-2xl font-bold">MarkNox Portfolio</span>
              </Link>
            </SheetTitle>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-2">
            {Navigation.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="flex items-center px-3 py-2 text-sm font-medium">
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobnav;
