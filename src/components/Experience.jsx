"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      year: "2024 - PRESENT",
      title: "MERN STACK SPECIALIST",
      company: "PROFESSIONAL TRAINING & FREELANCE",
      desc: "Architecting high-performance web applications using the full MERN stack. Focused on scalability, clean code, and premium UI/UX.",
      tags: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
      year: "2023 - 2024",
      title: "DIPLOMA IN ENGINEERING",
      company: "DINAJPUR POLYTECHNIC INSTITUTE",
      desc: "Specialized in core engineering principles, problem-solving, and technical foundations with a high CGPA.",
      tags: ["Software Engineering", "DSA", "Web Fundamentals"]
    },
    {
      year: "2024",
      title: "100 DAYS OF CODE",
      company: "SELF-DRIVEN CHALLENGE",
      desc: "Building and shipping daily projects, mastering new libraries, and strengthening algorithmic thinking.",
      tags: ["Consistency", "Rapid Learning", "Git"]
    }
  ];

  return (
    <section ref={containerRef} id="journey" className="py-32 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <p className="text-purple-500 font-mono tracking-[0.4em] uppercase text-xs mb-6">THE JOURNEY</p>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">TIMELINE & <span className="text-gradient">GROWTH.</span></h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent hidden md:block" 
          />

          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? "md:flex-row-reverse" : ""}`}>
      {/* Date Pillar */}
      <div className="w-full md:w-[45%] mb-8 md:mb-0">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`glass-morphism p-10 rounded-[2.5rem] border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/5 blur-[40px] rounded-full group-hover:bg-purple-600/10 transition-all" />
          
          <p className="text-purple-500 font-mono font-bold text-xs mb-4 tracking-widest">{exp.year}</p>
          <h3 className="text-3xl font-black text-white mb-2 tracking-tighter group-hover:text-purple-400 transition-colors">{exp.title}</h3>
          <p className="text-gray-500 font-bold text-[10px] mb-8 tracking-[0.2em]">{exp.company}</p>
          
          <p className="text-gray-400 font-medium leading-relaxed mb-8">{exp.desc}</p>
          
          <div className="flex flex-wrap gap-3">
            {exp.tags.map((tag) => (
              <span key={tag} className="text-[8px] font-black tracking-widest text-white border border-white/10 px-4 py-2 rounded-full group-hover:border-purple-500/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Center Circle */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 md:top-12 z-10 hidden md:block">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="w-4 h-4 bg-black border-2 border-purple-500 rounded-full shadow-[0_0_15px_#a855f7]"
        />
      </div>

      {/* Placeholder for spacing */}
      <div className="w-full md:w-[45%]" />
    </div>
  );
};

export default Experience;
