"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

// Custom logo component for Tanmay
const CustomLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <span className="font-medium text-xl text-white">Tanmay Grandhisiri</span>
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
            <div className="flex w-full flex-col gap-4">
              <Link href={pathname === "/" ? "#contact" : "/#contact"}>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="secondary"
                  className="w-full"
                >
                  Contact
                </NavbarButton>
              </Link>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Resume
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
