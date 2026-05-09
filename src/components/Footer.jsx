"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={20} />, href: "https://www.facebook.com/share/14dQEawQknc/",  },
    { name: "Instagram", icon: <Instagram size={20} />, href: "https://www.instagram.com/hridoyakanda003" },
    { name: "Github", icon: <Github size={20} />, href: "https://github.com/hridoybabu100" },
    { name: "Linkedin", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/hridoybabu/" },
  ];

  return (
    <footer className="py-20 relative overflow-hidden bg-black border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-md">
            <div className="text-4xl font-black tracking-tighter text-white mb-8">
              HRIDOY<span className="text-purple-500"> AKANDA</span>
            </div>
            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10">
              A premium developer portfolio pushing the boundaries of web
              engineering and cinematic motion design. Crafted with passion in
              Bangladesh.
            </p>

            <div className="flex flex-wrap gap-6 text-[10px] font-black tracking-[0.2em]">
              {["NEXT.JS", "GSAP", "FRAMER MOTION", "LENIS", "TAILWIND"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-gray-700 hover:text-purple-500 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            <FooterColumn
              title="NAVIGATION"
              links={[
                { name: "HOME", href: "#" },
                { name: "ABOUT", href: "#about" },
                { name: "PROJECTS", href: "#projects" },
              ]}
            />

            <div className="hidden md:block">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-white mb-8 uppercase">
                LOCAL TIME
              </h4>
              <div className="space-y-2">
                <p className="text-2xl font-black text-white tracking-tighter">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">
                  JAMALPUR, BD (GMT+6)
                </p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black tracking-[0.3em] text-white mb-8 uppercase">
                STATUS
              </h4>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="text-xs font-bold text-white tracking-widest">
                  AVAILABLE FOR PROJECTS
                </span>
              </div>
              <Magnetic>
                <a
                  href="#contact"
                  className="text-[10px] font-black text-purple-500 hover:text-white transition-colors tracking-widest"
                >
                  LET'S WORK TOGETHER →
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] font-bold text-gray-700 tracking-widest order-2 md:order-1">
            © 2024 <span className="text-gray-500">HRIDOY AK</span> — ALL RIGHTS
            RESERVED.
          </p>

          <p className="text-[10px] font-bold text-gray-700 tracking-widest order-3">
            BUILT WITH <span className="text-purple-500">PRECISION</span> &{" "}
            <span className="text-blue-500">PASSION</span>
          </p>
          {/* Social Icons at the very end */}
          <div className="flex gap-4 order-1 md:order-2">
            {socialLinks.map((social) => (
              <Magnetic key={social.name}>
                <a
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-500 hover:text-purple-500 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-500 group"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {social.icon}
                  </div>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-purple-600/5 blur-[100px] pointer-events-none" />
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-[10px] font-black tracking-[0.3em] text-white mb-8 uppercase">
      {title}
    </h4>
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <Magnetic key={link.name}>
          <a
            href={link.href}
            className="text-xs font-bold text-gray-500 hover:text-purple-500 transition-colors tracking-widest"
          >
            {link.name}
          </a>
        </Magnetic>
      ))}
    </div>
  </div>
);

export default Footer;
