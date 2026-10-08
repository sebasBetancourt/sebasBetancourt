import { IconType } from "react-icons";
import {
  SiTailwindcss, SiReact, SiVite, SiNodedotjs, SiExpress, SiJsonwebtokens, SiMongodb,
  SiJavascript
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import type { Lang } from "@/i18n/dictionaries";

export type Project = {
  title: string;
  description: string;
  features: string[];
  techStack: { name: string; icon?: IconType; color?: string }[];
  visual: {
    title: string;
    bgColor: string;
    image: string;
    imageHover?: string;
  };
  links?: {
    frontend?: string;
    backend?: string;
    repo?: string;
  };
};

const PROJECTS_ES: Project[] = [
  {
    title: "PelixFlix",
    description: "Aplicación web full-stack diseñada para amantes del cine y series. La plataforma permite descubrir, calificar y reseñar contenido.",
    features: [
      "Interacción de usuarios mediante reseñas, likes y dislikes.",
      "Proyecto colaborativo implementando el stack MERN.",
      "Proyecto de Streaming con autenticación, autorización y gestión de usuarios."
    ],
    techStack: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ],
    visual: {
      title: "Plataforma de Streaming y social para amantes del cine",
      bgColor: "bg-[#540a0ac4]",
      image: "/img/pixelflix.png",
    },
    links: {
      frontend: "https://github.com/sebasBetancourt/streaming",
      backend: "https://github.com/sebasBetancourt/Pelixflix--backend"
    }
  },
  {
    title: "OrbisProCLI",
    description: "Aplicación de línea de comandos (CLI) en Node.js que permite a freelancers gestionar su portafolio, administrando clientes, proyectos y finanzas mediante transacciones seguras.",
    features: [
      "Operaciones CRUD avanzadas utilizando transacciones nativas y sesiones de MongoDB (ACID).",
      "Arquitectura escalable aplicando principios S.O.L.I.D. y patrones de diseño como Factory y Command.",
      "Desarrollo colaborativo bajo el framework SCRUM estructurado con Conventional Commits."
    ],
    techStack: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SCRUM", icon: FaProjectDiagram, color: "#FFFFFF" }
    ],
    visual: {
      title: "Gestión Profesional para Freelancers por Consola",
      bgColor: "bg-emerald-600",
      image: "/img/OrbisPro/2.PNG",
      imageHover: "/img/OrbisPro/1.PNG",
    },
    links: {
      repo: "https://github.com/sebasBetancourt/Orbis-ProCLI"
    }
  },
];

type LocalizedFields = Pick<Project, "description" | "features"> & { visualTitle: string };

// Mismo orden que PROJECTS_ES
const PROJECTS_EN_TEXT: LocalizedFields[] = [
  {
    description: "Full-stack web application for movie and TV fans. The platform lets users discover, rate and review content.",
    features: [
      "User interaction through reviews, likes and dislikes.",
      "Team project built on the MERN stack.",
      "Streaming project with authentication, authorization and user management."
    ],
    visualTitle: "Streaming and social platform for movie lovers",
  },
  {
    description: "Node.js command-line application (CLI) that lets freelancers manage their portfolio — clients, projects and finances — through safe transactions.",
    features: [
      "Advanced CRUD operations using native MongoDB transactions and sessions (ACID).",
      "Scalable architecture applying S.O.L.I.D. principles and design patterns such as Factory and Command.",
      "Team development under SCRUM, structured with Conventional Commits."
    ],
    visualTitle: "Professional management for freelancers from the terminal",
  },
];

export const PROJECTS_DATA: Record<Lang, Project[]> = {
  es: PROJECTS_ES,
  en: PROJECTS_ES.map((project, i) => {
    const { visualTitle, ...text } = PROJECTS_EN_TEXT[i];
    return { ...project, ...text, visual: { ...project.visual, title: visualTitle } };
  }),
};
