import { IconType } from "react-icons";
import {
  SiTailwindcss, SiReact, SiVite, SiFastify, SiTypescript, SiMongodb,
  SiZod, SiJsonwebtokens, SiSwagger, SiVitest, SiDocker, SiReactrouter,
  SiGo, SiPostgresql, SiRedis, SiAmazonsqs, SiTerraform, SiOpentelemetry,
  SiGoogle, SiNpm, SiNatsdotio, SiK6, SiGithubactions
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import type { Lang } from "@/i18n/dictionaries";

export type RoadmapStep = { label: string; done: boolean };

export type Project = {
  title: string;
  status?: "live" | "in-progress";
  roadmap?: RoadmapStep[];
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
  {
    title: "Relay",
    status: "in-progress",
    description: "API unificada para calendarios y correo de Google y Microsoft: conectas una cuenta una vez y lees, escribes y recibes cambios en tiempo real con la misma API, sin importar el proveedor.",
    features: [
      "OAuth 2.0 + PKCE contra Google y Microsoft Entra, con bóveda de tokens cifrada (AES-GCM, envelope encryption) y worker de refresh con candado distribuido en Redis.",
      "Cambios en tiempo real con watch channels de Google y suscripciones de Microsoft Graph renovadas automáticamente; delta sync como respaldo si se pierde un webhook.",
      "Workers en Go sobre SQS con idempotencia, reintentos con backoff y dead-letter queue; rate limiting por tenant y por buzón en Redis.",
      "Webhooks de salida firmados con HMAC y SDK en TypeScript generado desde OpenAPI.",
      "Observabilidad con OpenTelemetry, pruebas de carga con k6 y pruebas de caos (matar un worker sin perder eventos).",
    ],
    roadmap: [
      { label: "OAuth + bóveda de tokens + calendario de Google", done: false },
      { label: "Microsoft Graph + API unificada", done: false },
      { label: "Push en tiempo real + delta sync + workers", done: false },
      { label: "Webhooks de salida + SDK en TypeScript", done: false },
      { label: "Observabilidad, carga y caos", done: false },
    ],
    techStack: [
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "AWS SQS", icon: SiAmazonsqs, color: "#FF9900" },
      { name: "Google APIs", icon: SiGoogle, color: "#4285F4" },
      { name: "Microsoft Graph", icon: FaMicrosoft, color: "#00A4EF" },
      { name: "TypeScript SDK", icon: SiNpm, color: "#CB3837" },
      { name: "Terraform", icon: SiTerraform, color: "#844FBA" },
      { name: "OpenTelemetry", icon: SiOpentelemetry, color: "#F5A800" },
      { name: "k6", icon: SiK6, color: "#7D64FF" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ],
    visual: {
      title: "Una API para los calendarios de Google y Microsoft",
      bgColor: "bg-[#1e3a8a]",
      image: "/img/relay/architecture.svg",
    },
  },
  {
    title: "Ledger",
    status: "in-progress",
    description: "Motor de pagos y billeteras con contabilidad de doble entrada, diseñado para que el dinero nunca se pierda ni se duplique, aunque lleguen peticiones repetidas o un proceso se caiga a mitad de camino.",
    features: [
      "Contabilidad de doble entrada: cada transferencia genera débito y crédito y la suma del sistema siempre es cero.",
      "Transferencias con idempotency key y aislamiento SERIALIZABLE o bloqueos ordenados para evitar deadlocks.",
      "Patrón outbox para publicar eventos exactamente cuando la transacción se confirma, y sagas con compensación para operaciones de varios pasos.",
      "Conciliación nocturna que compara saldos contra movimientos y alerta si algo no cuadra; webhooks firmados hacia comercios.",
      "Objetivo de prueba: 10.000 transferencias concurrentes con k6 sin alterar el saldo total del sistema.",
    ],
    roadmap: [
      { label: "Modelo de doble entrada + transferencias idempotentes", done: false },
      { label: "Concurrencia: bloqueos, aislamiento y tests con -race", done: false },
      { label: "Outbox + bus de eventos + sagas", done: false },
      { label: "Conciliación + webhooks a comercios", done: false },
      { label: "Pruebas de carga y de caos", done: false },
    ],
    techStack: [
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "NATS", icon: SiNatsdotio, color: "#27AAE1" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "k6", icon: SiK6, color: "#7D64FF" },
      { name: "OpenTelemetry", icon: SiOpentelemetry, color: "#F5A800" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ],
    visual: {
      title: "Motor de pagos que nunca pierde ni duplica dinero",
      bgColor: "bg-emerald-800",
      image: "/img/ledger/architecture.svg",
    },
  },
];

type LocalizedFields = Pick<Project, "description" | "features" | "roadmap"> & { visualTitle: string };

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
  {
    description: "Unified API for Google and Microsoft calendars and mail: connect an account once, then read, write and receive real-time changes through the same API regardless of the provider.",
    features: [
      "OAuth 2.0 + PKCE against Google and Microsoft Entra, with an encrypted token vault (AES-GCM, envelope encryption) and a refresh worker guarded by a distributed Redis lock.",
      "Real-time changes through Google watch channels and Microsoft Graph subscriptions with automatic renewal; delta sync as a fallback when a webhook is missed.",
      "Go workers on SQS with idempotency, retries with backoff and a dead-letter queue; per-tenant and per-mailbox rate limiting in Redis.",
      "HMAC-signed outbound webhooks and a TypeScript SDK generated from OpenAPI.",
      "Observability with OpenTelemetry, k6 load tests and chaos tests (kill a worker without losing events).",
    ],
    roadmap: [
      { label: "OAuth + token vault + Google Calendar", done: false },
      { label: "Microsoft Graph + unified API", done: false },
      { label: "Real-time push + delta sync + workers", done: false },
      { label: "Outbound webhooks + TypeScript SDK", done: false },
      { label: "Observability, load and chaos testing", done: false },
    ],
    visualTitle: "One API for Google and Microsoft calendars",
  },
  {
    description: "Payments and wallet engine with double-entry accounting, designed so money is never lost or duplicated — even with repeated requests or a process crashing halfway through.",
    features: [
      "Double-entry accounting: every transfer creates a debit and a credit, and the system always sums to zero.",
      "Transfers with idempotency keys and SERIALIZABLE isolation or ordered locks to avoid deadlocks.",
      "Outbox pattern to publish events exactly when the transaction commits, plus sagas with compensation for multi-step operations.",
      "Nightly reconciliation that checks balances against entries and alerts on mismatches; signed webhooks to merchants.",
      "Test goal: 10,000 concurrent transfers with k6 without changing the system's total balance.",
    ],
    roadmap: [
      { label: "Double-entry model + idempotent transfers", done: false },
      { label: "Concurrency: locks, isolation and -race tests", done: false },
      { label: "Outbox + event bus + sagas", done: false },
      { label: "Reconciliation + merchant webhooks", done: false },
      { label: "Load and chaos testing", done: false },
    ],
    visualTitle: "A payments engine that never loses or duplicates money",
  },
];

export const PROJECTS_DATA: Record<Lang, Project[]> = {
  es: PROJECTS_ES,
  en: PROJECTS_ES.map((project, i) => {
    const { visualTitle, ...text } = PROJECTS_EN_TEXT[i];
    return { ...project, ...text, visual: { ...project.visual, title: visualTitle } };
  }),
};
