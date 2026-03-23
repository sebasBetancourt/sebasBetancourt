"use client";

import { useEffect, useState, useRef } from "react";
import { ProjectVisual, ProjectText } from "./ProjectCard";
import { PROJECTS_DATA } from "./data";

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" } 
    );

    const elements = document.querySelectorAll(".project-visual-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-[#0a0a0a]">
      <section className="pt-32 pb-1 px-6 md:px-12 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center space-y-3 text-center">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase">
            Proyectos
          </span>
          <h2 className="text-9xl lg:text-lg font-semibold tracking-tight">
            <span className="text-white font-instrument">Proyectos </span>
            <span className="text-[#FF2D8D] italic font-instrument">destacados </span>
          </h2>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-32 mt-12 flex flex-col lg:flex-row relative items-start gap-12 lg:gap-0">
        
        {/* Left Side: Scrolling Visuals */}
        <div className="w-full lg:w-[45%] flex flex-col gap-20 lg:gap-[40vh] lg:py-[15vh]">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectVisual key={`visual-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* Right Side: Sticky Text Container */}
        <div className="hidden lg:flex w-full lg:w-[55%] lg:sticky lg:top-0 lg:h-screen items-center justify-center relative">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectText key={`text-${index}`} project={project} isActive={activeIndex === index} />
          ))}
        </div>

      </div>
    </div>
  );
}
