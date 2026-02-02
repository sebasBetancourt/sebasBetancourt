"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";

export default function NavBar() {
  const navItems = [
    { name: "Inicio", link: "/"  },
    { name: "Proyectos", link: "/projects" },
    { name: "Experiencia", link: "/experience" },
    { name: "Educación", link: "/education" },
    { name: "Sobre mí", link: "/about" },
    { name: "Contacto", link: "/contact" },
  ];

  return <FloatingNav navItems={navItems} />;
}
