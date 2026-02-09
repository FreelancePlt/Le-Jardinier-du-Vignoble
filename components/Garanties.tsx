import { ShieldCheck, RefreshCw, BadgePercent, Clock } from "lucide-react";

const garanties = [
  {
    icon: RefreshCw,
    title: "Satisfait ou refait",
    text: "Si le résultat ne correspond pas à vos attentes, nous réintervenons sans frais.",
  },
  {
    icon: BadgePercent,
    title: "Crédit d'impôt clair & immédiat",
    text: "Agrément service à la personne : 50% de crédit d'impôt. Nous vous guidons pour l'avance immédiate.",
  },
  {
    icon: Clock,
    title: "Toujours à l'heure",
    text: "Nous respectons chaque rendez-vous. Un imprévu ? Vous êtes prévenu 24h à l'avance.",
  },
];

export default function Garanties() {
  return (
    <section id="garanties" className="bg-brand-800 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Titre */}
        <div className="mb-12 flex items-center justify-center gap-3">
          <ShieldCheck size={24} strokeWidth={2} className="text-brand-400" />
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Nos garanties pour votre sérénité
          </h2>
        </div>

        {/* Cartes */}
        <div className="grid gap-6 lg:grid-cols-3">
          {garanties.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/5 p-8 text-center"
            >
              <item.icon
                size={32}
                strokeWidth={1.5}
                className="mx-auto mb-4 text-brand-400"
              />
              <h3 className="mb-3 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
