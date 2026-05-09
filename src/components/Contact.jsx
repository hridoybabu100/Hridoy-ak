"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Instagram, Github, Linkedin } from "lucide-react";
import confetti from "canvas-confetti";
import Magnetic from "./ui/Magnetic";

const Contact = () => {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success

  const socialLinks = [
    { name: "FB", icon: <Facebook size={18} />, href: "https://www.facebook.com/share/14dQEawQknc/" },
    { name: "IG", icon: <Instagram size={18} />, href: "https://www.instagram.com/hridoyakanda003" },
    { name: "GH", icon: <Github size={18} />, href: "https://github.com/hridoybabu100" },
    { name: "LI", icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/hridoybabu/" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#3b82f6", "#ffffff"]
      });
      
      setTimeout(() => setFormState("idle"), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="blob w-[600px] h-[600px] bg-purple-900/10 bottom-[-20%] left-[-10%]" />
      <div className="absolute inset-0 animated-grid opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <p className="text-purple-500 font-mono tracking-[0.4em] uppercase text-xs mb-6">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">LET'S BUILD <br /> <span className="text-gradient">THE FUTURE.</span></h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-morphism p-12 rounded-[2.5rem] border-white/5 space-y-12">
              <ContactInfo icon={<Mail className="text-purple-500" />} label="EMAIL" value="hridoyakanda100@gmail.com" />
              <ContactInfo icon={<Phone className="text-purple-500" />} label="PHONE" value="+880 1XXX XXXXXX" />
              <ContactInfo icon={<MapPin className="text-purple-500" />} label="LOCATION" value="Jamalpur, Bangladesh" />
            </div>

            <div className="glass-morphism p-10 rounded-[2rem] border-white/5">
              <p className="text-[10px] font-black tracking-widest text-gray-500 mb-8 uppercase">SOCIAL ECOSYSTEM</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Magnetic key={social.name}>
                    <a 
                      href={social.href}
                      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500/50 transition-all duration-500 group"
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            <div className="bg-purple-600/10 border border-purple-500/20 p-8 rounded-2xl flex items-center gap-6">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-[0_0_15px_#a855f7]" />
              <div>
                <p className="text-xs font-black text-white tracking-widest">AVAILABLE FOR WORK</p>
                <p className="text-[9px] font-bold text-purple-400 tracking-widest uppercase opacity-70">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-morphism p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="py-20 flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">MESSAGE SENT!</h3>
                    <p className="text-gray-400 font-medium">I'll get back to you as soon as possible. <br /> Let's create something legendary.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <InputField label="YOUR NAME" placeholder="Hridoy Akanda" />
                      <InputField label="YOUR EMAIL" placeholder="hridoyak@example.com" type="email" />
                    </div>
                    <InputField label="SUBJECT" placeholder="Project Inquiry" />
                    <div className="space-y-4">
                      <label className="text-[10px] font-black tracking-widest text-gray-500">YOUR MESSAGE</label>
                      <textarea 
                        rows={6}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all text-white placeholder:text-gray-700 font-medium"
                        placeholder="Tell me about your vision..."
                      />
                    </div>
                    
                    <Magnetic>
                      <button 
                        disabled={formState === "submitting"}
                        className="w-full bg-white text-black py-6 rounded-2xl font-black text-xs tracking-[0.2em] hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
                      >
                        {formState === "submitting" ? (
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>SEND MESSAGE <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                        )}
                      </button>
                    </Magnetic>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-start gap-8 group">
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-purple-600/20 group-hover:border-purple-500/50 transition-all duration-500">
      {icon}
    </div>
    <div>
      <p className="text-[9px] font-black tracking-[0.3em] text-gray-500 mb-2">{label}</p>
      <p className="text-xl font-black text-white group-hover:text-purple-400 transition-colors tracking-tighter">{value}</p>
    </div>
  </div>
);

const InputField = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-4">
    <label className="text-[10px] font-black tracking-widest text-gray-500">{label}</label>
    <input 
      type={type}
      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all text-white placeholder:text-gray-700 font-medium"
      placeholder={placeholder}
    />
  </div>
);

export default Contact;
