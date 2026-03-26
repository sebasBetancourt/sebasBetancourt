"use client";

import React from "react";
import { AboutHero } from "./AboutHero";
import { AboutPhotos } from "./AboutPhotos";

export function AboutSection() {
  return (
    <div className="relative bg-[#0a0a0a] border border-white/[0.07] min-h-screen py-32 px-19 md:px-29 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        {/* Left side: Text content */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <AboutHero />
        </div>

        {/* Right side: 3D Multi-photo stack */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <AboutPhotos />
        </div>
      </div>
    </div>
  );
}
