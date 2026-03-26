"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ABOUT_DATA } from "./data";

export function AboutPhotos() {
  const [activeIndex, setActiveIndex] = useState(() => {
    const yoIndex = ABOUT_DATA.photos.findIndex(p => p.caption === "Yo");
    return yoIndex !== -1 ? yoIndex : ABOUT_DATA.photos.length - 1;
  });

  return (
    <div className="relative w-[100%] aspect-square md:aspect-auto md:h-[500px] flex flex-col items-center justify-center py-10">
      <div className="relative w-[300px] h-[400px]">
        {ABOUT_DATA.photos.map((photo, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer bg-neutral-900"
            style={{ zIndex: idx === activeIndex ? 50 : idx }}
            initial={false}
            animate={{
              rotate: idx === activeIndex ? 0 : (idx - activeIndex) * 8,
              scale: idx === activeIndex ? 1 : 0.85,
              x: (idx - activeIndex) * 140, // More separation
              y: idx === activeIndex ? 0 : Math.abs(idx - activeIndex) * 15, // Slight downward curve
              opacity: idx === activeIndex ? 1 : 0.5,
            }}
            whileHover={idx === activeIndex ? { scale: 1.02 } : { opacity: 1, scale: 0.92 }}
            onClick={() => setActiveIndex(idx)}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover"
            />
            {/* Overlay for inactive photos */}
            {idx !== activeIndex && (
              <div className="absolute inset-0 bg-black/40" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Caption for active photo */}
      <AnimatePresence mode="wait">
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-8 text-neutral-400 font-instrument text-lg"
        >
          {ABOUT_DATA.photos[activeIndex].caption}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
