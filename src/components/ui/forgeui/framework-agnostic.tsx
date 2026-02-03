"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import type { SVGProps } from "react";

import { SiJira, SiNotion } from "react-icons/si";
import { FaPeopleCarry, FaGithub, FaTrello } from "react-icons/fa";
import { GiServerRack, GiTalk } from "react-icons/gi";
import { CiCloudOn } from "react-icons/ci";




type FrameworkAgnosticProps = {
  cardTitle?: string;
  cardDescription?: string;
};

const FrameworkAgnostic = ({
}: FrameworkAgnosticProps) => {
  return (
    <div
      className={cn(
        "relative",
        "flex flex-col justify-between",
        "h-[10rem]",
        "bg-trasparent",
      )}
    >
      <FrameworkCard />
    </div>
  );
};

export default FrameworkAgnostic;

const FrameworkCard = () => {
  const [nextJsTransform, setNextJsTransform] = useState("none");
  const [reactTransform, setReactTransform] = useState("none");
  const [htmlTransform, setHtmlTransform] = useState("none");

  useEffect(() => {
    const cycleAnimations = async () => {
      const upStyle = "translateY(-3.71px) rotateX(10.71deg) translateZ(20px)";
      const downStyle = "none";

      const transitionDuration = 1100;
      const durationOfUpState = 1200;
      const delayBetweenCards = 600;

      while (true) {
        setReactTransform(upStyle);
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState));
        setReactTransform(downStyle);
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards)
        );

        setNextJsTransform(upStyle);
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState));
        setNextJsTransform(downStyle);
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards)
        );

        setHtmlTransform(upStyle);
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState));
        setHtmlTransform(downStyle);
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards)
        );
      }
    };

    cycleAnimations();
  }, []);

  const cardClasses =
    "flex aspect-square items-center justify-center rounded-md border border-neutral-800 bg-gradient-to-b from-neutral-700 to-neutral-900 p-4 " +
    "[@media(min-width:320px)]:h-20 [@media(min-width:500px)]:h-26 " +
    "transition-transform duration-1000 ease-out will-change-transform";

  return (
    <>
      <div
        className={cn(
          "relative",
          "flex flex-col items-center justify-center gap-1",
          "h-[13.5rem] w-full"
        )}
      >
        <div className="absolute flex h-full w-full items-center justify-center">
          <div className="h-full w-[15rem]">
            <svg
              className="h-full w-full"
              width="80%"
              height="80%"
              viewBox="0 0 100 100"
              fill="none"
            >
              <g stroke="#737373" strokeWidth="0.1">
                <path d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5" />
              </g>
              <g mask="url(#framework-mask)">
                <circle
                  className="frameworkline framework-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="url(#framework-blue-grad)"
                />
              </g>
              <defs>
                <mask id="framework-mask">
                  <path
                    d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5"
                    strokeWidth="0.3"
                    stroke="white"
                  />
                </mask>
                <radialGradient id="framework-blue-grad" fx="1">
                  <stop offset="10%" stopColor="#0062ffff" />
                  <stop offset="100%" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center justify-center gap-4",
            "[perspective:1000px] [transform-style:preserve-3d]"
          )}
        >
          <div className={cardClasses} style={{ transform: reactTransform }}>
            <div className="flex-1 p-1">
             <SiJira className="size-6 text-cyan-600 mb-2 [@media(min-width:500px)]:size-9" />
            <FaGithub className="size-6 [@media(min-width:500px)]:size-9" /> 
            </div>
            <div className="flex-1 p-1">
              <SiNotion className="size-6 text-neutral-200 mb-1 [@media(min-width:500px)]:size-9" />
            <FaTrello className="size-6 text-blue-700 [@media(min-width:500px)]:size-9" />
            </div>
          </div>
          <div className={cardClasses} style={{ transform: nextJsTransform }}>
            <div className="flex gap-1">
              <FaPeopleCarry className="size-6 text-neutral-400 [@media(min-width:500px)]:size-9" />
            <GiTalk className="size-6 text-neutral-200 [@media(min-width:500px)]:size-9" />
            </div>
          </div>
          <div className={cardClasses} style={{ transform: htmlTransform }}>
            <div className="flex gap-1">
              <GiServerRack className="size-6 text-neutral-400 [@media(min-width:500px)]:size-9" />
              <CiCloudOn className="size-6 text-neutral-400 [@media(min-width:500px)]:size-9" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-3 w-full bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>
    </>
  );
};
