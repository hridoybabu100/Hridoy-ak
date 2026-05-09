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
    restDelta: 0.001,
  });

  const experiences = [
    {
      year: "2024 - PRESENT",
      title: "MERN STACK SPECIALIST",
      company: "PROFESSIONAL TRAINING & FREELANCE",
      desc: "Architecting high-performance web applications using the full MERN stack. Focused on scalability, clean code, and premium UI/UX.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      year: "2023 - 2024",
      title: "DIPLOMA IN ENGINEERING",
      company: "DINAJPUR POLYTECHNIC INSTITUTE",
      desc: "Specialized in core engineering principles, problem-solving, and technical foundations with a high CGPA.",
      tags: ["Software Engineering", "DSA", "Web Fundamentals"],
    },
    {
      year: "2024",
      title: "100 DAYS OF CODE",
      company: "SELF-DRIVEN CHALLENGE",
      desc: "Building and shipping daily projects, mastering new libraries, and strengthening algorithmic thinking.",
      tags: ["Consistency", "Rapid Learning", "Git"],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="journey"
      className="py-20 md:py-28 lg:py-32 relative bg-black overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <p className="text-purple-500 font-mono tracking-[0.25em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6">
            THE JOURNEY
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1]">
            TIMELINE & <span className="text-gradient">GROWTH.</span>
          </h2>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div
            style={{
              scaleY,
              transformOrigin: "top",
            }}
            className="
          absolute 
          left-4 
          sm:left-6 
          md:left-1/2 
          md:-translate-x-1/2
          top-0
          w-[2px]
          h-full
          bg-gradient-to-b
          from-purple-500
          via-blue-500
          to-transparent
        "
          />

          {/* Timeline Items */}
          <div className="space-y-14 sm:space-y-20 md:space-y-28 lg:space-y-32">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`
              relative flex flex-col md:flex-row items-start
              ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
            `}
              >
                {/* Dot */}
                <div
                  className="
                absolute
                left-4
                sm:left-6
                md:left-1/2
                md:-translate-x-1/2
                top-8
                w-4
                h-4
                rounded-full
                bg-purple-500
                border-4
                border-black
                shadow-[0_0_20px_#a855f7]
                z-20
              "
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`
                ml-14 sm:ml-20 md:ml-0
                w-[calc(100%-3.5rem)]
                sm:w-[calc(100%-5rem)]
                md:w-[46%]
                glass-morphism
                border border-white/5
                hover:border-purple-500/30
                rounded-2xl md:rounded-3xl
                p-5 sm:p-6 md:p-8
                transition-all duration-500
                group
              `}
                >
                  {/* Year */}
                  <p className="text-purple-400 text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase mb-4">
                    {exp.year}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-3 group-hover:text-purple-400 transition-colors">
                    {exp.title}
                  </h3>

                  {/* Company */}
                  <p className="text-sm sm:text-base text-gray-400 font-semibold mb-4">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.skills?.map((skill, i) => (
                      <span
                        key={i}
                        className="
                      px-3 py-1.5
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-[10px] sm:text-xs
                      font-bold
                      tracking-wide
                      text-gray-300
                    "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[500px] lg:h-[700px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[250px] md:w-[450px] lg:w-[600px] h-[250px] md:h-[450px] lg:h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

const TimelineItem = ({ exp, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`
    relative
    flex flex-col md:flex-row
    items-start md:items-center
    justify-between
    gap-8 md:gap-0
    ${isEven ? "md:flex-row-reverse" : ""}
  `}
    >
      {/* LEFT / RIGHT CARD */}
      <div className="w-full md:w-[45%] relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            x: isEven ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
        glass-morphism
        relative
        overflow-hidden
        p-5 sm:p-6 md:p-8 lg:p-10
        rounded-[1.8rem] md:rounded-[2.5rem]
        border border-white/5
        hover:border-purple-500/30
        transition-all duration-500
        group
      "
        >
          {/* Glow Effect */}
          <div
            className="
          absolute
          top-0
          right-0
          w-20 h-20 md:w-24 md:h-24
          bg-purple-600/5
          blur-[40px]
          rounded-full
          group-hover:bg-purple-600/10
          transition-all
        "
          />

          {/* YEAR */}
          <p
            className="
          text-purple-500
          font-mono
          font-bold
          text-[10px] sm:text-xs
          mb-3 md:mb-4
          tracking-[0.25em]
          uppercase
        "
          >
            {exp.year}
          </p>

          {/* TITLE */}
          <h3
            className="
          text-2xl sm:text-3xl md:text-4xl
          font-black
          text-white
          mb-2
          tracking-tight
          group-hover:text-purple-400
          transition-colors
          leading-tight
        "
          >
            {exp.title}
          </h3>

          {/* COMPANY */}
          <p
            className="
          text-gray-500
          font-bold
          text-[9px] sm:text-[10px]
          mb-5 md:mb-8
          tracking-[0.2em]
          uppercase
        "
          >
            {exp.company}
          </p>

          {/* DESCRIPTION */}
          <p
            className="
          text-gray-400
          text-sm sm:text-base
          font-medium
          leading-relaxed
          mb-6 md:mb-8
        "
          >
            {exp.desc}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="
              text-[8px] sm:text-[10px]
              font-black
              tracking-[0.15em]
              text-white
              border border-white/10
              px-3 sm:px-4
              py-2
              rounded-full
              bg-white/[0.03]
              group-hover:border-purple-500/30
              transition-colors
            "
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CENTER TIMELINE DOT */}
      <div
        className="
      absolute
      left-4
      sm:left-6
      md:left-1/2
      md:-translate-x-1/2
      top-8 md:top-12
      z-20
    "
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
        w-4 h-4
        bg-black
        border-2 border-purple-500
        rounded-full
        shadow-[0_0_15px_#a855f7]
      "
        />
      </div>

      {/* EMPTY SIDE FOR DESKTOP */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

export default Experience;
