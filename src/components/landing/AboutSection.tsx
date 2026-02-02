"use client";

import { WobbleCard } from "../ui/wobble-card";

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-900 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Desarrollador de Software que crea productos reales
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Diseño y desarrollo aplicaciones web escalables con un fuerte enfoque en una arquitectura limpia, rendimiento y mantenibilidad a largo plazo. No solo escribo código, sino que pienso en sistemas y productos.
          </p>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/056/254/461/non_2x/colorful-code-display-on-computer-screen-with-dark-background-free-png.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-violet-900 space-y-6">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Stack Tecnologico
        </h2>
        <p className="pt-3">
        <span className="text-neutral-200 font-medium"><strong>FrontEnd</strong></span>{" "}
  Next.js, React, TypeScript, UI Motion
  <br />

  <span className="text-neutral-200 font-medium"><strong>Backend</strong></span>{" "}
  Node.js, Python (Django, FastAPI), REST APIs, Auth
  <br />

  <span className="text-neutral-200 font-medium"><strong>Data & Automatizacion</strong></span>{" "}
  PostgreSQL, n8n, AI integrations
  <br />

  <span className="text-neutral-200 font-medium"><strong>Arquitectura</strong></span>{" "}
  Clean Architecture, scalable systems
</p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Como pienso como un Desarrollador de Software
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Mi experiencia me permite conectar los negocios con la ingeniería. Me centro en crear soluciones que resuelvan problemas reales, se adapten adecuadamente y sean fáciles de mantener a lo largo del tiempo.
          </p>
        </div>
        <img
          src="https://assets.aceternity.com/linear-demo.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
