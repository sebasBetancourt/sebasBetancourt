"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import InfiniteSlider from "../ui/smoothui/infinite-slider";
import { Globe, Speech } from "lucide-react";
import Mundo from "../atoms/Globe";
import { SocialCardExample } from "../atoms/CardContact";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiDocker,
  SiGooglemeet,
  SiGmail,
  SiChatbot
} from "react-icons/si";
import {FaAws, FaHubspot} from "react-icons/fa"
import FrameworkAgnostic from "../ui/forgeui/framework-agnostic";

import FraudCard from "../ui/forgeui/fraud-card";

function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function Flag({ label, img }: { label: string, img: string }) {
  return (
    <div className="flex rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300 justify-center items-center gap-1">
        <span className="">
      {label}
    </span>
    <img className="w-4 h-4" src={img} alt="" />
    </div>
  );
}


const blockedEmails = [
  { email: "bad_actor+1@gamil.com", time: "Aug 9 at 14:09" },
  { email: "spammer123@mailor.com", time: "Aug 10 at 11:23" },
  { email: "fake+prmo@tempmail.com", time: "Aug 11 at 09:45" },
  { email: "bot@disposablemail.org", time: "Aug 12 at 16:02" },
];


export default function AboutBento() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-25 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[320px]">

        {/* Collaboration */}
        <BentoCard className="md:col-span-2 flex justify-between ">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-widest text-neutral-400">
              Colaboración
            </p>
          
            <h3 className="mt-3 text-lg text-neutral-200">
              Priorizo la colaboración con el cliente,
              <br /> fomentando la comunicación abierta.
            </h3>
            <div className="flex justify-around">
              <Speech className="h-20 w-20 text-neutral-400"></Speech>

            <div className="grid grid-cols-2 gap-2">
              <SiGooglemeet className="w-8 h-8 text-green-700"></SiGooglemeet>
              <SiGmail className="w-8 h-8 text-red-900"></SiGmail>
              <SiChatbot className="w-8 h-8 text-neutral-100"></SiChatbot>
              <FaHubspot className="w-8 h-8 text-orange-600"></FaHubspot>
            </div>
            </div>

          </div>
        
          <div className=" h-full">
            <FraudCard blockedEmails={blockedEmails} />
          </div>
        </BentoCard>

        {/* Tech Stack */}
        <BentoCard>
  <p className="text-xs uppercase tracking-widest text-neutral-400">
    Tech stack
  </p>

  <h3 className="mt-2 text-lg font-medium text-neutral-100">
    Apasionado por tecnologías de vanguardia
  </h3>

  {/* Frontend / UI */}
  <div className="mt-4 w-full overflow-hidden">
    <InfiniteSlider gap={20} speed={35} speedOnHover={0}>
      {[
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "CSS", icon: SiCss3 },
        { name: "Vercel", icon: SiVercel },
      ].map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="
            flex h-20 w-20 shrink-0 flex-col items-center justify-center
            rounded-xl border border-white/10
            bg-white/[0.02] backdrop-blur
            text-neutral-300
            hover:border-white/20 hover:text-white
            transition
          "
        >
          <Icon className="h-7 w-7" />
          <span className="mt-1 text-[10px]">{name}</span>
        </div>
      ))}
    </InfiniteSlider>
  </div>

  {/* Backend / Infra (dirección opuesta) */}
  <div className="mt-4 w-full overflow-hidden">
    <InfiniteSlider gap={20} speed={35} speedOnHover={0} reverse>
      {[
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Docker", icon: SiDocker },
        { name: "AWS", icon: FaAws },
      ].map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="
            flex h-20 w-20 shrink-0 flex-col items-center justify-center
            rounded-xl border border-white/10
            bg-white/[0.02] backdrop-blur
            text-neutral-300
            hover:border-white/20 hover:text-white
            transition
          "
        >
          <Icon className="h-7 w-7" />
          <span className="mt-1 text-[10px]">{name}</span>
        </div>
      ))}
    </InfiniteSlider>
  </div>
</BentoCard>




        {/* Timezone */}
        <BentoCard className="md:row-span-2">
          <div className="flex gap-4 justify-center items-center">
            <h2 className="text-xl text-neutral-300 fon">
            Soy muy flexible, Trabajo Remoto para cualquier parte del Mundo
          </h2>
          <Globe className="h-15 w-15"/>
          </div>

          <div className="mt-6 flex gap-2">
            <Flag label="Colombia" img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1280px-Flag_of_Colombia.svg.png"/>
            <Flag label="LATAM" img="https://cdn-icons-png.freepik.com/256/10601/10601279.png?semt=ais_white_label"/>
            <Flag label="USA" img="https://static.vecteezy.com/system/resources/previews/001/233/168/non_2x/united-states-of-america-flag-vector.jpg"/>
          </div>

          <Mundo></Mundo>
        </BentoCard>

        {/* CTA */}
        <BentoCard className="md:col-span-2 flex-1 space-y-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-neutral-100">
              Construyamos algo juntos
            </h3>

            <p className="mt-2 text-m italic text-neutral-400 leading-relaxed">
              Trabajo con emprendedores, empresas e instituciones para diseñar
              y desarrollar software confiable que resuelva problemas reales
              y pueda crecer con el tiempo.
            </p>
          </div>

           <FrameworkAgnostic
            />

        </BentoCard>

        <BentoCard className="p-0">
          <SocialCardExample>

          </SocialCardExample>
        </BentoCard>
        


      </div>
    </section>
  );
}
