import Image from "next/image";
import { ShieldCheck, Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-800">
      {/* Background image */}
      <Image
        src="/photos-entretien/AV 09.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />

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
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Entretien de jardin à Vallet
          </h1>

          <p className="mt-4 text-xl font-normal text-white/80 md:text-2xl">
            Un extérieur impeccable, sans stress
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/60">
            Votre jardinier de proximité pour un jardin toujours propre,
            accueillant et facile à vivre.
          </p>

          {/* Badge de réassurance — glass effect */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            <ShieldCheck size={18} strokeWidth={2} className="text-brand-400" />
            <span>
              Crédit d&apos;impôt 50 % — Devis gratuit, réponse sous 24h
            </span>
          </div>

          {/* CTA principal */}
          <div className="mt-8 flex flex-col items-center gap-4">
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
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <ChevronDown
          size={28}
          strokeWidth={1.5}
          className="animate-gentle-bounce text-white/40"
        />
      </div>
    </section>
  );
}
