"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaCalendarAlt, FaArrowLeft, FaChevronRight, FaCopy } from "react-icons/fa";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const email = "sebasbetancourt.dev@gmail.com";
  const phoneNumber = "+573046417789";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hola%20Sebastian,%20me%20gustaría%20hablar%20contigo%20sobre...`;
  const calendarUrl = "https://calendar.app.google/placeholder-booking-page"; // User to replace with real booking link

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[6000] bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[6001] mx-auto max-w-2xl w-full bg-[#0d0d0d] border-t border-x border-white/10 rounded-t-[32px] p-8 shadow-[0_-8px_40px_rgba(0,0,0,0.5)] flex flex-col items-center"
          >
            {/* Grabber */}
            <div className="w-12 h-1.5 bg-white/10 rounded-full mb-8" />

            {/* Header */}
            <div className="w-full flex justify-between items-start mb-10">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-instrument text-white">Hablemos</h2>
                <p className="text-[10px] font-mono text-neutral-500 tracking-[0.2em] uppercase">
                  ABIERTO A PROYECTOS Y COLABORACIONES
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaArrowLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Action Cards */}
            <div className="w-full flex flex-col gap-3 mb-10">
              {/* Message */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group w-full flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-left"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Envíame un mensaje</span>
                  <span className="text-xs text-neutral-500">Respondemos por WhatsApp</span>
                </div>
                <FaChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" />
              </a>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Schedule */}
                <a 
                  href={calendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-left h-32"
                >
                  <FaCalendarAlt className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">Agenda una llamada</span>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">Elige día y hora</span>
                  </div>
                </a>

                {/* Email */}
                <div className="group flex flex-col justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-left h-32 relative">
                  <div className="flex justify-between items-start">
                    <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                      <FaEnvelope className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                    </a>
                    <button 
                      onClick={() => copyToClipboard(email)} 
                      className="text-neutral-600 hover:text-white transition-colors"
                      title="Copiar email"
                    >
                      <FaCopy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">Enviar un email</span>
                    <span className="text-[10px] text-neutral-400 mt-1 truncate">{email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Socials */}
            <div className="flex items-center gap-8 text-neutral-500">
              <a href="https://www.linkedin.com/in/sebastian-betancourt-605654293/" className="hover:text-white transition-colors"><FaLinkedin className="w-5 h-5" /></a>
              <a href="https://github.com/sebasBetancourt" className="hover:text-white transition-colors"><FaGithub className="w-5 h-5" /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaWhatsapp className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
