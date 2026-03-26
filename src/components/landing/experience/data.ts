import { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiGit, SiDocker,
  SiJavascript, SiSwagger, SiPostman, SiDigitalocean, SiLinux,
  SiFastify, SiJira, SiHtml5, SiCss3,
} from "react-icons/si";
import { FaChurch } from "react-icons/fa";

export type DescriptionItem = {
  label: string;
  text: string;
  highlights?: { word: string; color: string }[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  icon: "waiwa" | "iasd";
  descriptions: DescriptionItem[];
  techStack: { name: string; icon?: IconType; color?: string }[];
  links?: { label: string; url: string }[];
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Colectivo Waiwa SAS",
    role: "Desarrollador Full Stack",
    period: "ENE 2026 — PRESENTE",
    type: "Contrato · Plataforma SaaS",
    location: "Bucaramanga, Colombia · Híbrido",
    icon: "waiwa",
    descriptions: [
      {
        label: "Arquitectura Backend Escalable",
        text: "Diseñé e implementé soluciones tecnológicas escalables utilizando Clean Architecture y un stack moderno basado en Node.js, Fastify y TypeScript para el backend de WAIWA Host.",
        highlights: [
          { word: "Clean Architecture", color: "#a855f7" },
          { word: "Fastify", color: "#22d3ee" },
        ],
      },
      {
        label: "Desarrollo Frontend Optimizado",
        text: "Desarrollé interfaces de usuario robustas y optimizadas con React, Next.js y TypeScript, priorizando la experiencia de usuario (UI/UX) y el rendimiento del lado del cliente.",
        highlights: [
          { word: "React, Next.js", color: "#60a5fa" },
          { word: "UI/UX", color: "#f472b6" },
        ],
      },
      {
        label: "APIs & Documentación",
        text: "Construí y documenté APIs de alto rendimiento integrando Swagger para la especificación de endpoints y Postman para pruebas de integración y colecciones técnicas.",
        highlights: [
          { word: "Swagger", color: "#34d399" },
          { word: "Postman", color: "#f97316" },
        ],
      },
      {
        label: "Base de Datos & Seguridad",
        text: "Gestioné la persistencia de datos mediante PostgreSQL, aplicando diseños relacionales sólidos y garantizando la seguridad del sistema contra vulnerabilidades como inyecciones SQL.",
        highlights: [
          { word: "PostgreSQL", color: "#60a5fa" },
          { word: "inyecciones SQL", color: "#ef4444" },
        ],
      },
      {
        label: "Infraestructura & DevOps",
        text: "Orquesté el despliegue utilizando contenedores Docker en entornos de DigitalOcean, incluyendo el manejo de servidores Linux y la gestión segura de dominios.",
        highlights: [
          { word: "Docker", color: "#2496ED" },
          { word: "DigitalOcean", color: "#0080FF" },
        ],
      },
      {
        label: "Gestión Ágil",
        text: "Optimicé el ciclo de vida del desarrollo mediante control de versiones con Git y gestión de tareas ágiles en Jira, asegurando el cumplimiento de entregables y objetivos técnicos.",
        highlights: [
          { word: "Git", color: "#F05032" },
          { word: "Jira", color: "#0052CC" },
        ],
      },
    ],
    techStack: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Fastify", icon: SiFastify, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "DigitalOcean", icon: SiDigitalocean, color: "#0080FF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    links: [
      { label: "SaaS Admin", url: "https://waiwahostadmin.com/" },
      { label: "Alojamientos", url: "https://waiwahost.com.co/" },
      { label: "Vivir Waiwa", url: "https://vivirwaiwa.com.co/" },
    ],
  },
  {
    company: "IASD Norte Bucaramanga",
    role: "Ingeniero de Software · Voluntariado",
    period: "DIC 2025 — PRESENTE",
    type: "Voluntariado · Ciencia y Tecnología",
    location: "Bucaramanga, Colombia",
    icon: "iasd",
    descriptions: [
      {
        label: "Desarrollo Web Integral",
        text: "Desarrollo de la página web oficial para la Iglesia Adventista del Séptimo Día – Norte Bucaramanga, creando una herramienta de comunicación para atraer a nuevos miembros y servir como centro de recursos para la comunidad.",
        highlights: [
          { word: "página web oficial", color: "#a855f7" },
        ],
      },
      {
        label: "Impacto Comunitario",
        text: "Proyecto enfocado en crear una plataforma accesible y moderna que conecta a la comunidad con información de eventos, recursos espirituales y canales de comunicación directa.",
        highlights: [
          { word: "accesible y moderna", color: "#34d399" },
        ],
      },
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
    links: [
      { label: "IASD Norte", url: "https://www.iasdnorte.org/" },
    ],
  },
];
