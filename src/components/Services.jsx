"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Sparkles,
  Globe,
  Cpu,
  Smartphone,
  Rocket,
} from "lucide-react";

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
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="
        flex
        flex-col
        lg:flex-row
        justify-between
        lg:items-end
        gap-10 lg:gap-16
        mb-14 md:mb-20
      "
        >
          {/* Left Content */}
          <div className="max-w-3xl">
            <p
              className="
            text-purple-500
            font-mono
            tracking-[0.25em] md:tracking-[0.4em]
            uppercase
            text-[10px] md:text-xs
            mb-4 md:mb-6
          "
            >
              SPECIALIZATION
            </p>

            <h2
              className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-black
            text-white
            tracking-tighter
            leading-[0.95]
          "
            >
              MY DIGITAL <br />
              <span className="text-gradient">SERVICES.</span>
            </h2>
          </div>

          {/* Right Text */}
          <div
            className="
          max-w-md
          lg:text-right
        "
          >
            <p
              className="
            text-gray-400
            text-sm sm:text-base
            leading-relaxed
            font-medium
          "
            >
              I help brands stand out in the digital age through high-end
              engineering and modern digital experiences.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div
          className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5 md:gap-8
      "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="relative group h-full"
            >
              {/* Card */}
              <div
                className="
              h-full
              glass-morphism
              relative
              overflow-hidden
              z-10
              p-6 sm:p-8 md:p-10 lg:p-12
              rounded-[1.8rem] md:rounded-[2rem]
              border border-white/5
              transition-all duration-700
              group-hover:border-purple-500/30
              group-hover:-translate-y-2 md:group-hover:-translate-y-4
              group-hover:neon-glow-purple
            "
              >
                {/* Icon */}
                <div
                  className={`
                w-14 h-14 md:w-16 md:h-16
                rounded-2xl
                bg-gradient-to-br
                ${service.color}
                p-4
                text-white
                mb-8 md:mb-10
                group-hover:scale-110
                transition-transform duration-500
                shadow-lg
              `}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                text-2xl md:text-3xl
                font-black
                text-white
                mb-4 md:mb-6
                tracking-tighter
                group-hover:text-purple-400
                transition-colors
              "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                text-gray-400
                text-sm md:text-base
                leading-relaxed
                font-medium
                mb-8 md:mb-10
                group-hover:text-gray-300
                transition-colors
              "
                >
                  {service.desc}
                </p>

                {/* Learn More */}
                <div
                  className="
                flex items-center gap-2
                text-[9px] md:text-[10px]
                font-black
                tracking-[0.2em]
                uppercase
                text-purple-500
                opacity-100 md:opacity-0
                md:group-hover:opacity-100
                transition-all
                md:group-hover:translate-x-2
              "
                >
                  LEARN MORE
                  <span>→</span>
                </div>

                {/* Glow */}
                <div
                  className="
                absolute
                -bottom-24
                -right-24
                w-40 h-40 md:w-48 md:h-48
                bg-purple-600/10
                blur-[60px]
                rounded-full
                group-hover:bg-purple-600/20
                transition-all duration-700
              "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA BOX */}
        <div
          className="
        mt-10 md:mt-14
        glass-morphism
        border border-white/5
        rounded-[2rem] md:rounded-[2.5rem]
        p-6 sm:p-8 md:p-12
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-8 md:gap-10
      "
        >
          {/* Text */}
          <div className="text-center lg:text-left">
            <p
              className="
            text-2xl md:text-3xl
            font-black
            text-white
            uppercase
            tracking-tight
            mb-2
          "
            >
              Have a project in mind?
            </p>

            <p
              className="
            text-gray-500
            font-bold
            uppercase
            tracking-[0.2em]
            text-[9px] md:text-[10px]
          "
            >
              Let's build something legendary together.
            </p>
          </div>

          {/* Button */}
          <button
            className="
          w-full sm:w-auto
          flex
          items-center
          justify-center
          gap-3
          bg-purple-600
          text-white
          px-7 md:px-10
          py-4 md:py-5
          rounded-full
          font-black
          uppercase
          tracking-[0.15em]
          text-[10px] md:text-xs
          hover:bg-white
          hover:text-black
          transition-all
          group
          shadow-xl
        "
          >
            <Rocket
              size={18}
              className="
            group-hover:-translate-y-2
            group-hover:translate-x-2
            transition-transform
          "
            />
            Start a Project →
          </button>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Services;
