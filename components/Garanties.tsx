import { ShieldCheck, RefreshCw, BadgePercent, Clock } from "lucide-react";

const garanties = [
  {
    icon: RefreshCw,
    title: "Satisfait ou refait",
    text: "Si le résultat ne correspond pas à vos attentes, nous réintervenons sans frais.",
  },
  {
    icon: BadgePercent,
    title: "Crédit d\u2019impôt clair & immédiat",
    text: "Agrément service à la personne : 50% de crédit d\u2019impôt. Nous vous guidons pour l\u2019avance immédiate.",
  },
  {
    icon: Clock,
    title: "Toujours à l\u2019heure",
    text: "Nous respectons chaque rendez-vous. Un imprévu ? Vous êtes prévenu 24h à l\u2019avance.",
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
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {garanties.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/[0.07] p-8 text-center backdrop-blur-sm"
            >
              <item.icon
                size={36}
                strokeWidth={1.5}
                className="mx-auto mb-4 text-brand-300"
              />
              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/75">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
