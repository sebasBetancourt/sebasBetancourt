"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";


export default function SkillsSection(icons: any) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const centerIndex = (icons.length - 1) / 2;

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6"
    >
      {/* Title */}
      <motion.div
        style={{
          opacity,
          y: useTransform(scrollYProgress, [0, 1], [40, 0]),
        }}
        className="mb-16 text-center"
      >
        <p className="text-xs tracking-widest text-neutral-400">MY SKILLS</p>
        <h2 className="text-4xl md:text-5xl font-serif text-white">
          The Secret{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            Sauce
          </span>
        </h2>
      </motion.div>

      {/* Icons */}
      <motion.div
        style={{ opacity, scale }}
        className="flex w-full max-w-5xl flex-wrap items-center justify-center gap-6"
      >
        {icons.map((Icon, i) => {
          const distanceFromCenter = i - centerIndex;

          const x = useTransform(
            scrollYProgress,
            [0, 1],
            [distanceFromCenter * 120, 0]
          );

          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [Math.abs(distanceFromCenter) * 40, 0]
          );

          const rotate = useTransform(
            scrollYProgress,
            [0, 1],
            [distanceFromCenter * 12, 0]
          );

          return (
            <motion.div
              key={i}
              style={{ x, y, rotate }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl
                         bg-neutral-900 shadow-lg"
            >
              <Icon className="h-8 w-8 text-white/90" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
