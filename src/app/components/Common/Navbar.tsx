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
  { text: "Home", href: "#home" },
  { text: "Services", href: "#services" },
  { text: "Contact", href: "#contact" },
  { text: "Our team", href: "#our-team" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 z-50 w-full">
      <div className="container mx-auto h-16 flex justify-between items-center px-4 md:px-8">
        <div className="w-32">
          <Image src={Logo} alt="qubenext logo" className="w-full h-full" />
        </div>

        <div className=" space-x-4 text-xl  hidden md:block">
          {NAV_LINKS.map((link, index) => (
            <Link key={index} href={link.href} className="navLink">
              {link.text}
            </Link>
          ))}
        </div>

        <button className="px-3 py-1.5 md:px-4 md:py-2 text-white text-xs md:text-sm md:font-bold bg-primary rounded-md shadow-xl hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Start Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
