'use client';

import { BackgroundRippleEffect } from "@/components/BackgroundRippleEffect";
import { NavbarComponent } from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "../components/Hero";

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
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
