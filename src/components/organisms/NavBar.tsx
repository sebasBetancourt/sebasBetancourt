"use client";

import { House, FolderKanban, BriefcaseBusiness, User, Mail } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { useLang } from "@/i18n/LanguageProvider";

export default function NavBar() {
  const { t } = useLang();
  const navItems = [
    { name: t.nav.home, link: "/", icon: House },
    { name: t.nav.projects, link: "/projects", icon: FolderKanban },
    { name: t.nav.experience, link: "/experience", icon: BriefcaseBusiness },
    { name: t.nav.about, link: "/about", icon: User },
    { name: t.nav.contact, link: "/contact", icon: Mail },
  ];

  return <FloatingNav navItems={navItems} />;
}
