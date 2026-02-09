import { ShieldCheck, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-brand-800 py-20 lg:py-28">
      {/* Subtle texture / gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 80%, rgba(74,124,89,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(90,154,106,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
            Entretien de jardin à Vallet
          </h1>

          <p className="mt-4 text-lg text-white/80">
            Un extérieur impeccable, sans stress
          </p>

          <p className="mt-4 text-base leading-relaxed text-white/60">
            Votre jardinier de proximité pour un jardin toujours propre,
            accueillant et facile à vivre.
          </p>

          {/* Badge de réassurance */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600/30 px-4 py-2 text-sm text-white">
            <ShieldCheck size={18} strokeWidth={2} className="text-brand-400" />
            <span>
              Crédit d&apos;impôt 50 % — Devis gratuit, réponse sous 24h
            </span>
          </div>

          {/* CTA principal */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-800 shadow-sm transition-all duration-200 ease-out hover:bg-cream hover:shadow-md"
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
    </section>
  );
}
