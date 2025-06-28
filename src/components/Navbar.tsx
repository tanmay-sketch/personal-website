"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";

// Custom logo component for Tanmay
const CustomLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <div className="h-12 w-12 relative">
        <Image 
          src="/logo.svg" 
          alt="Tanmay Grandhisiri Logo" 
          fill 
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export function NavbarComponent() {
  const pathname = usePathname();
  
  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Experience",
      link: pathname === "/" ? "#experience" : "/#experience",
    },
    {
      name: "Blog",
      link: "https://blog.tanmaygrandhisiri.com",
      target: "_blank",
    },
    {
      name: "Contact",
      link: pathname === "/" ? "#contact" : "/#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 pt-4">
      <Navbar className="px-4 md:px-8 relative">
        {/* Desktop Navigation */}
        <NavBody className="py-4 px-8">
          <CustomLogo />
          <NavItems items={navItems} className="!justify-end !space-x-12 text-base" />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="py-4 px-8">
          <MobileNavHeader>
            <CustomLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 py-3 text-lg"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
