"use client";

import React from "react";
import { ABOUT_DATA } from "./data";

export function AboutHero() {
  return (
    <div className="flex flex-col gap-8 max-w-xl">
      {/* Subtitle */}
      <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-neutral-500 uppercase">
        {ABOUT_DATA.subtitle}
      </span>

      {/* Main Title */}
      <h1 className="font-instrument leading-[1.1]" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
        <span className="text-white block">{ABOUT_DATA.title.prefix}</span>
        <span
          className="italic"
          style={{
            background: "linear-gradient(135deg, #FF2D8D, #a855f7, #3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {ABOUT_DATA.title.highlight}
        </span>
      </h1>

      {/* Paragraphs */}
      <div className="flex flex-col gap-6">
        {ABOUT_DATA.paragraphs.map((text, idx) => (
          <p key={idx} className="text-neutral-400 text-sm md:text-base leading-relaxed text-balance">
            {text}
          </p>
        ))}
      </div>

      {/* Socials */}
      <div className="flex items-center gap-6 mt-4">
        {ABOUT_DATA.socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300"
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
