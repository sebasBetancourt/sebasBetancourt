"use client";

import React from "react";

export default function ContactCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-24 md:py-32 border-t border-white/5">
      {/* Background Glows & Noise Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-[5%] top-[10%] w-[50%] h-[70%] rounded-full bg-cyan-700/20 blur-[130px]" />
        <div className="absolute -right-[5%] top-[-10%] w-[50%] h-[60%] rounded-full bg-blue-700/15 blur-[120px]" />
        {/* Synthetic Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            backgroundSize: '150px'
          }} 
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Logo / Wings */}
        <div className="mb-10 flex items-center justify-center opacity-80 select-none">
          <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 30 C70 5, 20 15, 0 30 C20 35, 70 50, 100 30 Z" fill="url(#wingL)" className="opacity-30" />
            <path d="M100 30 C130 5, 180 15, 200 30 C180 35, 130 50, 100 30 Z" fill="url(#wingR)" className="opacity-30" />
            <path d="M100 30 C80 15, 40 20, 20 30 C40 32, 80 40, 100 30 Z" fill="url(#wingL2)" className="opacity-40" />
            <path d="M100 30 C120 15, 160 20, 180 30 C160 32, 120 40, 100 30 Z" fill="url(#wingR2)" className="opacity-40" />
            
            <circle cx="100" cy="30" r="22" fill="#0A0A0B" stroke="url(#circleGrad)" strokeWidth="1.5" />
            <circle cx="100" cy="30" r="27" fill="none" stroke="url(#circleGrad)" strokeWidth="0.5" className="opacity-30" />
            <circle cx="100" cy="30" r="32" fill="none" stroke="url(#circleGrad)" strokeWidth="0.2" className="opacity-10" />
            <text x="100" y="36" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">SB</text>
            
            <defs>
              <linearGradient id="wingL" x1="100" y1="30" x2="0" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="1"/><stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="wingR" x1="100" y1="30" x2="200" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="1"/><stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="wingL2" x1="100" y1="30" x2="20" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="1"/><stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="wingR2" x1="100" y1="30" x2="180" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="1"/><stop offset="1" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="circleGrad" x1="78" y1="8" x2="122" y2="52" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6"/><stop offset="1" stopColor="#06b6d4" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Headline */}
        <div className="relative inline-block mb-10 w-full max-w-4xl mx-auto">
          <h2 className="text-[2.5rem] leading-[1.1] md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 uppercase">
            Del concepto a la <span className="font-bold text-white drop-shadow-md">realidad</span><br className="max-md:hidden" />
            {" "}hagamos que <span className="font-bold text-white drop-shadow-md">suceda!</span>
          </h2>

          {/* Rotating Badge */}
          <div className="absolute -right-2 -bottom-20 md:-right-8 md:-bottom-10 w-28 h-28 md:w-32 md:h-32 bg-[#050505] rounded-full border border-blue-600/30 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)] z-20">
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full" style={{ overflow: 'visible' }}>
                <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[10px] font-bold tracking-[0.25em] text-white/70" fill="currentColor">
                  <textPath href="#badgePath" startOffset="0%">
                    DISPONIBLE 💼 • DISPONIBLE 💼 • 
                  </textPath>
                </text>
              </svg>
            </div>
            {/* Inner Star */}
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.6 7.6 2.4-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
            </svg>
          </div>
        </div>

        {/* Button */}
        <a 
          href="mailto:[EMAIL_ADDRESS]" 
          className="group relative flex items-center gap-4 px-6 py-2.5 mb-14 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-full transition-all duration-300"
        >
          <span className="text-white/90 font-medium text-sm md:text-base ml-2">Hablemos</span>
          <div className="flex items-center justify-center w-8 h-8 bg-[#E5E5E5] text-black rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-white">
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
          </div>
        </a>

        {/* Subtexts */}
        <h3 className="text-xl md:text-[28px] font-instrument italic text-white/90 mb-4 max-w-2xl text-center">
          Estoy disponible para puestos de tiempo completo y proyectos freelance.
        </h3>
        <p className="text-neutral-400 text-sm md:text-[15px] max-w-xl text-center leading-relaxed font-light">
          Me encanta crear aplicaciones web dinámicas y ofrecer experiencias de usuario fluidas.
        </p>
      </div>
    </section>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
