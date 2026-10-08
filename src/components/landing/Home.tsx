"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import TextGenerateEffectProps from "@/components/atoms/TextGenerateEffect";
import { NoiseBackground } from "@/components/ui/noise-background";
import TypingText from "@/components/atoms/TypingText";
import { ConnectButton } from "@/components/atoms/ConnectButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImagesBadge } from "@/components/ui/images-badge";
import { useLang } from "@/i18n/LanguageProvider";



export default function HomeComponents(){
    const { t } = useLang();
    return(
        <div className="flex h-fit w-full z-100 justify-center items-center">
            <BackgroundRippleEffect />
      
      
      <div className="flex flex-col px-4 md:px-12 lg:px-70 z-100 items-center justify-center gap-5">
        <div className="flex w-full md:w-1/2 flex-wrap items-center justify-center gap-2">
          <ImagesBadge
        text={t.hero.badge}
        images={[
          "/img/pixelflix.png",
          "/img/OrbisPro/1.PNG",
          "/img/OrbisPro/2.PNG",
        ]}
        folderSize={{ width: 30, height: 20 }}
        teaserImageSize={{ width: 20, height: 18 }}
        hoverImageSize={{ width: 100, height: 60 }}
        hoverTranslateY={-70}
        hoverSpread={20}
      />
          <NoiseBackground
            containerClassName="w-fit rounded-full"
            gradientColors={[
              "rgb(255, 100, 150)",
              "rgb(100, 150, 255)",
              "rgb(255, 200, 100)",
            ]}
          >
            <button className="cursor-pointer text-sm rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-2 py-1 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
              <a href="/projects">{t.hero.cta} &rarr;</a>
            </button>
          </NoiseBackground>
        </div>
        <TextGenerateEffectProps key={t.hero.title} className="text-4xl md:text-6xl font-extrabold text-center" words={t.hero.title}></TextGenerateEffectProps>
        <div className="flex gap-5 items-center">
          <TypingText key={t.hero.typing} className="font-mono text-sm md:text-lg" pauseDuration={3000} loop={true} text={t.hero.typing}></TypingText>
          <Avatar>
            <AvatarImage src="/img/icon.png" />
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
        </div>
        <ConnectButton></ConnectButton>
      </div>
        </div>
    );
}