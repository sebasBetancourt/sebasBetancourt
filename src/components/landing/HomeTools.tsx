"use client";

import SkillsSection from "../atoms/SkillsSection";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiDocker,
  SiPython,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiGit,
  SiLinux,
  SiPostgresql,
  SiMongodb,
  SiJupyter,
  SiFastify,
  SiVuedotjs,
  SiNuxtdotjs,
  SiExpress,
  SiPrisma,
  SiJsonwebtokens,
  SiFastapi,
  SiDjango,
  SiPydantic,
  SiVercel,
  SiHostinger,
  SiN8N,
  SiLangchain,
  SiOpenai,
  SiNumpy,
  SiScipy,
} from "react-icons/si";
import { TbMathSymbols } from "react-icons/tb";
import { FaAws } from "react-icons/fa";


export default function HomeTools() {
  return (
    <div className="w-full text-center py-20 px-10 flex flex-col gap-24">
      <p className="text-lg text-center font-instrument tracking-widest text-neutral-400">
        MIS SKILLS
      </p>

      {/* Desarrollo de Software */}
      <SkillsSection
        icons={[
          SiReact,
          SiVuedotjs,
          SiNextdotjs,
          SiNuxtdotjs,
          SiTailwindcss,
          SiCss3,

          SiNodedotjs,
          SiTypescript,
          SiFastify,
          SiExpress,
          SiPrisma,
          SiJsonwebtokens,


          SiPython,
          SiFastapi,
          SiDjango,
          SiPydantic,

          SiPostgresql,
          SiMongodb,


          SiDocker,
          SiGit,
          SiLinux,
          SiVercel,
          SiHostinger,
          FaAws
          
        ]}
        text1="Tecnologias"
        text2="Desarrollo de Software"
        className="bg-gradient-to-r from-fuchsia-800 font-changa to-slate-800 bg-clip-text text-transparent"
      />

      {/* IA / Machine Learning */}
      <SkillsSection
        icons={[
          SiN8N,
          SiLangchain,
          SiPython,
          SiFastapi,
          SiOpenai,


        ]}
        text1="Tecnologias"
        text2="Automatizacion IA"
        className="bg-gradient-to-r from-fuchsia-700 to-slate-700 bg-clip-text text-transparent"
      />

      {/* Análisis de Datos */}
      <SkillsSection
        icons={[
          SiPython,
          SiPandas,
          SiNumpy,
          SiScipy,
          SiJupyter,
          SiPostgresql,
          SiMongodb,
          TbMathSymbols

        ]}
        text1="Herramientas"
        text2="Análisis de Datos"
        className="bg-gradient-to-r from-fuchsia-600 to-slate-600 bg-clip-text text-transparent"
      />
    </div>
  );
}
