import { ProjectsSection } from "@/components/landing/projects/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] border border-white/[0.07] flex items-center justify-center">
      <div
        className="border border-white/10 flex flex-col items-center justify-center w-[70%] px-14"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.03) 10px,
            rgba(255,255,255,0.03) 11px
          )`,
          backgroundColor: "#0a0a0a",
        }}
      >
        <ProjectsSection />
      </div>
    </main>
  );
}
