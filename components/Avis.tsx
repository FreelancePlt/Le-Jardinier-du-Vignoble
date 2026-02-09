import { Star } from "lucide-react";

const avis = [
  {
    name: "Marie L.",
    text: "Un travail soigné et régulier. Mon jardin n'a jamais été aussi beau. Je recommande vivement !",
  },
  {
    name: "Philippe D.",
    text: "Très professionnel, ponctuel et à l'écoute. Le résultat est impeccable à chaque passage.",
  },
  {
    name: "Isabelle M.",
    text: "Enfin un jardinier de confiance près de chez moi. Le crédit d'impôt est un vrai plus.",
  },
];

function Stars({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={0}
          fill="currentColor"
          className="text-star"
        />
      ))}
    </div>
  );
}

export default function Avis() {
  return (
    <section id="avis" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Titre */}
        <div className="mb-12 flex items-center gap-3">
          <Star size={24} strokeWidth={2} className="text-brand-600" />
          <h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
            Ce que disent nos clients
          </h2>
        </div>

        {/* Note globale */}
        <div className="mb-10 flex items-center gap-3">
          <span className="text-3xl font-bold text-earth-900">4.8/5</span>
          <Stars count={5} size={22} />
          <span className="text-sm text-earth-600">
            — basé sur les avis Google
          </span>
        </div>

        {/* Cartes d'avis */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {avis.map((item, index) => (
            // {/* [Avis réel à intégrer] */}
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <Stars count={5} size={14} />
              <p className="mt-4 italic leading-relaxed text-earth-800">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p>
                  <span className="font-semibold text-earth-900">
                    {item.name}
                  </span>
                  <span className="ml-2 text-sm text-earth-400">
                    — Avis Google
                  </span>
                </p>
                {/* Google G icon placeholder */}
                <span className="text-xs font-bold text-earth-400">G</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
