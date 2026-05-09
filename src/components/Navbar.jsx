"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserPlus } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 ${
          isScrolled ? "py-4" : "py-8"
        }`}
      >
        <nav
          className={`container flex items-center justify-between px-8 py-4 rounded-2xl transition-all duration-500 ${
            isScrolled ? "glass-morphism py-4" : "bg-transparent"
          }`}
        >
          <Magnetic>
            <a href="#" className="text-xl font-black tracking-tighter text-white">
              HRIDOY<span className="text-purple-500"> AK</span>
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  className="text-[10px] font-bold tracking-widest text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Magnetic>
              <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-purple-600/10 border border-purple-500/50 text-[10px] font-bold tracking-widest text-white hover:bg-purple-600 transition-all rounded-xl neon-glow-purple group">
                <UserPlus size={14} className="group-hover:scale-110 transition-transform" />
                HIRE ME
              </button>
            </Magnetic>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 text-center"
          >
            <div className="absolute inset-0 animated-grid opacity-10" />
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl md:text-6xl font-black text-white hover:text-purple-500 transition-colors tracking-tighter"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
