"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Logo } from "./ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navigation = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#project", label: "Project" },
  { path: "#contact", label: "Contact" },
];

const Mobnav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative group p-2 hover:bg-primary/10">
          <Menu className="h-6 w-6 transition-transform group-hover:scale-110" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] border-l border-primary/20 backdrop-blur-lg">
        <SheetHeader className="border-b border-primary/20 pb-4">
          <SheetTitle>
            <Logo imageSize={32} className="justify-center" />
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8">
          {Navigation.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="flex items-center px-4 py-3 text-lg font-medium transition-all
                         hover:bg-primary/10 hover:text-primary rounded-md
                         focus:outline-none focus:ring-2 focus:ring-primary/50
                         group relative">
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 bg-primary/5 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300" />
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Mobnav;
