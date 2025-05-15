'use client';

import { BackgroundRippleEffect } from "@/components/BackgroundRippleEffect";
import { NavbarComponent } from "@/components/Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background effects */}
      <BackgroundRippleEffect />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center">
        {/* Navbar */}
        <NavbarComponent />
        
        {/* Hero Section */}
        <Hero />
      </main>
    </div>
  );
}
