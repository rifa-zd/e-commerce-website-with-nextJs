// had ann error for Link componenet : Uncaught Error: Internal Next.js error: Router action dispatched before initialization.??!!!!!!!!!!!!!!

"use client";

import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  User2,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navLinks = [
    { label: "Shop", href: "/sign-up", hasDropdown: true },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Glow-up Sale", href: "/glow-up-sale" },
  ];

  // Focus search input when it opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
  };

  return (
    <nav className="relative text-foreground border-b border-secondary/50">
      {/* Desktop & Tablet */}

      <div className="hidden md:flex items-center justify-between px-6 lg:px-16 py-3">
        
        <Link href="/" className="text-3xl font-semibold shrink-0">
          Aiza
        </Link>

        {/* navlinks */}
        <div className="flex items-center gap-4 lg:gap-6 flex-1 justify-center ml-6">
          {navLinks.map((navlink) => {
            return (
              <Link
                key={navlink.label}
                href={navlink.href}
                className="relative group text-foreground"
              >
                <span className="flex items-center gap-1">
                  {navlink.label}{" "}
                  {navlink.hasDropdown && <ChevronDown size={15} />}
                </span>
                <span className="nav_link_hover"></span>
              </Link>
            );
          })}
        </div>

        {/* search option with open logic */}
        <div className="flex items-center gap-6 shrink-0">
          {!isSearchOpen ? (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:text-primary transition-colors duration-200"
            >
              <Search size={20} />
            </button>
          ) : (
            <form onSubmit={handleSearch} className="w-48 lg:w-56">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-1 pr-10 text-sm bg-secondary/10 border border-secondary/30 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary/50"
                  onBlur={() => {
                    if (!searchQuery) {
                      setIsSearchOpen(false);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X size={12} />
                </button>
              </div>
            </form>
          )}
        </div>

        <button className="p-2 hover:text-primary transition-colors duration-200">
          <ShoppingCart size={20} />
        </button>

        {/* Avccount */}
        <div className="flex items-center gap-1 ml-2 text-sm lg:text-base transition-all duration-200 hover:text-primary active:scale-95 shrink-0 group">
          <User2
            size={18}
            className="
                group-hover:scale-110"
          />
          <Link href={"/sign-up"}>Account</Link>
        </div>
      </div>

      {/* Mobile */}

      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* keeping another logo here makes it esy to manipulate */}
        <Link href="/" className="text-2xl font-semibold shrink-0">
          Aiza
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:text-primary transition-colors duration-200">
            <Search size={20} />
          </button>

         
          <button className="p-2 hover:text-primary transition-colors duration-200">
            <ShoppingCart size={20} />
          </button>

          <Button
            variant="outline"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:opacity-80 rounded-sm transition-opacity duration-200 ml-auto"
          >
            {isOpen ? (
              <X size={20} className="text-foreground" />
            ) : (
              <Menu
                size={20}
                className="text-foreground hover:text-primary transition-colors duration-200"
              />
            )}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-secondary/50 shadow-lg z-50">
          <div className="flex flex-col divide-y divide-secondary/30">
            {navLinks.map((navlink) => {
              return (
                <Link
                  key={navlink.label}
                  href={navlink.href}
                  className="px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-secondary/20 hover:text-primary active:bg-secondary/30 flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center gap-1">
                    {navlink.label}{" "}
                    {navlink.hasDropdown && <ChevronDown size={15} />}
                  </span>
                </Link>
              );
            })}

            <div className="flex items-center gap-1 text-sm lg:text-base px-4 py-3 transition-colors duration-200 hover:bg-secondary/20 hover:text-primary active:bg-secondary/30 shrink-0 group">
              <User2 size={18} />
              <Link href={"/sign-up"}>Account</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
