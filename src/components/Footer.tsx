"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 border-t border-zinc-800 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} Tanmay Grandhisiri. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="https://github.com/tanmay-sketch" className="hover:text-white transition-colors">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/tanmay-grandhisiri" className="hover:text-white transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 