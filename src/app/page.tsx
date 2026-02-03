import HomeComponents from "@/components/landing/Home";
import { AboutSection } from "@/components/landing/AboutSection";
import AboutBento from "@/components/landing/AboutBento";
import SkillsDashboard from "@/components/landing/HomeTools";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      
      <section className="py-40">
        <HomeComponents />
      </section>

      <section className="">
        <AboutSection />
      </section>

      <section className="">
        <AboutBento />
      </section>

      <section className="">
        <SkillsDashboard />
      </section>

    </main>
  );
}
