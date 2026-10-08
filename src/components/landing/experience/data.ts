import { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiGit, SiDocker,
  SiJavascript, SiSwagger, SiPostman, SiDigitalocean, SiLinux,
  SiFastify, SiJira, SiHtml5, SiCss3,
  SiGo, SiRedis, SiVite, SiShadcnui, SiNginx, SiZod,
} from "react-icons/si";
import type { Lang } from "@/i18n/dictionaries";

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
  icon: "waiwa" | "iasd" | "adeptos";
  descriptions: DescriptionItem[];
  techStack: { name: string; icon?: IconType; color?: string }[];
  links?: { label: string; url: string }[];
};

const EXPERIENCE_ES: Experience[] = [
  {
    company: "Adeptos AI",
    role: "Desarrollador de Software · IA & Integraciones",
    period: "ABR 2026 — OCT 2026",
    type: "Plataforma SaaS · CRM con Agentes de IA",
    location: "Remoto",
    icon: "adeptos",
    descriptions: [
      {
        label: "Agentes de IA & MCP",
        text: "Desarrollé servidores MCP (Model Context Protocol) en Node.js y TypeScript que exponen herramientas a agentes de IA, con validación de esquemas en Zod, credenciales aisladas por cliente y despliegue en contenedores Docker.",
        highlights: [
          { word: "servidores MCP (Model Context Protocol)", color: "#a855f7" },
          { word: "agentes de IA", color: "#f472b6" },
        ],
      },
      {
        label: "Integraciones & Autenticación",
        text: "Implementé flujos de OAuth 2.0 con PKCE, sincronización por webhooks con renovación de suscripciones, delta sync incremental, rate limiting distribuido entre réplicas con Redis y capas de abstracción que unifican distintos proveedores bajo una misma interfaz.",
        highlights: [
          { word: "OAuth 2.0 con PKCE", color: "#60a5fa" },
          { word: "delta sync", color: "#22d3ee" },
          { word: "Redis", color: "#ef4444" },
        ],
      },
      {
        label: "Sincronización Bidireccional",
        text: "Diseñé sincronización de datos en ambas direcciones entre sistemas mediante APIs REST y webhooks, resolviendo el enrutamiento de eventos en entornos multi-tenant y la migración de datos históricos a producción.",
        highlights: [
          { word: "APIs REST y webhooks", color: "#34d399" },
          { word: "multi-tenant", color: "#f97316" },
        ],
      },
      {
        label: "Backend en Go & Tiempo Real",
        text: "Construí APIs REST con Go, Fiber y GORM sobre PostgreSQL, actualizaciones en tiempo real con Server-Sent Events (SSE) y migraciones de esquema automáticas al arrancar el servicio.",
        highlights: [
          { word: "Go, Fiber y GORM", color: "#00ADD8" },
          { word: "SSE", color: "#a855f7" },
        ],
      },
      {
        label: "Frontend de Producto SaaS",
        text: "Desarrollé interfaces complejas en React 19, TypeScript y shadcn/ui: tableros Kanban con scroll infinito, importación masiva de datos CSV/Excel, formularios dinámicos y vistas de calendario.",
        highlights: [
          { word: "React 19", color: "#61DAFB" },
          { word: "scroll infinito", color: "#f472b6" },
        ],
      },
      {
        label: "Diagnóstico en Producción",
        text: "Depuré incidentes en producción de forma metódica: aislar servicios detrás de proxies como nginx, medir latencias y tiempos de espera para reproducir fallos intermitentes y llegar a la causa raíz con datos.",
        highlights: [
          { word: "nginx", color: "#009639" },
          { word: "causa raíz", color: "#ef4444" },
        ],
      },
    ],
    techStack: [
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Zod", icon: SiZod, color: "#3E67B1" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Git", icon: SiGit, color: "#F05032" },
    ],
    links: [
      { label: "Adeptos AI", url: "https://adeptos.ai/" },
    ],
  },
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
    role: "Desarrollador de Software · Voluntariado",
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

type LocalizedFields = Pick<Experience, "role" | "period" | "type" | "location" | "descriptions" | "links">;

// Mismo orden que EXPERIENCE_ES: Adeptos, Waiwa, IASD
const EXPERIENCE_EN_TEXT: LocalizedFields[] = [
  {
    role: "Software Developer · AI & Integrations",
    period: "APR 2026 — OCT 2026",
    type: "SaaS Platform · CRM with AI Agents",
    location: "Remote",
    descriptions: [
      {
        label: "AI Agents & MCP",
        text: "Developed MCP (Model Context Protocol) servers in Node.js and TypeScript that expose tools to AI agents, with Zod schema validation, per-client isolated credentials and Docker-based deployment.",
        highlights: [
          { word: "MCP (Model Context Protocol) servers", color: "#a855f7" },
          { word: "AI agents", color: "#f472b6" },
        ],
      },
      {
        label: "Integrations & Authentication",
        text: "Implemented OAuth 2.0 with PKCE flows, webhook-based sync with subscription renewal, incremental delta sync, distributed rate limiting across replicas with Redis, and abstraction layers that unify multiple providers behind a single interface.",
        highlights: [
          { word: "OAuth 2.0 with PKCE", color: "#60a5fa" },
          { word: "delta sync", color: "#22d3ee" },
          { word: "Redis", color: "#ef4444" },
        ],
      },
      {
        label: "Bidirectional Sync",
        text: "Designed two-way data synchronization between systems using REST APIs and webhooks, solving multi-tenant event routing and migrating historical data to production.",
        highlights: [
          { word: "REST APIs and webhooks", color: "#34d399" },
          { word: "multi-tenant", color: "#f97316" },
        ],
      },
      {
        label: "Go Backend & Real Time",
        text: "Built REST APIs with Go, Fiber and GORM on PostgreSQL, real-time updates with Server-Sent Events (SSE) and automatic schema migrations on service startup.",
        highlights: [
          { word: "Go, Fiber and GORM", color: "#00ADD8" },
          { word: "SSE", color: "#a855f7" },
        ],
      },
      {
        label: "SaaS Product Frontend",
        text: "Built complex interfaces in React 19, TypeScript and shadcn/ui: Kanban boards with infinite scroll, bulk CSV/Excel data import, dynamic forms and calendar views.",
        highlights: [
          { word: "React 19", color: "#61DAFB" },
          { word: "infinite scroll", color: "#f472b6" },
        ],
      },
      {
        label: "Production Debugging",
        text: "Debugged production incidents methodically: isolating services behind proxies like nginx, measuring latency and timeouts to reproduce intermittent failures and reach the root cause with data.",
        highlights: [
          { word: "nginx", color: "#009639" },
          { word: "root cause", color: "#ef4444" },
        ],
      },
    ],
  },
  {
    role: "Full Stack Developer",
    period: "JAN 2026 — PRESENT",
    links: [
      { label: "SaaS Admin", url: "https://waiwahostadmin.com/" },
      { label: "Accommodations", url: "https://waiwahost.com.co/" },
      { label: "Vivir Waiwa", url: "https://vivirwaiwa.com.co/" },
    ],
    type: "Contract · SaaS Platform",
    location: "Bucaramanga, Colombia · Hybrid",
    descriptions: [
      {
        label: "Scalable Backend Architecture",
        text: "Designed and implemented scalable solutions using Clean Architecture and a modern stack based on Node.js, Fastify and TypeScript for the WAIWA Host backend.",
        highlights: [
          { word: "Clean Architecture", color: "#a855f7" },
          { word: "Fastify", color: "#22d3ee" },
        ],
      },
      {
        label: "Optimized Frontend Development",
        text: "Built robust, optimized user interfaces with React, Next.js and TypeScript, prioritizing user experience (UI/UX) and client-side performance.",
        highlights: [
          { word: "React, Next.js", color: "#60a5fa" },
          { word: "UI/UX", color: "#f472b6" },
        ],
      },
      {
        label: "APIs & Documentation",
        text: "Built and documented high-performance APIs, using Swagger for endpoint specification and Postman for integration testing and technical collections.",
        highlights: [
          { word: "Swagger", color: "#34d399" },
          { word: "Postman", color: "#f97316" },
        ],
      },
      {
        label: "Database & Security",
        text: "Managed data persistence with PostgreSQL, applying solid relational design and protecting the system against vulnerabilities such as SQL injection.",
        highlights: [
          { word: "PostgreSQL", color: "#60a5fa" },
          { word: "SQL injection", color: "#ef4444" },
        ],
      },
      {
        label: "Infrastructure & DevOps",
        text: "Orchestrated deployments with Docker containers on DigitalOcean, including Linux server management and secure domain handling.",
        highlights: [
          { word: "Docker", color: "#2496ED" },
          { word: "DigitalOcean", color: "#0080FF" },
        ],
      },
      {
        label: "Agile Workflow",
        text: "Streamlined the development lifecycle with Git version control and agile task management in Jira, ensuring deliverables and technical goals were met.",
        highlights: [
          { word: "Git", color: "#F05032" },
          { word: "Jira", color: "#0052CC" },
        ],
      },
    ],
  },
  {
    role: "Software Developer · Volunteer",
    period: "DEC 2025 — PRESENT",
    type: "Volunteer · Science & Technology",
    location: "Bucaramanga, Colombia",
    descriptions: [
      {
        label: "End-to-End Web Development",
        text: "Built the official website for the Seventh-day Adventist Church – Norte Bucaramanga, a communication tool to reach new members and serve as a resource hub for the community.",
        highlights: [
          { word: "official website", color: "#a855f7" },
        ],
      },
      {
        label: "Community Impact",
        text: "A project focused on an accessible, modern platform that connects the community with event information, spiritual resources and direct communication channels.",
        highlights: [
          { word: "accessible, modern", color: "#34d399" },
        ],
      },
    ],
  },
];

export const EXPERIENCE_DATA: Record<Lang, Experience[]> = {
  es: EXPERIENCE_ES,
  en: EXPERIENCE_ES.map((exp, i) => ({ ...exp, ...EXPERIENCE_EN_TEXT[i] })),
};
