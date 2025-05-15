"use client";
import React from "react";
import Image from "next/image";

const images = [
  "/images/about/hollywood.jpeg",
  "/images/about/msubasketball.jpeg",
  "/images/about/msu_math_research_day.jpeg",
  "/images/about/spartan_stadium.jpeg",
  "/images/about/chicken.jpg",
  "/images/about/mit.jpeg",
  "/images/about/sky.jpeg",
  "/images/about/uuraf.jpeg"
];

interface ImageGridProps {
  position: "top" | "bottom";
}

export default function ImageGrid({ position }: ImageGridProps) {
  // Get first 4 images for top, last 4 for bottom
  const gridImages = position === "top" ? images.slice(0, 4) : images.slice(4);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {gridImages.map((src) => (
        <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image 
            src={src}
            alt={src.split('/').pop()?.replace(/\.(jpeg|jpg)$/, '') || 'About image'}
            fill
            className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 25vw"
            priority={position === "top"}
          />
        </div>
      ))}
    </div>
  );
} 