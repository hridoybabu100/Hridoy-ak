"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TechStack = () => {
  const marqueeRef = useRef(null);

  const tools = [
    { name: "React", color: "text-blue-400" },
    { name: "Next.js", color: "text-white" },
    { name: "GSAP", color: "text-green-500" },
    { name: "Framer Motion", color: "text-purple-500" },
    { name: "Tailwind CSS", color: "text-cyan-400" },
    { name: "TypeScript", color: "text-blue-600" },
    { name: "Node.js", color: "text-green-600" },
    { name: "MongoDB", color: "text-green-400" },
    { name: "Three.js", color: "text-white" },
    { name: "Lenis", color: "text-purple-400" },
  ];

  // Double the tools for infinite loop
  const duplicatedTools = [...tools, ...tools, ...tools, ...tools];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 overflow-hidden border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 mb-16">
        <p className="text-purple-500 font-mono tracking-[0.4em] uppercase text-xs mb-4">ENGINEERING STACK</p>
        <h2 className="text-4xl font-black text-white tracking-tighter">TOOLS OF THE <span className="text-gradient">FUTURE</span></h2>
      </div>

      <div ref={marqueeRef} className="relative flex whitespace-nowrap">
        <div className="marquee-inner flex gap-8 items-center py-4">
          {duplicatedTools.map((tool, index) => (
            <div 
              key={index} 
              className="glass-morphism px-10 py-6 rounded-2xl flex items-center gap-4 group hover:border-purple-500/50 hover:scale-105 transition-all duration-500 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 group-hover:animate-ping" />
              <span className={`text-xl font-black uppercase tracking-tighter ${tool.color} opacity-50 group-hover:opacity-100 transition-opacity`}>
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-purple-600/5 blur-[120px] pointer-events-none" />
    </section>
  );
};

export default TechStack;
