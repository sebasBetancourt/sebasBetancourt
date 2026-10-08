"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/LanguageProvider";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiGo, 
  SiPostgresql,
  SiVite
} from "react-icons/si";

export function AboutBentoGrid() {
  const { t } = useLang();
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-x border-white/[0.07] w-[94.2%]">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase mb-4">
          {t.about.siteLabel}
        </span>
        <h2 className="font-instrument leading-[1.1]" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
          <span className="text-white block">{t.about.siteTitle[0]}</span>
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #FF2D8D, #a855f7, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.about.siteTitle[1]}
          </span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min max-w-6xl mx-auto w-full px-4">
        
        {/* 1. Educación (Rebranded from Guestbook) */}
        <BentoCard className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center p-8 bg-[#0d0d0d] relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-soft-light" />
          
          <div className="relative w-full h-32 flex items-center justify-center">
             <motion.div 
               whileHover={{ y: -10, rotate: -5 }}
               className="w-24 h-32 rounded-xl absolute -left-4 rotate-[-15deg] backdrop-blur-sm flex items-center justify-center"
             >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr40Jfr1CGCMwVStUpBNV5q3V8_4QxmY8nuQ&s" className="w-full h-full object-cover rounded-xl" alt="" />
             </motion.div>
             <motion.div 
               whileHover={{ y: -10, rotate: 5 }}
               className="w-24 h-32 rounded-xl absolute -right-4 rotate-[15deg] backdrop-blur-sm flex items-center justify-center"
             >
                <img src="https://virtual.fundetec.edu.co/wp-content/uploads/2024/09/las-mejores-carreras-tecnicas-en-el-sena.png" className="w-full h-full object-cover rounded-xl" alt="" />
             </motion.div>
             <motion.div 
               whileHover={{ y: -10, rotate: 5 }}
               className="w-24 h-32 rounded-xl absolute right-25 backdrop-blur-sm flex items-center justify-center"
             >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_VpYHCi-3ngO5H9fG9x03gg5xiDAG2YsOg&s" className="w-full h-full object-cover rounded-xl" alt="" />
             </motion.div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">{t.about.educationLabel}</p>
            <h3 className="text-white text-sm font-medium">{t.about.education}</h3>
          </div>
        </BentoCard>

        {/* 3. Herramientas (Uses) */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-[#0d0d0d] p-8 flex flex-col justify-between group">
           <div className="grid grid-cols-3 gap-3">
             {[SiNextdotjs, SiTailwindcss, SiTypescript, SiGo, SiPostgresql, SiVite].map((Icon, i) => (
               <div key={i} className="aspect-square bg-white/[0.03] border border-white/[0.05] rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/[0.07] transition-all">
                 <Icon size={24} />
               </div>
             ))}
           </div>
           
           <div className="mt-8">
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">{t.about.toolsLabel}</p>
            <h3 className="text-white text-sm font-medium">{t.about.toolsTitle}</h3>
          </div>
        </BentoCard>

        {/* 4. Colaboración (Collaboration) */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-[#0d0d0d] p-8 flex flex-col items-center justify-center relative overflow-hidden group">
          {/* Circle Visuals */}
          <div className="absolute inset-x-0 top-0 bottom-12 flex items-center justify-center pointer-events-none overflow-hidden opacity-10">
            <div className="flex -space-x-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-48 h-48 rounded-full border border-white" />
              ))}
            </div>
          </div>
          
          {/* Central Profile & Fanning Avatars */}
          <div className="relative mb-6 flex items-center justify-center w-full h-24">
            <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition-all duration-500" />
            
            <div className="relative flex items-center justify-center">
               {/* Sebastian Profile (Always visible) */}
               <motion.img 
                 src="/img/about/1.jfif" 
                 className="w-20 h-20 rounded-full border-2 border-white/20 object-cover relative z-20 shadow-2xl transition-all duration-500 group-hover:border-blue-500/50 group-hover:scale-110" 
                 alt="Sebastian"
               />


            </div>
          </div>

          <div className="text-center">
            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">{t.about.collabLabel}</p>
            <h3 className="text-white text-sm font-medium">{t.about.collabTitle}</h3>
          </div>
        </BentoCard>

      </div>
    </section>
  );
}

function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        "rounded-3xl border border-white/10 transition-colors hover:border-white/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
