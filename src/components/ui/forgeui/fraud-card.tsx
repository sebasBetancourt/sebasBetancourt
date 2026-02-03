"use client";

import { cn } from "@/lib/utils";
import { TbCircleDotted } from "react-icons/tb";
import { FaCheckDouble } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { motion, Variants } from "motion/react";
import { useState } from "react";

type BlockedEmail = {
  email: string;
  time: string;
};

type FraudCardProps = {
  blockedEmails: BlockedEmail[];
};

const FraudCard = ({ blockedEmails }: FraudCardProps) => {
  const [hovered, setHovered] = useState(false);

  const parentVariant: Variants = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.075,
        delayChildren: 0.15,
      },
    },
  };

  const emailVariant: Variants = {
    open: { opacity: 1, y: 0, filter: "blur(0px)" },
    close: { opacity: 0, y: 5, filter: "blur(10px)" },
  };

  const iconVariant: Variants = {
    open: { opacity: 1, scale: 1 },
    close: { opacity: 0, scale: 0.85 },
  };

  const timeVariant: Variants = {
    open: { opacity: 1, y: 0, filter: "blur(0px)" },
    close: { opacity: 0, y: 10, filter: "blur(5px)" },
  };

  const circleVariant: Variants = {
    open: {
      rotate: 360,
      transition: {
        ease: "linear",
        duration: 2.5,
        repeat: Infinity,
      },
    },
    close: { rotate: 0 },
  };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      variants={parentVariant}
      animate={hovered ? "open" : "close"}
      initial="close"
      className={cn(
        "relative h-full w-full overflow-hidden rounded-md border",
        "bg-neutral-50 dark:bg-neutral-900"
      )}
    >
      <div className="relative h-full w-full px-4">
        {/* Header */}
        <div className="mt-6">
          <div className="flex items-center justify-between rounded-md bg-neutral-100 p-3 dark:bg-neutral-800">
            <div className="flex items-center gap-3">
              <motion.div variants={circleVariant} className="h-4 w-4">
                <TbCircleDotted className="h-full w-full text-red-500" />
              </motion.div>
              <p className="text-[10px] text-neutral-600 dark:text-neutral-300">
                Procesando, Revisando...
              </p>
            </div>
            <p className="text-[10px] text-neutral-500">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
          </div>
        </div>

        {/* Emails */}
        <div className="mt-4 flex flex-col gap-1">
          {blockedEmails.map(({ email, time }) => (
            <div key={email} className="flex items-start gap-1">
              <div className="relative h-6 w-6">
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10">
                  <GoDotFill className="h-2.5 w-2.5 text-neutral-400" />
                </div>
                <motion.div
                  variants={iconVariant}
                  className="absolute inset-0 flex items-center justify-center rounded-full bg-green-600"
                >
                  <FaCheckDouble className="h-4 w-4 text-white" />
                </motion.div>
              </div>

              <div>
                <motion.p
                  variants={emailVariant}
                  className="text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  {email}
                </motion.p>
                <motion.span
                  variants={timeVariant}
                  className="text-[10px] text-neutral-500"
                >
                  Blocked {time}
                </motion.span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FraudCard;
