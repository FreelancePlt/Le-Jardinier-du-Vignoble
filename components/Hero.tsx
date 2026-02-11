"use client";

import Image from "next/image";
import { ShieldCheck, Phone, ChevronDown } from "lucide-react";
import { motion } from "@/components/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-800">
      {/* Background image */}
      <Image src="/hero.webp" alt="" fill className="object-cover" priority />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-brand-800/85" />

      {/* Grain / noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Entretien de jardin à Vallet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 text-xl font-normal text-white/80 md:text-2xl"
          >
            Un extérieur impeccable, sans stress
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-base leading-relaxed text-white/60"
          >
            Votre jardinier de proximité pour un jardin toujours propre,
            accueillant et facile à vivre.
          </motion.p>

          {/* Badge de réassurance — glass effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
          >
            <ShieldCheck size={18} strokeWidth={2} className="text-brand-400" />
            <span>
              Crédit d&apos;impôt 50 % — Devis gratuit, réponse sous 24h
            </span>
          </motion.div>

          {/* CTA principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-800 shadow-lg transition-all duration-200 ease-out hover:bg-cream hover:shadow-xl"
            >
              Obtenir un devis gratuit
            </a>

            {/* CTA secondaire */}
            <a
              href="tel:0752620818"
              className="flex items-center gap-1.5 text-sm text-white/60 transition-all duration-200 ease-out hover:text-white/90"
            >
              <Phone size={14} strokeWidth={2} />
              ou appelez-nous au 07 52 62 08 18
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown
          size={28}
          strokeWidth={1.5}
          className="animate-gentle-bounce text-white/40"
        />
      </motion.div>
    </section>
  );
}
