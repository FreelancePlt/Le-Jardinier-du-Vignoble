"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Garanties", href: "#garanties" },
  { label: "Avis", href: "#avis" },
  { label: "Zone", href: "#zone" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logos/Logo cercle.png"
            alt="Le Jardinier du Vignoble"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-brand-700">
            Le Jardinier du Vignoble
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-earth-800 transition-all duration-200 ease-out hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA + phone */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:0752620818"
            className="flex items-center gap-1.5 text-sm text-earth-600 transition-all duration-200 ease-out hover:text-brand-600"
          >
            <Phone size={16} strokeWidth={2} />
            07 52 62 08 18
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-600"
          >
            Obtenir un devis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-earth-800"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-earth-200 bg-white px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-earth-800 transition-all duration-200 ease-out hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0752620818"
              className="flex items-center gap-1.5 text-sm text-earth-600"
            >
              <Phone size={16} strokeWidth={2} />
              07 52 62 08 18
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-brand-700 px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-600"
            >
              Obtenir un devis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
