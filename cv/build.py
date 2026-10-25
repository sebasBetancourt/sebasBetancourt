#!/usr/bin/env python3
"""Genera la CV en inglés y español (HTML -> PDF con Google Chrome headless).

Uso:  python3 cv/build.py
Salida: cv/out/CV-Sebastian-Betancourt-EN.pdf y cv/out/CV-Sebastian-Betancourt-ES.pdf
Para cambiar el contenido, edita CONTENT; el diseño está en template.html.

Confidencialidad: la experiencia se describe en términos generales (tipo de trabajo,
conceptos y tecnologías), sin nombres de clientes, proveedores ni métricas internas.
"""

import html
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "out"

CONTACT = {
    "name": "Sebastián Betancourt",
    "location": {"en": "Bucaramanga, Colombia · Remote (UTC−5)", "es": "Bucaramanga, Colombia · Remoto (UTC−5)"},
    "email": "s3basbetan@gmail.com",
    "phone": "+57 302 434 1150",
    "linkedin": "linkedin.com/in/sebastian-betancourt-605654293",
    "github": "github.com/sebasBetancourt",
    "portfolio": "sebas-betancourt.vercel.app",
    "photo": "photo.jpg",
}

CONTENT = {
    "en": {
        "lang": "en",
        "title": "Software Developer · Integrations & Backend",
        "headings": {
            "experience": "Professional Experience",
            "projects": "Projects",
            "competencies": "Core Competencies",
            "skills": "Additional Skills",
            "education": "Education",
        },
        "summary": (
            "Software developer specialized in integrations and backend systems. I design scalable, maintainable "
            "services with Clean Architecture and SOLID principles, and connect products to third-party platforms "
            "through REST APIs, webhooks and OAuth 2.0. Experienced across the full lifecycle: architecture, data "
            "modeling, testing, deployment and production support, including AI agents and automation."
        ),
        "experience": [
            {
                "company": "Adeptos AI",
                "type": "Startup",
                "role": "Software Developer · AI & Integrations",
                "where": "Remote",
                "when": "Apr 2026 – Oct 2026",
                "bullets": [
                    "Designed and built integrations between SaaS platforms and third-party services using REST APIs, webhooks and OAuth 2.0, with real-time and two-way data synchronization.",
                    "Developed AI agents and MCP (Model Context Protocol) servers to automate business workflows, with schema validation and per-tenant credential isolation.",
                    "Built backend services in Go and TypeScript on PostgreSQL and Redis, applying idempotency, distributed rate limiting and concurrency control across replicas.",
                    "Diagnosed and resolved production incidents through root-cause analysis; containerized and deployed services with Docker.",
                ],
            },
            {
                "company": "Colectivo Waiwa SAS",
                "type": "SaaS Platform",
                "role": "Software Developer",
                "where": "Bucaramanga, Colombia · Hybrid",
                "when": "Jan 2026 – Present",
                "bullets": [
                    "Built scalable backend modules with Node.js, Fastify and TypeScript following Clean Architecture and SOLID.",
                    "Integrated the platform with external services (distribution channels and electronic invoicing) through APIs and webhooks, handling data synchronization and retries.",
                    "Modeled relational data in PostgreSQL with transactions and protection against SQL injection; documented APIs with OpenAPI.",
                    "Built user interfaces in React and Next.js, deployed with Docker on Linux servers and worked in agile sprints with Git and Jira.",
                ],
            },
            {
                "company": "IASD Norte Bucaramanga",
                "type": "Volunteer",
                "role": "Software Developer",
                "where": "Bucaramanga, Colombia",
                "when": "Dec 2025 – Present",
                "bullets": [
                    "Built and maintain the organization's official website with Next.js, TypeScript and Tailwind.",
                ],
            },
        ],
        "projects": [
            {
                "name": "Relay",
                "kind": "Open source · Go",
                "link": "github.com/sebasBetancourt/Relay",
                "text": "One API for multiple providers, starting with calendars (Google Calendar and Outlook): OAuth 2.0 + PKCE, AES-256-GCM token encryption, replica-safe token refresh, end-to-end tests and automated CI/CD releases.",
            },
            {
                "name": "PelixFlix",
                "kind": "Full stack · TypeScript",
                "link": "streaming-psi-olive.vercel.app",
                "text": "Streaming platform with ~10,000 titles: layered Fastify API, JWT authentication, rate limiting, catalog synchronization with locking and dry-run mode, and 130+ automated tests.",
            },
        ],
        "competencies": [
            ("Architecture & design", "Clean Architecture, SOLID, design patterns, layered design, scalable systems, REST API design"),
            ("Integrations", "OAuth 2.0 / PKCE, webhooks, event-driven flows, two-way sync, idempotency, AI agents / MCP"),
            ("Quality & reliability", "Unit, integration & e2e testing, CI/CD, transactions, concurrency control, rate limiting, OWASP"),
            ("Languages & frameworks", "Go, TypeScript, JavaScript, Python, SQL · Node.js (Fastify, Express), Fiber, GORM, React, Next.js"),
            ("Data & infrastructure", "PostgreSQL, MongoDB, Redis, Docker, Nginx, Linux, GitHub Actions, Git, Jira"),
        ],
        "skills": [],
        "education": [
            ("Unidades Tecnológicas de Santander (UTS)", "B.S. in Artificial Intelligence Engineering", "Bucaramanga, Colombia", "In progress", ""),
            ("CampusLands", "Advanced Programming Bootcamp", "Bucaramanga, Colombia", "2024 – 2025", "Honors: final project recognized for its architecture, design patterns and testing."),
            ("SENA", "Software Development Technician", "Bucaramanga, Colombia", "2023 – 2024", "Honors: outstanding final project of the program."),
        ],
    },
    "es": {
        "lang": "es",
        "title": "Desarrollador de Software · Integraciones y Backend",
        "headings": {
            "experience": "Experiencia Profesional",
            "projects": "Proyectos",
            "competencies": "Competencias",
            "skills": "Skills Adicionales",
            "education": "Formación",
        },
        "summary": (
            "Desarrollador de software especializado en integraciones y sistemas backend. Diseño servicios escalables "
            "y mantenibles con Clean Architecture y principios SOLID, y conecto productos con plataformas externas "
            "mediante APIs REST, webhooks y OAuth 2.0. Experiencia en todo el ciclo: arquitectura, modelado de datos, "
            "pruebas, despliegue y soporte en producción, incluyendo agentes de IA y automatización."
        ),
        "experience": [
            {
                "company": "Adeptos AI",
                "type": "Startup",
                "role": "Desarrollador de Software · IA e Integraciones",
                "where": "Remoto",
                "when": "Abr 2026 – Oct 2026",
                "bullets": [
                    "Diseñé y construí integraciones entre plataformas SaaS y servicios de terceros mediante APIs REST, webhooks y OAuth 2.0, con sincronización de datos en tiempo real y bidireccional.",
                    "Desarrollé agentes de IA y servidores MCP (Model Context Protocol) para automatizar procesos de negocio, con validación de esquemas y aislamiento de credenciales por cliente.",
                    "Construí servicios backend en Go y TypeScript sobre PostgreSQL y Redis, aplicando idempotencia, rate limiting distribuido y control de concurrencia entre réplicas.",
                    "Diagnostiqué y resolví incidentes en producción mediante análisis de causa raíz; contenericé y desplegué servicios con Docker.",
                ],
            },
            {
                "company": "Colectivo Waiwa SAS",
                "type": "Plataforma SaaS",
                "role": "Desarrollador de Software",
                "where": "Bucaramanga, Colombia · Híbrido",
                "when": "Ene 2026 – Actualidad",
                "bullets": [
                    "Diseñé e implementé módulos backend escalables con Node.js, Fastify y TypeScript bajo Clean Architecture y SOLID.",
                    "Integré la plataforma con servicios externos (canales de distribución y facturación electrónica) mediante APIs y webhooks, manejando sincronización de datos y reintentos.",
                    "Modelé datos en PostgreSQL con transacciones y protección contra inyección SQL; documenté APIs con OpenAPI.",
                    "Desarrollé interfaces en React y Next.js, desplegué con Docker en servidores Linux y trabajé en sprints ágiles con Git y Jira.",
                ],
            },
            {
                "company": "IASD Norte Bucaramanga",
                "type": "Voluntariado",
                "role": "Desarrollador de Software",
                "where": "Bucaramanga, Colombia",
                "when": "Dic 2025 – Actualidad",
                "bullets": [
                    "Desarrollé y mantengo el sitio web oficial de la organización con Next.js, TypeScript y Tailwind.",
                ],
            },
        ],
        "projects": [
            {
                "name": "Relay",
                "kind": "Open source · Go",
                "link": "github.com/sebasBetancourt/Relay",
                "text": "Una API para múltiples proveedores, empezando por calendarios (Google Calendar y Outlook): OAuth 2.0 + PKCE, cifrado de tokens AES-256-GCM, refresco de tokens seguro entre réplicas, pruebas end-to-end y releases con CI/CD.",
            },
            {
                "name": "PelixFlix",
                "kind": "Full stack · TypeScript",
                "link": "streaming-psi-olive.vercel.app",
                "text": "Plataforma de streaming con ~10.000 títulos: API en Fastify por capas, autenticación JWT, rate limiting, sincronización del catálogo con candado y modo de prueba, y más de 130 pruebas automatizadas.",
            },
        ],
        "competencies": [
            ("Arquitectura y diseño", "Clean Architecture, SOLID, patrones de diseño, diseño por capas, sistemas escalables, APIs REST"),
            ("Integraciones", "OAuth 2.0 / PKCE, webhooks, eventos, sincronización bidireccional, idempotencia, MCP"),
            ("Calidad y confiabilidad", "Pruebas unitarias, de integración y e2e, CI/CD, transacciones, concurrencia, rate limiting, OWASP"),
            ("Lenguajes y frameworks", "Go, TypeScript, JavaScript, Python, SQL · Node.js (Fastify, Express), Fiber, GORM, React, Next.js"),
            ("Datos e infraestructura", "PostgreSQL, MongoDB, Redis, Docker, Nginx, Linux, GitHub Actions, Git, Jira"),
        ],
        "skills": [],
        "education": [
            ("Unidades Tecnológicas de Santander (UTS)", "Ingeniería en Inteligencia Artificial", "Bucaramanga, Colombia", "En curso", ""),
            ("CampusLands", "Bootcamp de Programación Avanzada", "Bucaramanga, Colombia", "2024 – 2025", "Logro: proyecto final destacado por su arquitectura, patrones de diseño y pruebas."),
            ("SENA", "Técnico en Desarrollo de Software", "Bucaramanga, Colombia", "2023 – 2024", "Logro: proyecto final de ciclo destacado."),
        ],
    },
}


def e(text: str) -> str:
    return html.escape(text, quote=True)


def pairs(items: list[tuple[str, str]]) -> str:
    return "".join(f"<dt>{e(k)}</dt><dd>{e(v)}</dd>" for k, v in items)


def render(c: dict) -> str:
    lang = c["lang"]
    h = c["headings"]
    sep = ' <span class="sep">•</span> '
    contact = sep.join(
        [
            e(CONTACT["location"][lang]),
            e(CONTACT["phone"]),
            f'<a href="mailto:{CONTACT["email"]}">{e(CONTACT["email"])}</a>',
        ]
        + [f'<a href="https://{u}">{e(u)}</a>' for u in (CONTACT["portfolio"], CONTACT["linkedin"], CONTACT["github"])]
    )

    experience = "".join(
        f"""
        <article class="item">
          <div class="row"><span><span class="org">{e(x["company"])}</span> <span class="type">– {e(x["type"])}</span></span><span class="where">{e(x["where"])}</span></div>
          <div class="row"><span>{e(x["role"])}</span><span class="when">{e(x["when"])}</span></div>
          <ul>{"".join(f"<li>{e(b)}</li>" for b in x["bullets"])}</ul>
        </article>"""
        for x in c["experience"]
    )
    projects = "".join(
        f"""
        <article class="item">
          <div class="row"><span><span class="org">{e(p["name"])}</span> <span class="type">– {e(p["kind"])}</span></span>
            <a class="where" href="https://{p["link"]}">{e(p["link"])}</a></div>
          <p class="project-text">{e(p["text"])}</p>
        </article>"""
        for p in c["projects"]
    )
    education = "".join(
        f"""
        <article class="edu">
          <div class="row"><span><span class="org">{e(school)}</span> — {e(degree)}</span><span class="when">{e(when)}</span></div>
          {f'<p class="note">{e(note)}</p>' if note else ""}
        </article>"""
        for school, degree, where, when, note in c["education"]
    )

    replacements = {
        "{{lang}}": lang,
        "{{name}}": e(CONTACT["name"]),
        "{{title}}": e(c["title"]),
        "{{contact}}": contact,
        "{{summary}}": e(c["summary"]),
        "{{h_experience}}": e(h["experience"]),
        "{{experience}}": experience,
        "{{h_projects}}": e(h["projects"]),
        "{{projects}}": projects,
        "{{h_education}}": e(h["education"]),
        "{{education}}": education,
        "{{h_skills}}": e(h["skills"]),
        # Competencias (conceptos) + tecnologías en una sola sección, como la plantilla Harvard
        "{{skills}}": pairs(c["competencies"] + c["skills"]),
    }
    out = (ROOT / "template.html").read_text(encoding="utf-8")
    for key, value in replacements.items():
        out = out.replace(key, value)
    return out


def main() -> None:
    OUT.mkdir(exist_ok=True)
    for code, content in CONTENT.items():
        # El HTML se escribe junto a template.html para que la foto (ruta relativa) cargue
        html_path = ROOT / f".cv-{code}.html"
        pdf_path = OUT / f"CV-Sebastian-Betancourt-{code.upper()}.pdf"
        html_path.write_text(render(content), encoding="utf-8")
        subprocess.run(
            [
                "google-chrome",
                "--headless=new",
                "--disable-gpu",
                "--no-pdf-header-footer",
                "--virtual-time-budget=5000",
                f"--print-to-pdf={pdf_path}",
                html_path.resolve().as_uri(),
            ],
            check=True,
            capture_output=True,
        )
        html_path.unlink()
        print(f"✓ {pdf_path.relative_to(ROOT.parent)}")

        # Copia para el portafolio (botón de descarga) y HV.pdf en español
        public = ROOT.parent / "public" / "cv" / pdf_path.name
        public.parent.mkdir(exist_ok=True)
        shutil.copyfile(pdf_path, public)
        print(f"  → {public.relative_to(ROOT.parent)}")
        if code == "es":
            shutil.copyfile(pdf_path, ROOT.parent / "HV.pdf")


if __name__ == "__main__":
    main()
