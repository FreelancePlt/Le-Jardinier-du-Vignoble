"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien coûte l'entretien de mon jardin ?",
    answer:
      "Les tarifs dépendent de la surface de votre terrain, des tâches souhaitées et de la fréquence d'intervention. Nous établissons un devis gratuit et personnalisé après une visite ou un échange téléphonique.",
  },
  {
    question: "Est-ce que je peux bénéficier du crédit d'impôt ?",
    answer:
      "Oui, grâce à notre agrément service à la personne, vous bénéficiez de 50 % de crédit d'impôt sur les prestations d'entretien de jardin. Nous vous guidons pour mettre en place l'avance immédiate si vous le souhaitez.",
  },
  {
    question: "Intervenez-vous pour des prestations ponctuelles ?",
    answer:
      "Absolument. Nous proposons aussi bien des contrats d'entretien régulier que des interventions ponctuelles à la demande : tonte, taille de haies, nettoyage de terrasse, etc.",
  },
  {
    question:
      "Quelles sont les tâches incluses dans un entretien régulier ?",
    answer:
      "Un entretien régulier peut inclure la tonte, le désherbage, la taille des haies et arbustes, le soufflage des feuilles et le nettoyage des allées. Le contenu est adapté à vos besoins et à votre jardin.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Remplissez le formulaire en bas de page ou appelez-nous directement au 07 52 62 08 18. Nous vous répondons dans la journée par téléphone et sous 48h par email avec une proposition détaillée.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        {/* Titre */}
        <div className="mb-12 flex items-center gap-3">
          <HelpCircle size={24} strokeWidth={2} className="text-brand-600" />
          <h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
            Questions fréquentes
          </h2>
        </div>

        {/* Accordéon */}
        <div className="flex flex-col divide-y divide-earth-200">
          {faqs.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-5 text-left transition-all duration-200 ease-out"
              >
                <span className="font-semibold text-earth-900 pr-4">
                  {item.question}
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
                  <p className="pb-5 leading-relaxed text-earth-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
