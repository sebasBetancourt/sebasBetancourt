"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { useLang } from "@/i18n/LanguageProvider";

export function AboutSection() {
  const { t } = useLang();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-3xl lg:text-5xl font-semibold font-instrument tracking-[-0.015em] text-white">
            {t.aboutCards.title}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            {t.aboutCards.body}
          </p>
        </div>
        <img
          src="/img/pixelflix.png"
          width={500}
          height={500}
          alt="PelixFlix"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-violet-900 space-y-6">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-5xl font-semibold font-instrument tracking-[-0.015em] text-white">
          {t.aboutCards.stackTitle}
        </h2>
        <p className="pt-3">
          {t.aboutCards.stack.map((row) => (
            <React.Fragment key={row.label}>
              <span className="text-neutral-200 font-medium"><strong>{row.label}</strong></span>{" "}
              {row.value}
              <br />
            </React.Fragment>
          ))}
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-5xl font-semibold font-instrument tracking-[-0.015em] text-white">
            {t.aboutCards.thinkTitle}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            {t.aboutCards.thinkBody}
          </p>
        </div>
        <img
          src="/img/OrbisPro/1.PNG"
          width={500}
          height={500}
          alt="OrbisPro CLI"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
