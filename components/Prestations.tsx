"use client";

import { useState } from "react";
import { Leaf, ChevronDown, BadgePercent, Wallet } from "lucide-react";

const prestations = [
  {
    title: "Tonte de pelouse & mulching",
    content:
      "Une pelouse soignée et nourrie naturellement grâce au mulching : plus de vie dans le sol, moins de déchets verts à évacuer.",
  },
  {
    title: "Débroussaillage",
    content:
      "Éclaircir, aérer et revitaliser vos espaces verts en toute sécurité, pour redonner lumière et vigueur à votre terrain.",
  },
  {
    title: "Taille de haies, arbustes & fruitiers",
    content:
      "Nous taillons au bon moment pour respecter chaque végétal, encourager la floraison et limiter l'envahissement.",
  },
  {
    title: "Désherbage manuel et écoresponsable",
    content:
      "Éliminer les mauvaises herbes sans produit toxique. Un geste simple, sain et local pour préserver la santé de votre sol.",
  },
  {
    title: "Entretien des massifs vivaces et fleuris",
    content:
      "Entretenir, nettoyer et revitaliser vos massifs pour qu'ils fleurissent durablement et accueillent les insectes utiles.",
  },
  {
    title: "Soufflage & ramassage des feuilles",
    content:
      "Nous valorisons les feuilles en paillage ou compost pour nourrir naturellement vos plantations.",
  },
  {
    title: "Nettoyage des allées, terrasses et surfaces extérieures",
    content:
      "Des extérieurs propres et agréables sans produits chimiques. Un soin durable pour préserver vos surfaces.",
  },
  {
    title: "Scarification",
    content:
      "Aère et régénère votre gazon en profondeur. Élimine la mousse et le feutre pour favoriser un sol vivant et une pelouse dense.",
  },
];

export default function Prestations() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="prestations" className="bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Titre de section */}
        <div className="mb-12 flex items-center gap-3">
          <Leaf size={24} strokeWidth={2} className="text-brand-600" />
          <h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
            Nos prestations d&apos;entretien
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Colonne gauche — Contexte */}
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-earth-800">
              Jardinier à Vallet, nous intervenons aussi à Clisson, Mouzillon,
              Gorges et dans tout le Vignoble Nantais pour l&apos;entretien de
              vos espaces verts.
            </p>

            {/* Badge crédit d'impôt */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent-100 px-4 py-2 text-sm font-medium text-accent-500">
              <BadgePercent size={18} strokeWidth={2} />
              Éligible au crédit d&apos;impôt de 50 %
            </div>

            {/* Modes de règlement */}
            <div className="flex items-start gap-2 text-sm text-earth-600">
              <Wallet
                size={18}
                strokeWidth={2}
                className="mt-0.5 shrink-0 text-brand-600"
              />
              <p>
                <span className="font-medium text-earth-800">
                  Modes de règlement :
                </span>{" "}
                Virement, CB, CESU, E-CESU, avance immédiate
              </p>
            </div>

            {/* CTA vers devis */}
            <a
              href="#contact"
              className="mt-2 inline-block self-start rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-500"
            >
              Demander un devis
            </a>
          </div>

          {/* Colonne droite — Accordéons */}
          <div className="flex flex-col divide-y divide-earth-200">
            {prestations.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between py-4 text-left transition-all duration-200 ease-out"
                >
                  <span className="font-semibold text-earth-900 pr-4">
                    {item.title}
                  </span>
                  <ChevronDown
                    size={20}
                    strokeWidth={2}
                    className={`shrink-0 text-brand-600 transition-transform duration-200 ease-out ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm leading-relaxed text-earth-600">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
