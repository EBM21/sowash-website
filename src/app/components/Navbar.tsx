"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ isHome }: { isHome: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Contact Us", href: "/Contact" },
    { name: "Resources", href: "/Resources" },
    { name: "Offices", href: "/Offices" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isHome ? "bg-transparent pt-12" : "bg-white pt-8"}
        `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center h-20">
        {/* Left Links */}
        <div className="hidden md:flex items-center gap-12 text-sm font-light">
          {navLinks.slice(0, 3).map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              active={pathname === link.href}
              isHome={isHome}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="flex px-8 text-4xl font-extrabold tracking-wide cursor-pointer"
        >
          <h1 className="text-green-500 drop-shadow-lg">SO</h1>
          <h1 className="text-sky-400 drop-shadow-lg">WASH</h1>
        </Link>

        {/* Right Links */}
        <div className="hidden md:flex items-center gap-12 text-sm font-light">
          {navLinks.slice(3).map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              active={pathname === link.href}
              isHome={isHome}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className={`md:hidden absolute right-6 top-6 ${
            isHome ? "text-white" : "text-black"
          }`}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-sky-400/20 to-blue-500/20 backdrop-blur-3xl"></div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={36} />
        </button>

        {/* Mobile Nav Links */}
        <div className="flex flex-col items-center gap-8 text-2xl font-light text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              active={pathname === link.href}
              isHome={true} // fullscreen menu always white text
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* 🔗 NavLink with active + home style */
function NavLink({
  href,
  children,
  onClick,
  style,
  active,
  isHome,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  active?: boolean;
  isHome: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={style}
      className={`relative group transition-colors duration-300 ${
        active
          ? "text-green-400 font-semibold"
          : isHome
          ? "text-white hover:text-green-300"
          : "text-black hover:text-green-500"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-green-300 to-sky-300 transition-all duration-500 ease-out ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
}
