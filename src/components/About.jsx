"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Download,
  MessageSquare,
  Code2,
  GraduationCap,
  MapPin,
  Target,
} from "lucide-react";
import Image from "next/image";
import Magnetic from "./ui/Magnetic";
import AboutImg from "../image/about.png";

const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const stats = [
    {
      label: "PROJECTS COMPLETED",
      value: "20+",
      icon: <Target className="w-4 h-4" />,
    },
    {
      label: "YEARS OF CODING",
      value: "02+",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      label: "HAPPY CLIENTS",
      value: "15+",
      icon: <MessageSquare className="w-4 h-4" />,
    },
    {
      label: "CERTIFICATIONS",
      value: "05+",
      icon: <GraduationCap className="w-4 h-4" />,
    },
  ];

  return (
    <section
      ref={container}
      id="about"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24 items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="lg:col-span-5 relative group">
            {/* Main Image */}
            <motion.div
              style={{ scale }}
              className="relative aspect-[3/4] rounded-[1rem] md:rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 group-hover:border-purple-500/30 transition-all duration-700 shadow-2xl"
            >
              <Image
                src={AboutImg}
                alt="Hridoy Ak"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                placeholder="blur"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              {/* Floating Card */}
              <motion.div
                style={{ y }}
                className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 glass-morphism p-4 md:p-6 rounded-[1rem] md:rounded-[2rem] border border-white/10 neon-glow-purple backdrop-blur-2xl z-10"
              >
                <p className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-purple-400 mb-2 uppercase">
                  WEB-DEVOLOPER
                </p>

                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                  HRIDOY AK
                </h3>

                <div className="flex items-center gap-2 mt-3 md:mt-4 text-[9px] md:text-[10px] font-bold text-gray-400 tracking-widest">
                  <MapPin size={12} className="text-purple-500" />
                  JAMALPUR, BD
                </div>
              </motion.div>
            </motion.div>

            {/* Small Floating Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl md:rounded-3xl overflow-hidden border-4 border-black shadow-2xl z-20 hidden sm:block"
            >
              <img
                src="/about-detail.jpg"
                alt="Detail"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                onError={(e) => {
                  e.target.src =
                    "https://i.ibb.co.com/rYYXkQh/Whats-App-Image-2026-05-09-at-5-54-36-PM.jpg";
                }}
              />
            </motion.div>

            {/* Orbit Effects */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -z-10 -inset-10 md:-inset-20 border border-dashed border-purple-500/20 rounded-full"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -z-10 -inset-4 md:-inset-10 border border-dotted border-blue-500/10 rounded-full"
            />
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Subtitle */}
              <p className="text-purple-500 font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 md:mb-8">
                About me...
              </p>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-[1] tracking-tighter text-white">
                WEB_DEVELOPMENT <br />
                <span className="text-gradient">INNOVATION.</span>
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10 md:mb-12 font-medium">
                I am a dedicated{" "}
                <span className="text-white">Full-Stack Developer</span> with a
                relentless focus on creating premium, high-performance web
                applications. My philosophy blends{" "}
                <span className="text-purple-400 italic">cinematic motion</span>{" "}
                with robust engineering.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 md:gap-5 mb-10 md:mb-12">
                {stats.slice(0, 4).map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-morphism p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="text-purple-500 text-xl">{stat.icon}</div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-black text-white tracking-tighter">
                          {stat.value}
                        </h4>

                        <p className="text-[7px] sm:text-[8px] font-black tracking-[0.2em] text-gray-500 uppercase">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 md:gap-8">
                <Magnetic>
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-7 md:px-10 py-4 md:py-5 rounded-full font-black text-[10px] md:text-xs tracking-[0.15em] md:tracking-[0.2em] hover:bg-purple-600 hover:text-white transition-all shadow-2xl group">
                    <Download
                      size={18}
                      className="group-hover:-translate-y-1 transition-transform"
                    />
                    DOWNLOAD RESUME
                  </button>
                </Magnetic>

                <Magnetic>
                  <a
                    href="#contact"
                    className="text-white font-black tracking-widest text-[10px] flex items-center gap-4 group"
                  >
                    <MessageSquare
                      size={16}
                      className="text-purple-500 group-hover:scale-110 transition-transform"
                    />
                    GET IN TOUCH
                    <span className="group-hover:translate-x-3 transition-transform">
                      →
                    </span>
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="blob w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-purple-900/10 -top-1/2 -right-1/4" />

      <div className="blob w-[250px] h-[250px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-blue-900/10 -bottom-1/4 -left-1/4" />
    </section>
  );
};

export default About;
