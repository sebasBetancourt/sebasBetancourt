"use client";

import React from "react";
import { Experience, DescriptionItem } from "./data";
import { FaChurch, FaMapMarkerAlt, FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

/* ─── Company Icons ─── */
function WaiwaIcon() {
  return (
    <div className="w-18 h-15 rounded-sm bg-black border border-white/10 flex items-center justify-center text-white font-bold text-sm tracking-wide">
      <img src="/img/experience/Waiwa Host_Logo (1).png" alt="Waiwa Host" />
    </div>
  );
}

function IasdIcon() {
  return (
    <div className="w-23 h-15 rounded-full bg-white">
      <img className="w-full h-full object-cover" src="/img/experience/logo-remove.png" alt="IASD" />
    </div>
  );
}

/* ─── Highlighted Text Renderer ─── */
function HighlightedText({ text, highlights }: { text: string; highlights?: { word: string; color: string }[] }) {
  if (!highlights || highlights.length === 0) return <>{text}</>;

  let result: (string | React.ReactElement)[] = [text];

  highlights.forEach(({ word, color }, hIdx) => {
    const newResult: (string | React.ReactElement)[] = [];
    result.forEach((segment, sIdx) => {
      if (typeof segment !== "string") {
        newResult.push(segment);
        return;
      }
      const parts = segment.split(new RegExp(`(${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"));
      parts.forEach((part, pIdx) => {
        if (part.toLowerCase() === word.toLowerCase()) {
          newResult.push(
            <span key={`${hIdx}-${sIdx}-${pIdx}`} style={{ color, textDecoration: "underline", textDecorationColor: `${color}40`, textUnderlineOffset: "3px" }} className="font-medium">
              {part}
            </span>
          );
        } else {
          newResult.push(part);
        }
      });
    });
    result = newResult;
  });

  return <>{result}</>;
}

/* ─── Description Block ─── */
function DescriptionBlock({ item }: { item: DescriptionItem }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="mt-2 w-1 h-1 rounded-full bg-neutral-600 shrink-0" />
      <p className="text-neutral-400 text-[12px] md:text-[13px] leading-relaxed">
        <span className="text-white/90 font-semibold">
          {item.label}:
        </span>{" "}
        <HighlightedText text={item.text} highlights={item.highlights} />
      </p>
    </li>
  );
}

/* ─── Experience Card (Grid Row) ─── */
export function ExperienceCard({ experience }: { experience: Experience }) {
  const Icon = experience.icon === "iasd" ? IasdIcon : WaiwaIcon;

  return (
    <div className="experience-card grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0 w-full border-y border-white/[0.06]">

      {/* ── Left Column: Company Info ── */}
      <div className="p-6 md:p-8 flex flex-col gap-3">
        <p className="text-neutral-600 text-[10px] font-mono tracking-widest uppercase">{experience.period}</p>

        <div className="flex items-center gap-3 mt-1">
          <Icon />
          <h3 className="text-white text-base font-semibold tracking-tight">{experience.company}</h3>
        </div>

        <div className="flex flex-col gap-1.5 mt-1">
          <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
            <FaMapMarkerAlt className="w-2.5 h-2.5 shrink-0" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
            <FaBriefcase className="w-2.5 h-2.5 shrink-0" />
            <span>{experience.type}</span>
          </div>
          {experience.links && experience.links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400/70 hover:text-blue-400 text-[11px] mt-1 transition-colors">
              <FaExternalLinkAlt className="w-2.5 h-2.5 shrink-0" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Right Column: Content ── */}
      <div className="p-6 md:p-8">
        {/* Role Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 tracking-tight font-instrument" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", lineHeight: 1.2 }}>
          {experience.role}
        </h3>

        {/* Descriptions */}
        <ul className="space-y-4 mb-8">
          {experience.descriptions.map((desc, idx) => (
            <DescriptionBlock key={idx} item={desc} />
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {experience.techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 px-2.5 py-0 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] md:text-[11px] text-white/70 font-mono tracking-wide uppercase"
            >
              {tech.icon && (
                <span className="w-3 h-3 flex items-center justify-center" style={{ color: tech.color || "white" }}>
                  <tech.icon />
                </span>
              )}
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
