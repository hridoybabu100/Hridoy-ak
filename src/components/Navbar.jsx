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
        className={`
    fixed
    top-0
    left-0
    w-full
    z-50
    transition-all
    duration-500
    px-3 sm:px-4 md:px-6
    ${isScrolled ? "py-3 md:py-4" : "py-4 md:py-6 lg:py-8"}
  `}
      >
        <nav
          className={`
      container
      mx-auto
      flex
      items-center
      justify-between
      px-4 sm:px-6 md:px-8
      py-3 md:py-4
      rounded-2xl md:rounded-3xl
      transition-all
      duration-500
      ${
        isScrolled
          ? "glass-morphism border border-white/5 backdrop-blur-2xl"
          : "bg-transparent"
      }
    `}
        >
          {/* LOGO */}
          <Magnetic>
            <a
              href="#"
              className="
          text-lg sm:text-xl md:text-2xl
          font-black
          tracking-tighter
          text-white
          whitespace-nowrap
        "
            >
              HRIDOY
              <span className="text-purple-500"> AK</span>
            </a>
          </Magnetic>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  className="
              text-[9px]
              xl:text-[10px]
              font-bold
              tracking-[0.2em]
              text-gray-400
              hover:text-white
              transition-colors
              relative
              group
              uppercase
            "
                >
                  {link.name}

                  <span
                    className="
                absolute
                -bottom-1
                left-0
                w-0
                h-[1px]
                bg-purple-500
                transition-all
                duration-300
                group-hover:w-full
              "
                  />
                </a>
              </Magnetic>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* HIRE BUTTON */}
            <Magnetic>
              <button
                className="
            hidden
            md:flex
            items-center
            gap-2
            px-4 lg:px-6
            py-2.5
            bg-purple-600/10
            border border-purple-500/50
            text-[9px] lg:text-[10px]
            font-bold
            tracking-[0.15em]
            text-white
            hover:bg-purple-600
            transition-all
            rounded-xl
            neon-glow-purple
            group
            uppercase
          "
              >
                <UserPlus
                  size={14}
                  className="
              group-hover:scale-110
              transition-transform
            "
                />
                HIRE ME
              </button>
            </Magnetic>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
          lg:hidden
          flex
          items-center
          justify-center
          w-10 h-10
          rounded-xl
          border border-white/10
          glass-morphism
          text-white
          hover:border-purple-500/40
          transition-all
        "
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
          lg:hidden
          mt-3
          glass-morphism
          border border-white/5
          rounded-3xl
          p-6
          mx-1
          backdrop-blur-2xl
        "
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                text-sm
                font-bold
                tracking-[0.15em]
                text-gray-300
                hover:text-purple-400
                transition-colors
                uppercase
              "
                  >
                    {link.name}
                  </a>
                ))}

                {/* Mobile Hire Button */}
                <button
                  className="
              mt-4
              flex
              items-center
              justify-center
              gap-3
              w-full
              py-4
              rounded-2xl
              bg-purple-600
              text-white
              text-xs
              font-bold
              tracking-[0.2em]
              hover:bg-purple-700
              transition-all
            "
                >
                  <UserPlus size={16} />
                  HIRE ME
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="
        fixed
        inset-0
        z-40
        bg-black/95
        backdrop-blur-2xl
        flex
        flex-col
        items-center
        justify-center
        px-4 sm:px-6
        overflow-hidden
      "
          >
            {/* Animated Grid */}
            <div className="absolute inset-0 animated-grid opacity-10 pointer-events-none" />

            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />

            <div className="absolute bottom-[-20%] right-[-20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="
          absolute
          top-5 right-5
          sm:top-6 sm:right-6
          w-12 h-12
          rounded-2xl
          border border-white/10
          glass-morphism
          flex items-center justify-center
          text-white
          hover:border-purple-500/40
          transition-all
        "
            >
              <X size={22} />
            </button>

            {/* Nav Links */}
            <div
              className="
          relative z-10
          flex
          flex-col
          items-center
          justify-center
          gap-5 sm:gap-6 md:gap-8
          w-full
        "
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.1 * i + 0.2,
                    duration: 0.5,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
              group
              relative
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              text-white
              hover:text-purple-500
              transition-all
              duration-300
              tracking-tighter
              uppercase
            "
                >
                  {link.name}

                  {/* Hover Line */}
                  <span
                    className="
                absolute
                left-0
                -bottom-2
                w-0
                h-[2px]
                bg-purple-500
                transition-all
                duration-500
                group-hover:w-full
              "
                  />
                </motion.a>
              ))}
            </div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.8 }}
              className="
          absolute
          bottom-8
          text-center
          text-[9px]
          sm:text-[10px]
          uppercase
          tracking-[0.3em]
          text-gray-500
          font-bold
        "
            >
              Creative Developer Portfolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
