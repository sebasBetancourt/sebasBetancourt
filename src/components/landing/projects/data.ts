import { IconType } from "react-icons";
import {
  SiTailwindcss, SiReact, SiVite, SiFastify, SiTypescript, SiMongodb,
  SiZod, SiJsonwebtokens, SiSwagger, SiVitest, SiDocker, SiReactrouter
} from "react-icons/si";
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
    demo?: string;
    frontend?: string;
    backend?: string;
    repo?: string;
  };
};

const PROJECTS_ES: Project[] = [
  {
    title: "PelixFlix",
    description: "Plataforma de streaming full-stack donde puedes explorar y ver cerca de 10.000 películas, series y anime, calificarlos y reseñarlos, y guardar favoritos y tu propia lista. Incluye un panel de administración para curar el catálogo, moderar reseñas y lanzar sincronizaciones.",
    features: [
      "Ver películas, series y anime desde el navegador: explorar por categoría, buscar por nombre con paginación, clasificaciones, favoritos y \"Mi Lista\".",
      "API en Fastify 5 + TypeScript con arquitectura por capas (routes → controllers → services → repositories), validación con Zod, autenticación JWT y documentación Swagger.",
      "Sincronización del catálogo (~10.000 títulos) con un proveedor externo: candado para evitar corridas simultáneas, historial de ejecuciones, modo de prueba sin escritura y validaciones antes de guardar.",
      "Seguridad: recuperación de contraseña con tokens de un solo uso guardados como hash y con expiración, rate limiting por IP y por correo, Helmet y procesamiento seguro de fotos de perfil.",
      "Más de 130 tests automatizados (Vitest) en API y frontend, incluidos smoke tests de rutas e integración contra una base de datos aislada.",
    ],
    techStack: [
      { name: "Fastify", icon: SiFastify, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Zod", icon: SiZod, color: "#3E67B1" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#d63aff" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
    visual: {
      title: "Mira y reseña películas, series y anime",
      bgColor: "bg-[#540a0ac4]",
      image: "/img/pelixflix/home.png",
      imageHover: "/img/pelixflix/browse.png",
    },
    links: {
      demo: "https://streaming-psi-olive.vercel.app",
      frontend: "https://github.com/sebasBetancourt/streaming",
      backend: "https://github.com/sebasBetancourt/Pelixflix--backend"
    }
  },
];

type LocalizedFields = Pick<Project, "description" | "features"> & { visualTitle: string };

// Mismo orden que PROJECTS_ES
const PROJECTS_EN_TEXT: LocalizedFields[] = [
  {
    description: "Full-stack streaming platform where you can browse and watch around 10,000 movies, series and anime, rate and review them, and keep favorites and your own watchlist. It includes an admin panel to curate the catalog, moderate reviews and run catalog syncs.",
    features: [
      "Watch movies, series and anime in the browser: browse by category, search by name with pagination, rankings, favorites and \"My List\".",
      "Fastify 5 + TypeScript API with a layered architecture (routes → controllers → services → repositories), Zod validation, JWT authentication and Swagger docs.",
      "Catalog sync (~10,000 titles) with an external provider: a lock to prevent concurrent runs, run history, a dry-run mode and validation before writing.",
      "Security: password reset with single-use, hashed, expiring tokens, rate limiting per IP and per email, Helmet and safe profile-photo processing.",
      "130+ automated tests (Vitest) across the API and the frontend, including route smoke tests and integration tests against an isolated database.",
    ],
    visualTitle: "Watch and review movies, series and anime",
  },
];

export const PROJECTS_DATA: Record<Lang, Project[]> = {
  es: PROJECTS_ES,
  en: PROJECTS_ES.map((project, i) => {
    const { visualTitle, ...text } = PROJECTS_EN_TEXT[i];
    return { ...project, ...text, visual: { ...project.visual, title: visualTitle } };
  }),
};
