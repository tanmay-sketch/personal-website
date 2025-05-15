'use client';

import { BackgroundRippleEffect } from "@/components/BackgroundRippleEffect";
import { NavbarComponent } from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background effects */}
      <BackgroundRippleEffect />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center">
        {/* Navbar */}
        <NavbarComponent />
        
        {/* About Section */}
        <About />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
} 