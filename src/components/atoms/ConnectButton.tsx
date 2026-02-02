"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export function ConnectButton({
  className,
}: {
  className?: string;
}) {
  return (
    <motion.button
  initial="rest"
  whileHover="hover"
  animate="rest"
  className=" flex
    relative group overflow-hidden
    rounded-full border border-neutral-300 dark:border-neutral-700
    px-8 py-3 gap-3 items-center
    text-black dark:text-white
    transition-colors duration-300
  "
>

      {/* fondo animado */}
      <motion.span
          variants={{
            rest: {
              scale: 0,
              opacity: 0,
            },
            hover: {
              scale: 1,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="
            absolute inset-0 rounded-full
            bg-black dark:bg-white text-white dark:text-black
          "
        />


      {/* brillo */}
      <motion.span
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 0.7 },
          }}
          transition={{ duration: 0.4 }}
          className="
            absolute inset-0 rounded-full blur-xl
            bg-black dark:bg-white text-white dark:text-black
          "
        />


      {/* contenido */}
      <Link href={"/contact"} className="relative z-10 font-medium
      text-black dark:text-white
      group-hover:text-white
      dark:group-hover:text-black
      transition-colors duration-300">
        Contactame
      </Link>

      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: 4 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full
          bg-neutral-900 text-white dark:bg-white dark:text-black"
      >
        <ArrowRight size={16} />
      </motion.span>
    </motion.button>
  );
}
