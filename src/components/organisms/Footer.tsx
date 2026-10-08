"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { CONTACT, whatsappUrl } from "@/lib/contact";
import { useLang } from "@/i18n/LanguageProvider";

export default function Footer() {
  const [year, setYear] = React.useState<number | string>("");
  const { t } = useLang();
  const whatsapp = whatsappUrl(t.contact.whatsappText);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-zinc-800 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          {/* Left / Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold text-white">
                SB
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                {t.footer.bio}
                <br />
                {t.footer.thanks}
              </p>

               <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300 w-fit">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                {t.footer.available}
              </div>
            </div>
          </div>

           {/* General */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-zinc-500">
              {t.footer.general}
            </p>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white">{t.nav.home}</a></li>
              <li><a href="/projects" className="hover:text-white">{t.nav.projects}</a></li>
              <li><a href="/experience" className="hover:text-white">{t.nav.experience}</a></li>
              <li><a href="/about" className="hover:text-white">{t.nav.about}</a></li>
            </ul>
          </div>

           {/* Contact */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-zinc-500">
              {t.footer.contactMe}
            </p>
            <ul className="space-y-3 text-sm">
              <li><a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></li>
              <li><a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></li>
              <li><a href={whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white">Gmail</a></li>
              <li><a href={CONTACT.cv} target="_blank" rel="noreferrer" className="hover:text-white">{t.footer.cv}</a></li>
            </ul>
          </div>

         </div>

         {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-500 md:flex-row">
          <p>
            © {year} Sebastian Betancourt. {t.footer.rights}
          </p>

          <div className="flex gap-4">
            <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white">
              <FaGithub className="w-4 h-4"></FaGithub>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedin className="w-4 h-4"></FaLinkedin>
            </a>
            <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-white">
              <FaWhatsappSquare className="w-4 h-4"></FaWhatsappSquare>
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label="Gmail" className="hover:text-white">
              <BiLogoGmail className="w-4 h-4"></BiLogoGmail>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
