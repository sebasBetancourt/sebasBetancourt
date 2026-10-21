import { IconType } from "react-icons";
import {
  SiTailwindcss, SiReact, SiVite, SiFastify, SiTypescript, SiMongodb,
  SiZod, SiJsonwebtokens, SiSwagger, SiVitest, SiDocker, SiReactrouter,
  SiGo, SiPostgresql, SiRedis, SiAmazonsqs, SiTerraform, SiOpentelemetry,
  SiGoogle, SiNpm, SiNatsdotio, SiK6, SiGithubactions, SiOpenapiinitiative
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
    status: "live",
    description: "API open source en Go que unifica Google Calendar y Outlook: tus usuarios conectan su cuenta una vez y Relay maneja OAuth, guarda los tokens cifrados, los refresca solo y devuelve los eventos en un mismo formato, sea cual sea el proveedor. Publicada como v0.1.0.",
    features: [
      "OAuth 2.0 con PKCE para Google y Microsoft Entra, con state de un solo uso que vence a los 10 minutos y verificación de scopes en el callback.",
      "Bóveda de tokens con AES-256-GCM y AAD: cada token queda atado a su tenant, su cuenta y su columna; la clave nunca toca la base de datos.",
      "API keys por tenant (rly_live_ / rly_test_ con checksum): solo se guarda el hash, el 401 es idéntico para cualquier error y la llave nunca se loguea.",
      "API de eventos unificada con refresh silencioso, rotación del refresh token segura entre réplicas (lock de fila en Postgres), zonas de Windows a IANA y paginación neutral contra SSRF.",
      "170 tests, incluida una suite e2e contra Google y Microsoft falsos con estado; release con GoReleaser, imagen en GHCR, govulncheck, Dependabot y OpenAPI 3.1.",
    ],
    roadmap: [
      { label: "Google: OAuth, bóveda de tokens y eventos", done: true },
      { label: "Microsoft Graph + API unificada (v0.1.0)", done: true },
      { label: "Cambios en tiempo real + delta sync", done: false },
      { label: "Webhooks de salida + SDK en TypeScript", done: false },
      { label: "Observabilidad y pruebas de carga", done: false },
    ],
    techStack: [
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "OAuth 2.0", icon: SiGoogle, color: "#4285F4" },
      { name: "Microsoft Graph", icon: FaMicrosoft, color: "#00A4EF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "GoReleaser", icon: SiGo, color: "#00ADD8" },
      { name: "OpenAPI", icon: SiOpenapiinitiative, color: "#6BA539" },
    ],
    visual: {
      title: "Una API para los calendarios de Google y Outlook",
      bgColor: "bg-[#1e3a8a]",
      image: "/img/relay/architecture.svg",
    },
    links: {
      repo: "https://github.com/sebasBetancourt/Relay",
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
    description: "Open source Go API that unifies Google Calendar and Outlook: your users connect their account once and Relay handles OAuth, keeps their tokens encrypted and fresh, and returns events in a single shape, whatever the provider. Released as v0.1.0.",
    features: [
      "OAuth 2.0 with PKCE for Google and Microsoft Entra, with a single-use state that expires after 10 minutes and scope checks on the callback.",
      "Token vault with AES-256-GCM and AAD: every token is bound to its tenant, account and column; the key never touches the database.",
      "Per-tenant API keys (rly_live_ / rly_test_ with checksum): only the hash is stored, the 401 is identical for every failure and keys are never logged.",
      "Unified events API with silent refresh, refresh-token rotation that is safe across replicas (Postgres row lock), Windows-to-IANA time zones and SSRF-safe provider-neutral pagination.",
      "170 tests, including an e2e suite against stateful fake Google and Microsoft servers; releases with GoReleaser, a GHCR image, govulncheck, Dependabot and OpenAPI 3.1.",
    ],
    roadmap: [
      { label: "Google: OAuth, token vault and events", done: true },
      { label: "Microsoft Graph + unified API (v0.1.0)", done: true },
      { label: "Real-time changes + delta sync", done: false },
      { label: "Outbound webhooks + TypeScript SDK", done: false },
      { label: "Observability and load testing", done: false },
    ],
    visualTitle: "One API for Google and Outlook calendars",
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
