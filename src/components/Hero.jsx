"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Zap, Eye } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./ui/Magnetic";
import Image from "next/image";
import AvatarImg from "../image/hero-logo.png..jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = React.useState(0);
  const words = [
    "DIGITAL FUTURE",
    "MODERN APPS",
    "CINEMATIC WEB",
    "SCALABLE SOLUTIONS",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Blur fade reveal for text
      gsap.from(".hero-text-reveal", {
        y: 100,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden mt-10"
    >
      {/* Background Blobs */}
      <div className="blob w-[500px] h-[500px] bg-purple-600 top-[-10%] left-[-10%]" />
      <div className="blob w-[400px] h-[400px] bg-blue-600 bottom-[-10%] right-[-10%]" />
      <div className="absolute inset-0 animated-grid opacity-20 pointer-events-none" />

      {/* Floating Tech Rain Effect - Upgraded to Glowing Boxes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "110vh",
              x: `${Math.random() * 100}%`,
              opacity: 0,
              scale: 0.5 + Math.random(),
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 0.4, 0.4, 0],
              rotate: 360,
            }}
            transition={{
              duration: 15 + Math.random() * 25,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear",
            }}
            className="absolute"
          >
            <div className="relative glass-morphism px-3 py-1.5 rounded-lg border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500/50 flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              <span className="text-[8px] font-black tracking-widest text-purple-400">
                {
                  ["JS", "REACT", "NODE", "NEXT", "TS", "MONGODB"][
                    Math.floor(Math.random() * 6)
                  ]
                }
              </span>
              {/* Active Icon in floating rain */}
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-green-500 rounded-full border border-black animate-pulse shadow-[0_0_5px_#22c55e]" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Avatar Section */}
        <div className="relative mb-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-dashed border-purple-500/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-dotted border-blue-500/20 rounded-full"
          />

          <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-purple-500 p-1 bg-black">
            <motion.div
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={AvatarImg}
                alt="Hridoy Ak"
                fill
                className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Active Status Badge on Avatar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 glass-morphism px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-2 shadow-[0_0_15px_#22c55e44] z-20"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
              <span className="text-[8px] font-black tracking-[0.2em] text-white uppercase">
                ACTIVE
              </span>
            </motion.div>
          </div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 top-0 glass-morphism px-4 py-2 rounded-xl text-[10px] font-bold text-white flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Hi, I AM HRIDOY AK..
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -left-16 bottom-4 glass-morphism px-4 py-2 rounded-xl text-[10px] font-bold text-purple-400"
          >
            🚀 NEXT.JS EXPERT
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mt-10">
          <p className="hero-text-reveal text-purple-500 font-mono tracking-[0.4em] uppercase text-xs mb-6">
            Frontend Developer & Creative Designer
          </p>

          <h1 className="hero-text-reveal text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter">
            Building Modern Animated
            <br />
            <span className="text-pink-500"> Websites </span>
            <TypeAnimation className="text-gradient"
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Creative Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="hero-text-reveal text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-3 leading-relaxed font-medium">
            Creating smooth, modern,{" "}
            <span className="text-white italic">
              and high-performance websites
            </span>{" "}
            with stunning animations and clean user experiences.
          </p>

          {/* Language Features */}
          <div className="hero-text-reveal mb-6 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 max-w-3xl mx-auto border-t border-white/5 pt-12">
            {[
              { name: "JAVASCRIPT", color: "text-yellow-400" },
              { name: "TYPESCRIPT", color: "text-blue-500" },
              { name: "REACT", color: "text-cyan-400" },
              { name: "NODE.JS", color: "text-green-500" },
              { name: "NEXT.JS", color: "text-white" },
              { name: "MONGODB", color: "text-green-400" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl glass-morphism border-white/5 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:border-purple-500/50 transition-all duration-500">
                    <span
                      className={`text-xs md:text-sm font-black ${tech.color}`}
                    >
                      {tech.name.split(".")[0][0]}
                      {tech.name.split(".")[0][1]}
                    </span>
                  </div>
                  {/* Active Indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse shadow-[0_0_10px_#22c55e]" />
                </div>
                <span className="text-[8px] md:text-[10px] font-black tracking-widest text-gray-500 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="hero-text-reveal flex flex-wrap justify-center gap-8 mb-16">
            <Magnetic>
              <button className="flex items-center gap-3 bg-purple-600 text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-purple-700 transition-all neon-glow-purple group">
                <Zap
                  size={18}
                  className="fill-white group-hover:animate-pulse"
                />
                START A PROJECT
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </Magnetic>

            <Magnetic>
              <button className="flex items-center gap-3 px-10 py-5 rounded-full border border-white/10 glass-morphism font-bold text-sm hover:bg-white/5 transition-all group">
                <Eye
                  size={18}
                  className="text-purple-500 group-hover:text-white transition-colors"
                />
                VIEW MY WORK
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-24 flex flex-col items-center gap-4 opacity-50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Scroll to Explore
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
