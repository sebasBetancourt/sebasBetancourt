import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CONTACT } from "@/lib/contact";
import type { Lang } from "@/i18n/dictionaries";

const SOCIALS = [
  { name: "LinkedIn", url: CONTACT.linkedin, icon: FaLinkedin },
  { name: "GitHub", url: CONTACT.github, icon: FaGithub },
  { name: "Instagram", url: CONTACT.instagram, icon: FaInstagram },
];

const PHOTOS = [
  { url: "/img/about/cascada.jfif", rotate: -10, isMe: false },
  { url: "/img/about/1.jfif", rotate: 0, isMe: true },
  { url: "/img/about/DSC_0529.JPG", rotate: 5, isMe: false },
];

const TEXT = {
  en: {
    subtitle: "MORE ABOUT ME",
    title: {
      prefix: "I'm Sebastian, a",
      highlight: "backend-focused developer",
    },
    paragraphs: [
      "I'm Sebastian Betancourt, a software developer who enjoys building reliable backend services, integrations and real-time systems. From the database to the UI, I solve complex problems with clean, efficient code.",
      "I work mainly with Go, Node.js and TypeScript on top of PostgreSQL and Redis, and I'm currently studying AI Engineering at UTS. I believe in clean architecture and in understanding a system before changing it.",
      "When I'm not working, I'm training mixed martial arts, spending time outdoors and staying curious.",
    ],
    captions: ["Nature", "Me", "Mixed Martial Arts"],
  },
  es: {
    subtitle: "MÁS SOBRE MÍ",
    title: {
      prefix: "Soy Sebastian, un",
      highlight: "desarrollador enfocado en backend",
    },
    paragraphs: [
      "Soy Sebastian Betancourt, un desarrollador de software al que le gusta construir servicios backend, integraciones y sistemas en tiempo real confiables. Desde la base de datos hasta la interfaz, resuelvo problemas complejos con código limpio y eficiente.",
      "Trabajo principalmente con Go, Node.js y TypeScript sobre PostgreSQL y Redis, y actualmente estudio Ingeniería en IA en la UTS. Creo en la arquitectura limpia y en entender un sistema antes de cambiarlo.",
      "Cuando no estoy trabajando, entreno artes marciales mixtas, paso tiempo al aire libre y me mantengo curioso.",
    ],
    captions: ["Naturaleza", "Yo", "Artes Marciales Mixtas"],
  },
};

export const ABOUT_DATA = (lang: Lang) => ({
  subtitle: TEXT[lang].subtitle,
  title: TEXT[lang].title,
  paragraphs: TEXT[lang].paragraphs,
  socials: SOCIALS,
  photos: PHOTOS.map((photo, i) => ({ ...photo, caption: TEXT[lang].captions[i] })),
});
