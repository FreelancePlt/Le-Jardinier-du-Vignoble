import { Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const avis = [
  {
    name: "Claudie Ebel",
    text: "Premier contrat avec Jessy pour restauration du jardin dont je suis pleinement satisfaite. Jessy est très professionnel, à l\u2019écoute et de bon conseil.",
  },
  {
    name: "Marie Annick Birot",
    text: "Nous avons fait appel à Jessie et à son apprenti pour notre jardin immense. Il a su mettre en valeur nos extérieurs avec un travail soigné et régulier.",
  },
  {
    name: "Alain Durand",
    text: "Nous recommandons fortement cette entreprise, travail bien réalisé, Jessi est super sympa, très professionnel et à l\u2019écoute.",
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
        <FadeIn>
          <div className="mb-12 flex items-center gap-3">
            <Star size={24} strokeWidth={2} className="text-brand-600" />
            <h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
              Ils nous font confiance
            </h2>
          </div>
        </FadeIn>

        {/* Note globale */}
        <FadeIn delay={0.1}>
          <div className="mb-10 flex items-center gap-3">
            <span className="text-3xl font-bold text-earth-900">5.0/5</span>
            <Stars count={5} size={22} />
            <span className="text-sm text-earth-600">
              — 31 avis Google
            </span>
          </div>
        </FadeIn>

        {/* Cartes d'avis */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" delay={0.15}>
          {avis.map((item, index) => (
            <StaggerItem key={index} className="h-full">
              <div className="relative h-full rounded-xl bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
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
                </div>
                {/* Google G logo */}
                <span className="absolute bottom-4 right-4 text-base font-bold text-earth-400/40">
                  G
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
