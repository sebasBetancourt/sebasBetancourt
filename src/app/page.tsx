import Image from "next/image";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import TextGenerateEffectProps from "@/components/atoms/TextGenerateEffect";
import { NoiseBackground } from "@/components/ui/noise-background";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <BackgroundRippleEffect />
      
      <div className="flex flex-col pt-50 px-60 z-100 items-center justify-center gap-5">
        <div className="flex w-1/2 items-center gap-2">
          <span>Visita todos mis proyectos &rarr;</span>
          <NoiseBackground
            containerClassName="w-fit rounded-full"
            gradientColors={[
              "rgb(255, 100, 150)",
              "rgb(100, 150, 255)",
              "rgb(255, 200, 100)",
            ]}
          >
            <button className="cursor-pointer text-sm rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-2 py-1 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
              Ver Proyectos &rarr;
            </button>
          </NoiseBackground>
        </div>
        <TextGenerateEffectProps className="text-4xl fonnt-extrabold text-center" words="Ayudo a convertir ideas en experiencias digitales fluidas."></TextGenerateEffectProps>
      </div>
    </div>
  );
}