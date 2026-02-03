import SkillsSection from "../atoms/SkillsSection";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiDocker,
} from "react-icons/si";

const icons = [
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiDocker,
];


export default function HomeTools(){

    return(
        <>
            <div>
                <SkillsSection icons={icons}></SkillsSection>
            </div>
        </>
    );
}