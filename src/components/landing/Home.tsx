import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import TextGenerateEffectProps from "@/components/atoms/TextGenerateEffect";
import { NoiseBackground } from "@/components/ui/noise-background";
import TypingText from "@/components/atoms/TypingText";
import { ConnectButton } from "@/components/atoms/ConnectButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImagesBadge } from "@/components/ui/images-badge";


export default function HomeComponents(){
    return(
        <div className="flex h-fit w-full z-100 justify-center items-center">
            <BackgroundRippleEffect />
      
      
      <div className="flex flex-col px-70 z-100 items-center justify-center gap-5">
        <div className="flex w-1/2 items-center justify-center gap-2">
          <ImagesBadge
        text="Visita mis proyectos"
        images={[
          "https://assets.aceternity.com/pro/agenforce-2.webp",
          "https://assets.aceternity.com/pro/minimal-3-min.webp",
          "https://assets.aceternity.com/pro/bento-4.png",
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
              Ver Proyectos &rarr;
            </button>
          </NoiseBackground>
        </div>
        <TextGenerateEffectProps className="text-6xl font-extrabold font- text-center" words="Ayudo a convertir ideas en experiencias digitales fluidas."></TextGenerateEffectProps>
        <div className="flex gap-5">
          <TypingText className=" font-mono text-lg" pauseDuration={3000} loop={true} text={"Hola, Soy Sebastian Betancourt. Desarrollador de Software"}></TypingText>
          <Avatar>
            <AvatarImage src="img/icon.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <ConnectButton></ConnectButton>
      </div>
        </div>
    );
}