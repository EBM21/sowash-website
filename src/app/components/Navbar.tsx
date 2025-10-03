"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // ✅ Links ek jagah define
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/About" },
    { name: "Services", href: "/Services" },
    { name: "Contact Us", href: "/Contact" },
    { name: "Resources", href: "/Resources" },
    { name: "Offices", href: "/Offices" },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY === 0) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          if (isOpen) setIsOpen(false);

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <div className="w-full min-h-screen bg-transparent">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-transparent pt-12`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center h-20">
          {/* Left Links - Desktop */}
          <div className="hidden md:flex items-center gap-12 text-sm font-light">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Logo - Center */}
          <Link
            href="/"
            className="flex px-8 text-4xl font-extrabold tracking-wide cursor-pointer"
          >
            <h1 className="text-green-500 drop-shadow-lg">SO</h1>
            <h1 className="text-sky-400 drop-shadow-lg">WASH</h1>
          </Link>

          {/* Right Links - Desktop */}
          <div className="hidden md:flex items-center gap-12 text-sm font-light">
            {navLinks.slice(3).map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white absolute pt-12 right-16 top-7"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center h-130 transition-all duration-700 ease-in-out md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Gradient + Blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-sky-400/20 to-blue-500/20 backdrop-blur-3xl"></div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-16 pt-12 text-white"
          >
            <X size={36} />
          </button>

          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center gap-8 text-2xl font-light text-white">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`opacity-0 translate-y-6 animate-fadeInUp`}
                style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

/* 🔗 NavLink with underline animation */
function NavLink({
  href,
  children,
  onClick,
  className = "",
  style,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={style}
      className={`relative group text-white transition-colors duration-300 hover:text-green-300 ${className}`}
    >
      {children}
      <span
        className="
          absolute left-0 -bottom-1 h-[2px] w-0
          bg-gradient-to-r from-green-300 to-sky-300
          transition-all duration-500 ease-out
          group-hover:w-full
        "
      ></span>
    </Link>
  );
}
