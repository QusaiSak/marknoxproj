"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

interface NavigationItem {
  path: string;
  label: string;
}

const Navigation: NavigationItem[] = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#project", label: "Project" },
  { path: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <NavigationMenu className="px-4">
      <NavigationMenuList className="space-x-2">
        {Navigation.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link
              href={item.path}
              className="px-4 py-2 text-sm font-medium rounded-md transition-all hover:bg-primary/10 hover:text-primary">
              {item.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
