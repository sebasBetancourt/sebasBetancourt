"use client";

import { useEffect, useRef, useState } from "react";
import { ExperienceCard } from "./ExperienceCard";
import { GithubContributions } from "./GithubContributions";
import { EXPERIENCE_DATA } from "./data";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function ExperienceSection() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsContainerRef.current) return;
      const rect = cardsContainerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // 0% when container top reaches viewport bottom, 100% when container bottom reaches viewport top
      const progress = Math.max(-5, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-[93%] bg-[#0a0a0a] border-t border-x border-white/[0.07] ">
      {/* ── Header ── */}
      <section className="pt-32 pb-8 px-6 md:px-12 w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-1.5 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>

        <div className="flex flex-col items-center space-y-1 text-center">
          <h2 className="font-instrument" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.1 }}>
            <span className="text-white">Experiencias</span>
            <br />
            <span className="text-white">que dan </span>
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #FF2D8D, #a855f7, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              vida a las ideas
            </span>
          </h2>
        </div>
      </section>

      {/* ── Cards with Centered Timeline ── */}
      <div className="w-full pb-16 mt-8">
        <div ref={cardsContainerRef} className="relative">

          {/* ── Timeline Bar (runs through the center divider between left/right columns) ── */}
          <div className="hidden md:block absolute left-[240px] top-0 bottom-0 z-10" style={{ width: "4px" }}>
            {/* Track */}
            <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
            {/* Progress fill */}
            <div
              className="absolute top-0 left-0 w-full rounded-full"
              style={{
                height: `${scrollProgress * 100}%`,
                background: "linear-gradient(180deg, #3b82f6, #a855f7, #FF2D8D)",
                transition: "height 150ms ease-out",
              }}
            />
            {/* Glowing dot */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: `calc(${scrollProgress * 100}% - 16px)`,
                opacity: scrollProgress > 0.02 ? 1 : 0,
                transition: "top 150ms ease-out, opacity 300ms",
              }}
            >
              <div className="rounded-full p-[2px]" style={{ background: "linear-gradient(180deg, #3b82f6, #a855f7, #FF2D8D)", boxShadow: "0 0 14px rgba(168, 85, 247, 0.7), 0 0 28px rgba(255, 45, 141, 0.35)" }}>
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/img/icon.png" />
                  <AvatarFallback>SB</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* ── Unified Card Container ── */}
          <div className="bg-neutral-950  overflow-hidden">
            {EXPERIENCE_DATA.map((experience, index) => (
              <div key={index}>
                {/* Divider between cards */}
                {index > 0 && (
                  <div className="]" />
                )}
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GitHub Contributions ── */}
      <GithubContributions />
    </div>
  );
}
