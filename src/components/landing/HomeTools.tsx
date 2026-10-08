"use client";

import SkillsSection from "../atoms/SkillsSection";
import {
  SiGo,
  SiNodedotjs,
  SiTypescript,
  SiFastify,
  SiExpress,
  SiPrisma,
  SiZod,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiNginx,
  SiLinux,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiVite,
} from "react-icons/si";
import { useLang } from "@/i18n/LanguageProvider";


export default function HomeTools() {
  const { t } = useLang();
  return (
    <div className="w-full text-center py-20 px-4 md:px-10 flex flex-col gap-24">
      <p className="text-lg text-center font-instrument tracking-widest text-neutral-400">
        {t.skills.heading}
      </p>

      {/* Backend */}
      <SkillsSection
        icons={[
          SiGo,
          SiNodedotjs,
          SiTypescript,
          SiFastify,
          SiExpress,
          SiPrisma,
          SiZod,
          SiPython,
        ]}
        text1={t.skills.backend[0]}
        text2={t.skills.backend[1]}
        className="bg-gradient-to-r from-fuchsia-800 font-changa to-slate-800 bg-clip-text text-transparent"
      />

      {/* Datos e infraestructura */}
      <SkillsSection
        icons={[
          SiPostgresql,
          SiMongodb,
          SiRedis,
          SiDocker,
          SiNginx,
          SiLinux,
          SiGit,
        ]}
        text1={t.skills.data[0]}
        text2={t.skills.data[1]}
        className="bg-gradient-to-r from-fuchsia-700 to-slate-700 bg-clip-text text-transparent"
      />

      {/* Frontend */}
      <SkillsSection
        icons={[
          SiReact,
          SiNextdotjs,
          SiTailwindcss,
          SiShadcnui,
          SiVite,
        ]}
        text1={t.skills.frontend[0]}
        text2={t.skills.frontend[1]}
        className="bg-gradient-to-r from-fuchsia-600 to-slate-600 bg-clip-text text-transparent"
      />
    </div>
  );
}
