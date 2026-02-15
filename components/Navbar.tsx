"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "@/components/motion";

const navLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Garanties", href: "#garanties" },
  { label: "Avis", href: "#avis" },
  { label: "Zone", href: "#zone" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-0 z-999 w-full px-4 pt-3 lg:px-6 lg:pt-4">
        <nav className="mx-auto max-w-6xl rounded-2xl border border-earth-200/60 bg-white/65 shadow-sm backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 py-2.5 lg:px-6">
            {/* Logo */}
            <a href="#" className="flex min-w-0 items-center gap-2">
              <Image
                src="/logos/Logo.png"
                alt="Le Jardinier du Vignoble"
                width={36}
                height={36}
                className="shrink-0 rounded-full"
              />
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-bold leading-tight text-brand-700 sm:text-base">
                  Le Jardinier du Vignoble
                </span>
                <span className="hidden text-[11px] text-earth-600 sm:block">
                  propulsé par Permapaysage
                </span>
              </div>
            </a>

            {/* Desktop nav links */}
            <div className="hidden items-center gap-5 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-earth-700 transition-all duration-200 ease-out hover:text-brand-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-600 after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA + phone */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="tel:0752620818"
                className="flex items-center gap-1.5 text-sm text-earth-500 transition-all duration-200 ease-out hover:text-brand-600"
              >
                <Phone size={15} strokeWidth={2} />
                07 52 62 08 18
              </a>
              <a
                href="#contact"
                className="rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm"
              >
                Obtenir un devis
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-earth-800 transition-colors lg:hidden"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-998 bg-brand-900/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 right-4 left-4 z-999 rounded-2xl border border-earth-200/60 bg-white shadow-sm lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-earth-800 transition-all duration-200 ease-out hover:bg-brand-50 hover:text-brand-600"
                >
                  {link.label}
                </a>
              ))}

              <div className="my-2 border-t border-earth-200/50" />

              <a
                href="tel:0752620818"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base text-earth-600 transition-all duration-200 hover:bg-brand-50"
              >
                <Phone size={18} strokeWidth={2} />
                07 52 62 08 18
              </a>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-full bg-brand-700 px-5 py-3 text-center text-base font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-600 active:scale-[0.98]"
              >
                Obtenir un devis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
