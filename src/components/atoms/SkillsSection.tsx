"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { IconType } from "react-icons";

interface SkillsSectionProps {
  icons: IconType[];
  text1: string;
  text2: string;
  className: string;
}

export default function SkillsSection({ icons, text1, text2, className }: SkillsSectionProps) {
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
      className="relative flex flex-col items-center justify-around gap-4 px-6 py-4"
    >
      {/* Title */}
      <motion.div
        style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [40, 0]) }}
        className="text-center mb-4"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold font-instrument text-black dark:text-white">
          {text1}{" "}
          <span className={className}>{text2}</span>
        </h2>
      </motion.div>

      {/* Icons Grid */}
      <motion.div
        style={{ opacity, scale }}
        className="grid grid-cols-6 justify-items-center gap-2"
      >
        {icons.map((Icon, i) => {
          const distanceFromCenter = i - centerIndex;

          const x = useTransform(scrollYProgress, [0, 1], [distanceFromCenter * 100, 0]);
          const y = useTransform(scrollYProgress, [0, 1], [Math.abs(distanceFromCenter) * 20, 0]);
          const rotate = useTransform(scrollYProgress, [0, 1], [distanceFromCenter * 12, 0]);

          return (
            <motion.div
              key={i}
              style={{ x, y, rotate }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-900 shadow-lg"
            >
              <Icon className="h-8 w-8 text-white/90" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
