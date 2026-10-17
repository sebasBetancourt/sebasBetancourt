"use client";

import { useEffect, useState, useRef } from "react";
import { ProjectVisual, ProjectText } from "./ProjectCard";
import { PROJECTS_DATA } from "./data";
import { useLang } from "@/i18n/LanguageProvider";

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, t } = useLang();
  const projects = PROJECTS_DATA[lang];

  // El texto activo es el del proyecto cuya tarjeta está más cerca del centro de la pantalla,
  // así siempre coincide con la tarjeta que se está viendo (también entre tarjetas)
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const center = window.innerHeight / 2;
      let closest = 0;
      let closestDistance = Infinity;
      document.querySelectorAll(".project-visual-card").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = Number(el.getAttribute("data-index"));
        }
      });
      setActiveIndex(closest);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative w-full bg-[#0a0a0a] border border-white/10">
      <section className="pt-24 md:pt-32 pb-1 px-6 md:px-12 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center space-y-3 text-center">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase">
            {t.projects.label}
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-lg font-semibold tracking-tight">
            <span className="text-white font-instrument">{t.projects.title[0]}</span>
            <span className="text-[#FF2D8D] italic font-instrument">{t.projects.title[1]}</span>
          </h2>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-32 mt-12 flex flex-col lg:flex-row relative items-start gap-12 lg:gap-0">
        
        {/* Left Side: Scrolling Visuals */}
        <div className="w-full lg:w-[45%] flex flex-col gap-20 lg:gap-[40vh] lg:pt-[15vh] lg:pb-[40vh]">
          {projects.map((project, index) => (
            <ProjectVisual key={`visual-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* Right Side: Sticky Text Container */}
        <div className="hidden lg:flex w-full lg:w-[55%] lg:sticky lg:top-0 lg:h-screen items-center justify-center relative">
          {projects.map((project, index) => (
            <ProjectText key={`text-${index}`} project={project} isActive={activeIndex === index} />
          ))}
        </div>

      </div>
    </div>
  );
}
