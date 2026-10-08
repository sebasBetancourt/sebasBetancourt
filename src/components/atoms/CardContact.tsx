"use client";

import SocialCard from '@/components/ui/forgeui/social-card';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GiStrikingDiamonds } from "react-icons/gi";
import { CONTACT } from "@/lib/contact";
import { useLang } from "@/i18n/LanguageProvider";

export function SocialCardExample() {
  const { t } = useLang();

  return (
      <SocialCard
        image="/img/icon.png"
        title={t.contact.cardTitle}
        name="Sebastian Betancourt"
        pitch={t.contact.cardPitch}
        connectLabel={t.contact.cardConnect}
        icon={<GiStrikingDiamonds />}
        buttons={[
          {
            label: "Linkedin",
            icon: <FaLinkedin />,
            link: CONTACT.linkedin,
          },
          {
            label: "Github",
            icon: <FaGithub />,
            link: CONTACT.github,
          },
        ]}
      />
  )
}
