"use client";

import React, { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { FaFileDownload, FaTimes } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/contact";
import { useLang } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/dictionaries";

// Botón que abre un selector de idioma antes de descargar la hoja de vida (EN / ES)
export function CvDownload({ className, children }: { className?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={cn("cursor-pointer", className)}>
        {children}
      </button>
      <CvLanguageDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function CvLanguageDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang, t } = useLang();
  const titleId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // El idioma con el que el visitante navega aparece primero
  const options: { code: Lang; label: string }[] = [
    { code: "en", label: t.contact.cvEnglish },
    { code: "es", label: t.contact.cvSpanish },
  ].sort((a, b) => Number(b.code === lang) - Number(a.code === lang)) as { code: Lang; label: string }[];

  if (!mounted) return null;

  // Portal al body: así queda por encima de cualquier otro diálogo (por ejemplo, el de contacto)
  return createPortal(
    <AnimatePresence>
      {open && (
          <motion.div
            key="cv-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[7000] bg-black/60 backdrop-blur-sm"
          />
      )}
      {open && (
          <motion.div
            key="cv-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 260 }}
            className="fixed left-1/2 top-1/2 z-[7001] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="text-2xl font-instrument text-white">
                  {t.contact.cvDialogTitle}
                </h2>
                <p className="mt-1 text-sm text-neutral-400">{t.contact.cvDialogSubtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.contact.cvClose}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <FaTimes className="h-3 w-3" />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {options.map(({ code, label }, i) => (
                <a
                  key={code}
                  href={CONTACT.cv[code]}
                  download
                  onClick={onClose}
                  className={cn(
                    "group flex items-center justify-between rounded-xl border px-4 py-3 transition-colors",
                    i === 0
                      ? "border-white bg-white text-black hover:bg-neutral-200"
                      : "border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06]",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase text-neutral-500">
                      {code}
                    </span>
                    <span className="font-medium">{label}</span>
                  </span>
                  <span className="flex items-center gap-2 text-xs opacity-70">
                    PDF <FaFileDownload className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
