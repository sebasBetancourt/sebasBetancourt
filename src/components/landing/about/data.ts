import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const ABOUT_DATA = {
  subtitle: "MÁS SOBRE MÍ",
  title: {
    prefix: "Soy Sebastian, un",
    highlight: "ingeniero creativo",
  },
  paragraphs: [
    "Soy Sebastian Betancourt, un desarrollador full-stack proactivo apasionado por crear experiencias web dinámicas. Desde el frontend hasta el backend, me esfuerzo por resolver problemas complejos con código limpio y eficiente.",
    "Mi experiencia abarca React, Next.js y Node.js, y siempre estoy ansioso por aprender más. Creo en la arquitectura limpia y en el desarrollo centrado en el usuario.",
    "Cuando no estoy sumergido en el trabajo, estoy explorando nuevas ideas y manteniéndome curioso. ¡La vida se trata de equilibrio y me encanta abrazar cada parte de ella!",
    "¡Creo en despertar cada día con ganas de marcar la diferencia!",
  ],
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com/in/sebasbetancourt", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/sebasBetancourt", icon: FaGithub },
    { name: "Instagram", url: "https://www.instagram.com/sebasbetan_soft/", icon: FaInstagram },
  ],
  photos: [
    {
      url: "/img/about/cascada.jfif",
      caption: "Naturaleza",
      rotate: -10,
    },
    {
      url: "/img/about/1.jfif",
      caption: "Yo",
      rotate: 0,
    },
    {
      url: "/img/about/DSC_0529.JPG",
      caption: "Mixed Martial Arts",
      rotate: 5,
    },
  ],
};
