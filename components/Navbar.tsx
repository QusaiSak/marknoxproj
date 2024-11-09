"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

interface NavigationItem {
  path: string;
  label: string;
}

const Navigation: NavigationItem[] = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#project" , label: "Project"},
  { path: "#contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Navigation.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link href={item.path} legacyBehavior passHref>
              <div
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === item.path &&
                    "border-b dark:border-white border-black",
                )}>
                {item.label}
              </div>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <div className="h-6 p-2 border-r-2 dark:border-white border-black" />
      <ModeToggle/>
    </NavigationMenu>
  );
};

export default Navbar;
