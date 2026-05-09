"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Sparkles, Globe, Cpu, Smartphone, Rocket } from "lucide-react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "FRONTEND ENGINEERING",
      desc: "Building immersive, high-performance web interfaces with Next.js, React, and cinematic animations using GSAP & Framer Motion.",
      icon: <Layout className="w-8 h-8" />,
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "BACKEND ARCHITECTURE",
      desc: "Developing robust, scalable server-side systems and RESTful APIs using Node.js, Express, and MongoDB for seamless data flow.",
      icon: <Server className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "MOTION & UI DESIGN",
      desc: "Crafting premium user experiences through advanced motion design, micro-interactions, and pixel-perfect modern aesthetics.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-600 to-pink-500",
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <p className="text-purple-500 font-mono tracking-[0.4em] uppercase text-xs mb-6">SPECIALIZATION</p>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              MY DIGITAL <br />
              <span className="text-gradient">SERVICES.</span>
            </h2>
          </div>
          <div className="max-w-xs text-right">
            <p className="text-gray-400 font-medium">I help brands stand out in the digital age through high-end engineering and design.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group h-full"
            >
              <div className="h-full glass-morphism p-12 rounded-[2rem] border-white/5 transition-all duration-700 group-hover:border-purple-500/30 group-hover:-translate-y-4 group-hover:neon-glow-purple relative overflow-hidden z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 text-white mb-10 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black text-white mb-6 tracking-tighter group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-medium mb-10 group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-purple-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                  LEARN MORE <span>→</span>
                </div>

                {/* Animated Background Gradient */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-600/10 blur-[60px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 glass-morphism p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-white/5 rounded-[2.5rem]">
          <div className="text-center md:text-left">
            <p className="text-2xl font-black text-white uppercase tracking-tighter mb-1">Have a project in mind?</p>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Let's build something legendary together.</p>
          </div>
          <button className="flex items-center gap-3 bg-purple-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all group shadow-xl">
            <Rocket size={18} className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
            Start a Project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
