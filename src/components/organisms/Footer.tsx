import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";


export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Left / Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-bold text-white">
                SB
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                Soy Sebastian Betancourt — Software Developer,
                Freelancer, Emprendedor y Solucionador de problemas.
                <br />
                Gracias por visitar mi sitio.
              </p>

              <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300 w-fit">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Disponible para trabajar
              </div>
            </div>
          </div>

          {/* General */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-zinc-500">
              General
            </p>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white">Inicio</a></li>
              <li><a href="/about" className="hover:text-white">Proyectos</a></li>
              <li><a href="/projects" className="hover:text-white">Experiencia</a></li>
              <li><a href="/blog" className="hover:text-white">Educacion</a></li>
              <li><a href="/blog" className="hover:text-white">Sobre Mi</a></li>
            </ul>
          </div>

          {/* Specifics */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-zinc-500">
              Contactame
            </p>
            <ul className="space-y-3 text-sm">
              <li><a href="/guestbook" className="hover:text-white">GitHub</a></li>
              <li><a href="/uses" className="hover:text-white">Linkedin</a></li>
              <li><a href="/bucket-list" className="hover:text-white">Whatsapp</a></li>
              <li><a href="/attribution" className="hover:text-white">Gmail</a></li>
              <li><a href="/attribution" className="hover:text-white">Hoja de Vida</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-zinc-500">
              Más
            </p>
            <ul className="space-y-3 text-sm">
              <li><a href="/contact" className="hover:text-white">Agendar llamada</a></li>
              <li><a href="/links" className="hover:text-white">Links</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacidad</a></li>
              <li><a href="/terms" className="hover:text-white">Términos</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Sebastian Betancourt. Todos los derechos reservados.
          </p>
          
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">
              <FaGithub className="w-4 h-4"></FaGithub>
            </a>
            <a href="/terms" className="hover:text-white">
              <FaLinkedin className="w-4 h-4"></FaLinkedin>
            </a>
            <a href="/terms" className="hover:text-white">
              <FaWhatsappSquare className="w-4 h-4"></FaWhatsappSquare>
            </a>
            <a href="/terms" className="hover:text-white">
              <BiLogoGmail className="w-4 h-4"></BiLogoGmail>
            </a>
            <a href="/terms" className="hover:text-white">
              <IoCall className="w-4 h-4"></IoCall>
            </a>
          </div>

          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white">
              Política de privacidad
            </a>
            <a href="/terms" className="hover:text-white">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
