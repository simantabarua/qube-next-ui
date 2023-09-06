"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "public/logo.svg";
import Link from "next/link";

interface NavLink {
  text: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { text: "Home", href: "#" },
  { text: "Services", href: "#" },
  { text: "Contact", href: "#" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 z-50 w-full">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden rounded-md p-4 text-gray-400 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all ease-in-out duration-300"
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            )}
          </button>
          <div className="flex flex-1 items-center justify-between gap-6 sm:items-stretch sm:justify-start">
            <Image
              src={Logo}
              alt="qubenext logo"
              className="max-h-12 max-w-xs"
            />
            {/* Desktop */}
            <div className=" space-x-4 text-xl hidden md:flex">
              {NAV_LINKS.map((link, index) => (
                <Link key={index} href={link.href} className="navLink">
                  {link.text}
                </Link>
              ))}
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
  className={`fixed top-0 left-0 w-full h-full sm:hidden transform transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-y-0 mt-20" : "-translate-y-full"
  }`}
  id="mobile-menu"
>
  <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col gap-3">
    {NAV_LINKS.map((link, index) => (
      <Link key={index} href={link.href} className="navLink hover:bg-slate-400">
        {link.text}
      </Link>
    ))}
  </div>
</div>


    </nav>
  );
};

export default Navbar;
