"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const Projects = () => {
  const projects = [
    {
      title: "SKILLSPHERE LEARNING",
      category: "ED-TECH PLATFORM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMWi1RBSB8c-T5hO9kd9ExQGA82gZFJZepRoZ5097eAquNe1chiXoS2y3SP2MI09Hcm3-GzJxZF0UKShfr749SdCkjQ0vUBjYSRgQKwgZPPlDPxx3FEDozQak19-CHD1Rv-pTU7WclvW2ChTuY1HKa13ebRQx72AYEyI1g4VG2pKtjRyiwxNzZlFgzLV9bElYrpEjvSo_6hTZzjox45jspfVJKaxn2tBt5RSgeDhiJT6UBi9XaB8F8wFp_OSih2_P7yIJ1YhfYPhze",
      link: "#",
      tags: ["Next.js", "MongoDB", "Framer Motion"]
    },
    {
      title: "APPS HUB ECOSYSTEM",
      category: "PRODUCTIVITY SUITE",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApEoBTp_ZUV2xd8j-_ju7fN9bq1lA_e1bUYsGFyUmPuqO2_Z97pz-4vxM6QLFZrfYGx4sLnKCgVsaYejGCbFTk_GiIRJsaXF_9VNx9jbgGRIao53cFqV0fMcqgk3u1Em6ZDOqPLiU2CGTj9KFkxsEIcgSKU4wws1Ybrldtc2juN_GI9IbTZVKOH_pWlFLN4xRNGxwH9Sa6hV4DKPq3Kby29NzxhEgeSLQU62itg9TgANjEKtETscX6q7NbPzMYqaqOe8GM_PFY8JJ_",
      link: "#",
      tags: ["React", "Tailwind", "GSAP"]
    },
    {
      title: "KEENKEEPER SOCIAL",
      category: "COMMUNITY PLATFORM",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARSLVN7rupwr6yRGlVlMeswQrO_W8kf01Wqvc_dywxK2LKJbzKPRCBNWLVvw4Wv31vI8qoDx0FdkPM54Ou_bwKHi-g7wsnwniYSLbu6hh4Gd2QgNVyDTBLB77RuQZjnornazzsIudWXHwgK2rG0mcz2ok4Cz5SAY-hMwMcMgUh6aHBHiHrlDp81dKypUNrTO2iGEt52m3xIhr7SQ1RSfxIQbb_UgibJ1wY5ckkv7JkjiJJiidU0qdy1FFNXrvhoHkks295s5A5IJ5u",
      link: "#",
      tags: ["Redux", "Express", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-purple-500 font-mono tracking-[0.4em] uppercase text-xs mb-6">SELECTED WORKS</p>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              AWWWARDS <br />
              <span className="text-gradient">WORTHY.</span>
            </h2>
          </div>
          <Magnetic>
            <button className="flex items-center gap-3 px-8 py-4 border border-white/10 glass-morphism text-[10px] font-bold tracking-widest text-white hover:bg-white hover:text-black transition-all rounded-full mb-4 group shadow-xl">
              <Layers size={14} className="group-hover:rotate-12 transition-transform" />
              VIEW ALL PROJECTS ↗
            </button>
          </Magnetic>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const container = useRef(null);
  
  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-8 border border-white/5 glass-morphism p-2">
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
          />
          
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
            <Magnetic>
              <button className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                <ExternalLink className="w-6 h-6" />
              </button>
            </Magnetic>
            <Magnetic>
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </button>
            </Magnetic>
          </div>
        </div>
        
        {/* Project Info Overlay (Mobile Only or subtle) */}
        <div className="absolute top-8 left-8">
          <div className="glass-morphism px-4 py-2 rounded-full border-white/10">
            <span className="text-[8px] font-black tracking-widest text-white">{project.category}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-2">
        <div className="flex flex-wrap gap-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[9px] font-bold text-purple-500 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        
        <div className="w-full h-[1px] bg-white/5 mt-4 group-hover:bg-purple-500/50 transition-all duration-700" />
      </div>
    </motion.div>
  );
};

export default Projects;
