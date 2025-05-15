"use client";

import React from "react";
import ImageGrid from "@/components/layout-grid-demo";

export default function About() {
  return (
    <section id="about" className="w-full py-24 container mx-auto px-6 relative z-20">
      <div className="flex flex-col gap-16 relative">
        {/* Top row of images */}
        <ImageGrid position="top" />

        {/* Center content */}
        <div className="text-center max-w-3xl mx-auto relative">
          <h2 className="text-5xl font-bold mb-8 text-white">About Me</h2>
          
          <p className="text-zinc-300">
            I&apos;m an Aspiring AI/ML engineer, studying Computational Data Science at Michigan State. 
            I love to watch all sorts of sports and play basketball. I believe in constantly learning and believing
            and am always open to trying out new stuff (as long as its not too boring 😅). 
          </p>
        </div>

        {/* Bottom row of images */}
        <ImageGrid position="bottom" />
      </div>
    </section>
  );
} 