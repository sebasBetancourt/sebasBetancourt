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
import { usePathname } from "next/navigation";
import { ContactDialog } from "./contact-dialog";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current < 50) return setVisible(true);
    setVisible(current < previous);
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "fixed top-8 inset-x-0 mx-auto z-[5000] flex max-w-fit items-center p-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
            className
          )}
        >
          {navItems.map((item, idx) => {
            const isActive = pathname === item.link;
            const isLast = idx === navItems.length - 1;

            if (isLast) {
              return (
                <button
                  key={idx}
                  onClick={() => setIsContactOpen(true)}
                  className={cn(
                    "relative ml-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                    "bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 hover:border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  )}
                >
                  {item.name}
                </button>
              );
            }

            return (
              <Link
                key={idx}
                href={item.link}
                className={cn(
                  "relative px-5 py-2 rounded-full text-sm transition-all duration-300 group",
                  isActive ? "text-white" : "text-neutral-400 hover:text-white"
                )}
              >
                {/* Active / Hover Background */}
                {isActive && (
                  <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/[0.05] rounded-full border border-white/[0.05] transition-opacity duration-300" />
                )}

                {/* Active Indicator Bar (Top) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                  />
                )}

                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <ContactDialog 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};
