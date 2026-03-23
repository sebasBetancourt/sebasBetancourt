"use client";

import React, { useRef, useState } from "react";
import { Project } from "./data";

export function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Star4Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.6 7.6 2.4-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
    </svg>
  );
}

export function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    </svg>
  );
}

export function ProjectVisual({ project, index }: { project: Project; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Target for IntersectionObserver */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-index={index}
        className="project-visual-card group relative w-full aspect-square lg:aspect-auto lg:h-[370px] p-3 md:p-2 bg-neutral-900 border border-white/10 rounded-[2.5rem] shadow-xl transition-transform duration-500 hover:scale-[1.03] cursor-none overflow-hidden"
      >
        {/* Custom Cursor */}
        <div 
          className={`pointer-events-none absolute z-50 flex items-center justify-center w-28 h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-opacity duration-300 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <EyeIcon className="w-7 h-7" />
          <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full" style={{ overflow: 'visible' }}>
              <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
              <text className="text-[10px] uppercase font-bold tracking-[0.2em]" fill="currentColor">
                <textPath href="#circlePath" startOffset="0%">
                  VER  DETALLES • VER  DETALLES • 
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className={`relative w-full h-full rounded-[2rem] overflow-hidden pt-6 px-6 pb-0 md:pt-8 md:px-8 md:pb-0 flex flex-col shadow-inner ${project.visual.bgColor}`}>
          
          {/* Header Text */}
          <div className="flex justify-between items-start gap-4 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
            <p className="text-white md:text-[20px] font-medium leading-snug max-w-[85%]">
              {project.visual.title}
            </p>
            <ArrowRightIcon className="text-white/70 w-5 h-5 shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-rotate-45" />
          </div>
          
          {/* Mockup visual image container (3D Flip Effect applied here) */}
          <div className="relative w-full mt-0 h-[85%] [perspective:1200px] rounded-t-2xl transition-transform duration-[800ms] translate-y-8 group-hover:translate-y-2 z-20">
            <div 
              className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                project.visual.imageHover ? "group-hover:[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Image */}
              <img 
                src={project.visual.image}
                alt={`Mockup de ${project.title}`}
                className="absolute inset-0 w-full h-full rounded-t-xl object-contain object-bottom [backface-visibility:hidden]"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/800x600/1a1a1a/FFFFFF?text=${project.title}`;
                }}
              />

              {/* Hover Image (Back Side) */}
              {project.visual.imageHover && (
                <img 
                  src={project.visual.imageHover}
                  alt={`Mockup Hover de ${project.title}`}
                  className="absolute inset-0 w-full h-[110%] object-contain object-bottom rounded-t-xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/800x600/1a1a1a/FFFFFF?text=${project.title}-Hover`;
                  }}
                />
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Render text directly below on Mobile (hidden on Desktop) */}
      <div className="lg:hidden">
        <ProjectTextInner project={project} />
      </div>
    </div>
  );
}

export function ProjectText({ project, isActive }: { project: Project; isActive: boolean }) {
  return (
    <div 
      className={`absolute inset-0 flex flex-col justify-center px-4 lg:pl-16 lg:pr-8 transition-opacity duration-500 ease-in-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
      }`}
    >
       <ProjectTextInner project={project} />
    </div>
  );
}

function ProjectTextInner({ project }: { project: Project }) {
  return (
    <div className="flex flex-col font-sans">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-6 bg-blue-500"></div>
          <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-neutral-400 text-sm md:text-base mb-8 leading-relaxed font-light">
          {project.description}
        </p>

        <ul className="space-y-4 mb-8">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex gap-3 items-start text-sm md:text-[15px] text-neutral-300">
              <Star4Icon className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] md:text-xs text-white/80 font-medium tracking-wide shadow-sm"
            >
              {tech.icon ? (
                <span className="w-3.5 h-3.5 flex items-center justify-center" style={{ color: tech.color || "white" }}>
                  <tech.icon />
                </span>
              ) : (
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
              )}
              {tech.name}
            </div>
          ))}
        </div>

        {/* Links */}
        {project.links && (
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/5">
            {project.links.repo && (
              <a href={project.links.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                <GithubIcon className="w-4 h-4" />
                <span>Repositorio</span>
              </a>
            )}
            {project.links.backend && (
              <a href={project.links.backend} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                <GithubIcon className="w-4 h-4" />
                <span>Backend</span>
              </a>
            )}
            {project.links.frontend && (
              <a href={project.links.frontend} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                <GithubIcon className="w-4 h-4" />
                <span>Frontend</span>
              </a>
            )}
          </div>
        )}
    </div>
  );
}
