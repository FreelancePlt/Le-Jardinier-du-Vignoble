import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

const montages = [
  {
    src: "/montage-avant-apres/Tonte de pelouse.png",
    alt: "Avant/après tonte de pelouse",
    caption: "Tonte de pelouse — Vallet",
  },
  {
    src: "/montage-avant-apres/Desherbage d_allée.png",
    alt: "Avant/après désherbage d'allée",
    caption: "Désherbage d'allée — Vignoble Nantais",
  },
  {
    src: "/montage-avant-apres/Nettoyage de Pavés.png",
    alt: "Avant/après nettoyage de pavés",
    caption: "Nettoyage de pavés — Clisson",
  },
];

export default function AvantApres() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Titre */}
        <div className="mb-12 flex items-center gap-3">
          <ArrowLeftRight
            size={24}
            strokeWidth={2}
            className="text-brand-600"
          />
          <h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
            Nos résultats en images
          </h2>
        </div>

        {/* Grille de montages */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {montages.map((montage, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src={montage.src}
                  alt={montage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="bg-white px-4 py-3 text-sm text-earth-600">
                {montage.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
