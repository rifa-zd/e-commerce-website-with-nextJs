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
import { categories } from "@/data/data";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { useAppContext } from "@/context/AppContext";

export default function Navbar() {
  const { router } = useAppContext();

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navLinks = [
    { label: "Shop", href: "#", hasDropdown: true },
    { label: "New Arrivals", href: "/sign-up" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Glow-up Sale", href: "/glow-up-sale" },
  ];

  const logo = (
    <Link href="/" className="text-3xl font-semibold shrink-0">
      <span className="text-destructive">A</span>iza
    </Link>
  );

  const cartButton = (
    <Button variant={"icons"}>
      <ShoppingCart size={20} />
      <span className="absolute top-0 -right-1 w-4 h-4 bg-primary text-background text-xs font-semibold rounded-full flex items-center justify-center">
        0
      </span>
    </Button>
  );

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

  const searchBar = (
    <>
      {!isSearchOpen ? (
        <Button
          onClick={() => setIsSearchOpen(true)}
          variant={"icons"}
          size={"icon"}
        >
          <Search size={20} />
        </Button>
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
            <Button
              variant={"ghost"}
              size={"xs"}
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <X />
            </Button>
          </div>
        </form>
      )}
    </>
  );

  return (
    <nav className="relative text-foreground border-b border-secondary/50">
      {/* Desktop & Tablet */}

      <div className="hidden md:flex items-center justify-between px-6 lg:px-16 py-3">
        {logo}

        {/* navlinks */}
        <div className="flex items-center gap-4 lg:gap-6 flex-1 justify-center ml-6">
          {navLinks.map((navlink) => {
  if (navlink.hasDropdown) {
    return (
      <div key={navlink.label} className="relative group text-foreground">
          <DropdownMenu>
            <DropdownMenuTrigger>
        <span className="flex items-center gap-1">
          {navlink.label}
              <ChevronDown size={18} className="mt-1" />
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-foreground w-full cursor-pointer">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="font-extrabold text-black">
                  Categories
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((cat, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => router.push(`/routes/categories/${cat.slug}`)}
                    className="cursor-pointer"
                  >
                    {cat.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        <span className="nav_link_hover"></span>
      </div>
    );
  }

  return (
    <Link key={navlink.label} href={navlink.href} className="relative group text-foreground">
      <span>{navlink.label}</span>
      <span className="nav_link_hover"></span>
    </Link>
  );
})}
        </div>

        {/* search option with open logic */}

        <div className="flex items-center gap-1 shrink-0">
          {searchBar}

          {cartButton}

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
      </div>

      {/* ----------------------------Mobile */}

      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {logo}

        {/* Buttons */}
        <div className="flex items-center gap-2 ml-auto">
          {searchBar}

          {cartButton}

          <Button
            variant="outline"
            onClick={() => setisMenuOpen(!isMenuOpen)}
            className="p-2 hover:opacity-80 rounded-sm transition-opacity duration-200 ml-auto"
          >
            {isMenuOpen ? (
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

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-secondary/50 shadow-lg z-50">
          <div className="flex flex-col divide-y divide-secondary/30">
            {navLinks.map((navlink) => {
              const isShop = navlink.hasDropdown;

              return isShop ? (
                // Special handling for "Shop" with dropdown
                <div key={navlink.label}>
                  <button
                    onClick={() => setIsShopOpen(!isShopOpen)}
                    className="px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-secondary/20 hover:text-primary active:bg-secondary/30 flex items-center justify-between w-full"
                  >
                    <span className="flex items-center gap-1">
                      {navlink.label}
                      <ChevronDown
                        size={15}
                        className={isShopOpen ? "rotate-180" : ""}
                      />
                    </span>
                  </button>
                  {isShopOpen && (
                    <div className="bg-secondary/10">
                      {categories.map((cat, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            router.push(`/routes/categories/${cat.slug}`);
                            setisMenuOpen(false);
                          }}
                          className="px-8 py-2 text-sm text-primary hover:text-foreground hover:bg-secondary/20 cursor-pointer"
                        >
                          {cat.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={navlink.label}
                  href={navlink.href}
                  className="px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-secondary/20 hover:text-primary active:bg-secondary/30 flex items-center justify-between"
                  onClick={() => setisMenuOpen(false)}
                >
                  {navlink.label}
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
