"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Left Section - Logo + Tagline */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <div className="flex justify-center md:justify-start items-center">
            <Image
              src="/sowash-logo.png"
              alt="SoWash Logo"
              width={180}
              height={160}
              className="w-72 sm:w-4xl md:w-6xl h-auto object-contain"
              priority
            />
          </div>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            A one stop solution to all your cleaning needs. Maximize efficiency, extend lifespan.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">Contact Us</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">Resources</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition-colors">Offices</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Social Links</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
              <FaFacebookF />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Call Us Now Section */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        <h4 className="text-base sm:text-lg font-semibold mb-2">Call Us Now</h4>
        <div className="flex justify-center items-center space-x-2 text-green-400 font-bold text-base sm:text-lg">
          <PhoneCall />
          <span>111-SOWASH</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs sm:text-sm mt-6">
        Copyright © 2025 SoWash. All rights reserved.
      </div>

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/1111111111"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </Link>
    </footer>
  );
}
