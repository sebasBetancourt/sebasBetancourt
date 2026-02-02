import SocialCard from '@/components/ui/forgeui/social-card';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GiStrikingDiamonds } from "react-icons/gi";

export function SocialCardExample() {

  return (
      <SocialCard
        image="/img/icon.png"
        title="Contactame"
        name="Sebastian Betancourt"
        pitch="Explora mis proyectos, y conecta conmigo."
        icon={<GiStrikingDiamonds />}
        buttons={[
          {
            label: "Linkedin",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/sebastian-betancourt-605654293",
          },
          {
            label: "Github",
            icon: <FaGithub />,
            link: "https://github.com/sebasBetancourt",
          },
        ]}
      />
  )
}
