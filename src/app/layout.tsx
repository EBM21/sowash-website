'use client';
import React from 'react';
import './globals.css';
import Navbar from './components/Navbar';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 🔥 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        >
          <source src="/sowash-login.mp4" type="video/mp4" />
        </video>

        {/* 🔥 Black Transparent Overlay */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Content */}
        <div className="relative z-10">
          
          {children}

        </div>
      </body>
    </html>
  );
}
