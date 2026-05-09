"use client";

import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const words = [
    "FULL-STACK MAGICIAN",
    "•",
    "UI/UX ARCHITECT",
    "•",
    "CINEMATIC MOTION",
    "•",
    "MERN STACK EXPERT",
    "•",
    "AVAILABLE FOR FREELANCE",
    "•",
  ];

  return (
    <div className="bg-purple-600 py-3 relative overflow-hidden border-y border-white/10 z-50">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap items-center gap-10"
      >
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-10">
            {words.map((word, index) => (
              <span 
                key={index} 
                className={`text-[10px] font-black tracking-[0.3em] ${word === "•" ? "text-white/30" : "text-white"}`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
