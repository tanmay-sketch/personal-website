'use client';

import { NavbarComponent } from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { BackgroundRippleEffect } from "@/components/BackgroundRippleEffect";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background effects */}
      <BackgroundRippleEffect />
      
      <main className="relative z-10 flex min-h-screen flex-col items-center">
        {/* Navbar */}
        <NavbarComponent />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
} 