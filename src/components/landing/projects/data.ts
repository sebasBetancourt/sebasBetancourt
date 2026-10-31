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
    docs?: string;
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
    description: "Una API para el calendario de Google y el de Outlook. La persona conecta su cuenta una vez; a partir de ahí lees, creas, editas y borras sus eventos con la misma llamada, sea cual sea el proveedor. Relay guarda el acceso, cifra los tokens y los mantiene al día.",
    features: [
      "Conexión con OAuth 2.0 y PKCE en Google y en Microsoft, incluidas cuentas de trabajo, escuela y personales. Los tokens quedan cifrados y se renuevan solos.",
      "Lectura y escritura del calendario principal en un solo formato: eventos, series recurrentes y zonas horarias. Reintentar una escritura no la duplica.",
      "Cuando el calendario cambia, Relay recibe el aviso de Google o de Microsoft y aplica solo lo nuevo.",
      "Cada cliente tiene sus propias API keys y su cupo de peticiones. La referencia de la API está publicada y sale del contrato OpenAPI.",
    ],
    techStack: [
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "NATS", icon: SiNatsdotio, color: "#27AAE1" },
      { name: "Google Calendar", icon: SiGoogle, color: "#4285F4" },
      { name: "Microsoft Graph", icon: FaMicrosoft, color: "#00A4EF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "OpenAPI", icon: SiOpenapiinitiative, color: "#6BA539" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ],
    visual: {
      title: "Una API para los calendarios de Google y Outlook",
      bgColor: "bg-[#1e3a8a]",
      image: "/relay.png",
    },
    links: {
      docs: "https://sebasbetancourt.github.io/Relay/",
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
    description: "One API for Google Calendar and Outlook. A person connects their account once; from then on you read, create, edit and delete their events with the same call, whichever provider they use. Relay stores the access, encrypts the tokens and keeps them fresh.",
    features: [
      "Connect with OAuth 2.0 and PKCE on Google and Microsoft, including work, school and personal accounts. Tokens are encrypted and refresh on their own.",
      "Read and write the primary calendar in one shape: single events, recurring series and time zones. Retrying a write does not create a duplicate.",
      "When the calendar changes, Relay gets the notice from Google or Microsoft and applies only what is new.",
      "Each customer gets their own API keys and their own request budget. The API reference is published from the OpenAPI contract.",
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
