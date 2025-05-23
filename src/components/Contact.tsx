"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 container mx-auto px-6 relative z-20">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative inline-block mb-12">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[6.5rem] font-bold text-white overflow-hidden">
            GET IN TOUCH
          </h2>
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[6.5rem] font-bold text-blue-200 absolute inset-0 clip-bottom overflow-hidden" style={{ clipPath: 'inset(50% 0 0 0)' }}>
            GET IN TOUCH
          </h2>
        </div>
        
        <a 
          href="mailto:grandhisiri.tanmay@yahoo.com" 
          className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full bg-zinc-800 text-white font-medium border border-zinc-700 hover:bg-zinc-700 transition duration-300 text-xs sm:text-sm md:text-md overflow-hidden text-ellipsis"
        >
          grandhisiri.tanmay@yahoo.com
        </a>
      </motion.div>
    </section>
  );
} 