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
    <div
      className="
    bg-purple-600
    py-2 sm:py-3 md:py-4
    relative
    overflow-hidden
    border-y border-white/10
    z-50
  "
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-purple-600 to-transparent z-10 pointer-events-none" />

      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-purple-600 to-transparent z-10 pointer-events-none" />

      {/* Marquee */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
      flex
      w-max
      whitespace-nowrap
      items-center
      gap-6 sm:gap-8 md:gap-10
    "
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="
          flex
          items-center
          gap-6 sm:gap-8 md:gap-10
        "
          >
            {words.map((word, index) => (
              <span
                key={index}
                className={`
              text-[8px]
              sm:text-[9px]
              md:text-[10px]
              lg:text-xs
              font-black
              tracking-[0.2em] md:tracking-[0.3em]
              uppercase
              transition-all
              duration-300
              ${word === "•" ? "text-white/30" : "text-white"}
            `}
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
