"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="relative">
      <Navbar isHome={isHome} />

      {isHome ? (
        <div className="relative w-full overflow-hidden">
          {/* Background Video */}
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

          {/* Hero Section */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            {/* Yahan hero text / CTA add kar sakte ho */}
          </div>

          {/* Page content neeche */}
          <div className="relative bg-white">{children}</div>
        </div>
      ) : (
        <div className="pt-[80px] bg-white">{children}</div> // 80px = navbar ki height
      )}
    </div>
  );
}
