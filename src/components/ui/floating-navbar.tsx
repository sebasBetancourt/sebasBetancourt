"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/atoms/themes";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const { toggleTheme, mode } = useTheme();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current < 50) return setVisible(true);
    setVisible(current < previous);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto z-[5000] flex max-w-fit items-center space-x-4 rounded-full bg-white px-8 py-2 shadow dark:bg-black",
          className
        )}
      >
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="text-sm text-neutral-600 dark:text-neutral-300"
          >
            {item.name}
          </Link>
        ))}

        {/* 👇 BOTÓN THEME */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 rounded-full border px-3 py-2"
        >
          {mode === "dark" ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
