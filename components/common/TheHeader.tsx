"use client"; 

import { useState } from "react";
import {
  AppleIcon,
  BotIcon,
  EyeClosed,
  GlassesIcon,
  PinIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function TheHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinksLeft = [
    { id: 1, title: "iOS app", icon: AppleIcon },
    { id: 2, title: "Android app", icon: BotIcon },
  ];

  const navLinksRight = [
    { id: 3, title: "Team", icon: AppleIcon }, // You may replace with a more appropriate icon
    { id: 4, title: "Manifesto", icon: PinIcon },
    { id: 5, title: "Blog", icon: GlassesIcon },
    { id: 6, title: "Privacy", icon: EyeClosed },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-36 py-4 md:py-6">
        <nav className="flex items-center justify-between">
          {/* Logo and left navigation (always visible on desktop) */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                width={500}
                height={500}
                alt="fold logo"
                className="w-8 h-8"
              />
              <span className="font-bold text-xl md:text-2xl text-[#676B89]">
                fold
              </span>
            </div>

            {/* Left nav links - hidden on mobile, visible on md and up */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinksLeft.map((link) => (
                <li key={link.id}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="font-bold text-[#0A2D67] text-lg hover:bg-[#0A2D67]/10"
                  >
                    <link.icon className="mr-1 h-5 w-5" />
                    {link.title}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right nav links - hidden on mobile, visible on md and up */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinksRight.map((link) => (
              <li key={link.id}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-bold text-[#0A2D67] text-lg hover:bg-[#0A2D67]/10"
                >
                  <link.icon className="mr-1 h-5 w-5" />
                  {link.title}
                </Button>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-[#0A2D67] hover:bg-[#0A2D67]/10"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <ul className="space-y-2">
              {[...navLinksLeft, ...navLinksRight].map((link) => (
                <li key={link.id}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start font-bold text-[#0A2D67] text-lg hover:bg-[#0A2D67]/10"
                  >
                    <link.icon className="mr-2 h-5 w-5" />
                    {link.title}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
