"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { useLang } from "@/i18n/LanguageProvider";

export default function NavBar() {
  const { t } = useLang();
  const navItems = [
    { name: t.nav.home, link: "/"  },
    { name: t.nav.projects, link: "/projects" },
    { name: t.nav.experience, link: "/experience" },
    { name: t.nav.about, link: "/about" },
    { name: t.nav.contact, link: "/contact" },
  ];

  return <FloatingNav navItems={navItems} />;
}
