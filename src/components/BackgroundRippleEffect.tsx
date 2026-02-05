"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({ className }: { className?: string }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [gridDimensions, setGridDimensions] = useState({ cols: 16, rows: 12 });
  const [isVisible, setIsVisible] = useState(false);

  // Update grid dimensions on window resize
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cellSize = 80;
      setGridDimensions({
        cols: Math.ceil(width / cellSize) + 2, // Add extra columns to prevent cutoff
        rows: Math.ceil(height / cellSize) + 2  // Add extra rows to prevent cutoff
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Track mouse movement globally to ensure it works
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        setIsVisible(true);
      }
    };

    // Set mouse position to starting point when not moving
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners to document to ensure they trigger
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const cellSize = 80;
  const { rows, cols } = gridDimensions;

  // Create a simpler grid structure
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transform: 'translate(0, 0)'
  };

  // Create cells
  const cells = [];
  for (let i = 0; i < rows * cols; i++) {
    cells.push(
      <div
        key={i}
        className="border-b border-r border-gray-400/20"
        style={{ width: cellSize, height: cellSize }}
      />
    );
  }

  const highlightSize = 200;
  const highlightStyle = {
    position: 'absolute' as const,
    inset: 0,
    zIndex: 1, // Lowered z-index to keep it behind content
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease',
    maskImage: `radial-gradient(${highlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
    WebkitMaskImage: `radial-gradient(${highlightSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
    pointerEvents: 'none' as const
  };

  return (
    <div 
      className={cn("fixed inset-0 w-full h-full z-0 bg-black/95 overflow-hidden pointer-events-none", className)}
      ref={containerRef}
    >
      {/* Background grid (subtle) */}
      <div className="absolute inset-0 opacity-40">
        <div style={gridStyle}>{cells}</div>
      </div>
      
      {/* Highlighted area around cursor */}
      <div style={highlightStyle}>
        <div className="absolute inset-0 opacity-100">
          <div style={gridStyle}>{cells}</div>
        </div>
      </div>
    </div>
  );
};


