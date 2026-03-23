import { IconType } from "react-icons";
import { 
  SiVuedotjs, SiNuxtdotjs, SiDjango, SiTailwindcss, SiTypescript, 
  SiReact, SiVite, SiNodedotjs, SiExpress, SiJsonwebtokens, SiMongodb, 
  SiJavascript, SiDotenv, SiHtml5, SiCss3 
} from "react-icons/si";
import { FaDatabase, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";

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

export const PROJECTS_DATA: Project[] = [
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
      image: "https://media.licdn.com/dms/image/v2/D4E2DAQEGinEfdJwbYA/profile-treasury-image-shrink_800_800/B4EZrNXAx3J0AY-/0/1764381954423?e=1774850400&v=beta&t=JifXssyb9UJkeNDfHONn4ClyFm8p2q-z47BS4SQDWHc",
      imageHover: "https://media.licdn.com/dms/image/v2/D4E2DAQHvmTHEbaCLrw/profile-treasury-image-shrink_800_800/B4EZrNW8TBHoAY-/0/1764381936117?e=1774850400&v=beta&t=8W7-RzpUAluCZ42aIV9Na5LVoF7RHSIA34FAurNJjZM",
    },
    links: {
      frontend: "https://github.com/sebasBetancourt/streaming",
      backend: "https://github.com/sebasBetancourt/Pelixflix--backend"
    }
  },
  {
    title: "Edusync",
    description: "Plataforma moderna y responsiva para la gestión académica de una institución educativa.",
    features: [
      "Gestión académica integral y eficiente.",
      "Diseño moderno, intuitivo y completamente responsivo.",
      "Proyecto colaborativo implementando el stack MERN.",
      "Proyecto de Gestión Académica con autenticación, autorización y gestión de usuarios."
    ],
    techStack: [
      { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Nuxt", icon: SiNuxtdotjs, color: "#00DC82" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "SQL", icon: FaDatabase, color: "#336791" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }
    ],
    visual: {
      title: "Plataforma de Gestión Académica para instituciones educativas",
      bgColor: "bg-blue-600",
      image: "/img/edusync/1.png",
      imageHover: "/img/edusync/2.png",
    },
    links: {
      repo: "https://github.com/sebasBetancourt/Edusync"
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
      image: "/img/OrbisPro/2.png",
      imageHover: "/img/OrbisPro/1.png",
    },
    links: {
      repo: "https://github.com/sebasBetancourt/Orbis-ProCLI"
    }
  },
  {
    title: "BitTribe",
    description: "Plataforma web interactiva para explorar, analizar y convertir criptomonedas en tiempo real con autenticación y librería personal.",
    features: [
      "Explorador y buscador de criptomonedas en tiempo real con conversión a divisa (COP).",
      "Autenticación completa y gestión de librería personal con persistencia local.",
      "Diseño interactivo 'mobile-first' completamente responsivo."
    ],
    techStack: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "APIs", icon: FaNetworkWired, color: "#FFFFFF" }
    ],
    visual: {
      title: "Explorador Cripto en Tiempo Real",
      bgColor: "bg-indigo-600",
      image: "/img/bitcoin/1.png",
      imageHover: "/img/bitcoin/2.png",
    },
    links: {
      repo: "https://github.com/sebasBetancourt/criptoCoins"
    }
  },
  {
    title: "GameCampus",
    description: "Plataforma web interactiva estilo Dungeons & Dragons para crear y gestionar personajes personalizables.",
    features: [
      "Integración de múltiples APIs para enriquecer la experiencia.",
      "Enfoque en gamificación y trabajo colaborativo bajo SCRUM."
    ],
    techStack: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "APIs", icon: FaNetworkWired, color: "#FFFFFF" },
      { name: "SCRUM", icon: FaProjectDiagram, color: "#FFFFFF" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" }
    ],
    visual: {
      title: "Aventura y creación de personajes basada en Dungeons & Dragons",
      bgColor: "bg-[#1a1a1a]",
      image: "/img/gameCampus/1.png",
      imageHover: "/img/gameCampus/2.png",
    },
    links: {
      repo: "https://github.com/julianort11/GameCampus"
    }
  }
];
