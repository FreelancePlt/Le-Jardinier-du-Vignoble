"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const faqs = [
  {
    question: "Quels sont précisément les travaux d\u2019entretien éligibles aux 50 % de crédit d\u2019impôt ?",
    answer:
      "La quasi-totalité des tâches d\u2019entretien courant de votre jardin sont couvertes par le dispositif « Service à la Personne ». Cela inclut la tonte de pelouse, le débroussaillage, le désherbage manuel, la scarification et le ramassage des feuilles mortes. La taille de vos haies, de vos arbustes et de vos arbres fruitiers (réalisée à hauteur d\u2019homme) est également totalement éligible. Enfin, le nettoyage de vos allées et de vos terrasses ainsi que le déneigement de vos abords rentrent aussi dans ce cadre.",
  },
  {
    question: "Si je ne paye pas d\u2019impôts sur le revenu, ai-je quand même droit aux 50 % de réduction ?",
    answer:
      "Absolument. C\u2019est un crédit d\u2019impôt universel. Si vous n\u2019êtes pas imposable, le Trésor Public vous rembourse la moitié de vos dépenses par virement ou chèque l\u2019année suivante. Avec l\u2019Avance Immédiate, vous ne payez de toute façon que la moitié de la facture dès le départ.",
  },
  {
    question: "C\u2019est quoi exactement l\u2019Avance Immédiate de l\u2019Urssaf ?",
    answer:
      "C\u2019est une révolution pour votre budget. Au lieu d\u2019attendre un an pour être remboursé, l\u2019Urssaf déduit votre aide instantanément. Si ma prestation coûte 100 €, vous ne réglez que 50 €. C\u2019est l\u2019État qui me verse directement le complément.",
  },
  {
    question: "Dois-je m\u2019occuper de déclarer mon jardinier ?",
    answer:
      "Non, vous n\u2019êtes pas l\u2019employeur. Je suis un prestataire professionnel agréé « Service à la Personne ». Je m\u2019occupe de toutes les déclarations et de vous fournir l\u2019attestation fiscale annuelle. Vous n\u2019avez aucune responsabilité d\u2019employeur.",
  },
  {
    question: "Et si le résultat ne me convient pas ?",
    answer:
      "C\u2019est ici que ma garantie exclusive intervient : Satisfait ou Refait sous 72h. Si un détail nous a échappé, je reviens gratuitement corriger le travail dans les 3 jours. Votre bonheur au jardin est ma priorité absolue.",
  },
  {
    question: "Est-ce qu\u2019un professionnel fait vraiment mieux que moi ?",
    answer:
      "Au-delà du temps gagné, c\u2019est une question de santé pour vos plantes. J\u2019utilise du matériel professionnel (nettoyé et affûté) et des techniques comme le mulching ou la taille raisonnée qui favorisent la repousse et la densité de votre gazon et de vos haies.",
  },
  {
    question: "Dois-je fournir les outils ou l\u2019essence ?",
    answer:
      "Rien du tout. Je viens avec mon propre équipement professionnel thermique ou à batterie. Vous n\u2019avez pas à vous soucier de l\u2019entretien des machines, du stockage ou des consommables.",
  },
  {
    question: "Intervenez-vous pour une seule fois ou faut-il un contrat ?",
    answer:
      "Je m\u2019adapte à votre besoin. Que ce soit pour un « gros coup de propre » ponctuel avant un événement ou pour un entretien régulier à l\u2019année sur Vallet et le Vignoble, vous êtes libre. Pas d\u2019engagement de longue durée caché.",
  },
  {
    question: "Pourquoi choisir Le Jardinier du Vignoble plutôt qu\u2019une grande plateforme nationale ?",
    answer:
      "Parce que je connais notre terre et les saisons de notre région. Je suis votre interlocuteur unique : c\u2019est moi qui fais le devis, et c\u2019est moi qui tiens la tondeuse. Vous savez exactement qui entre chez vous.",
  },
  {
    question: "Y a-t-il des prestations qui ne permettent pas de bénéficier de cet avantage fiscal ?",
    answer:
      "Oui, le crédit d\u2019impôt est réservé aux « petits travaux de jardinage » et exclut les prestations lourdes. Sont donc exclus : les travaux de création paysagère (aménagement de massifs, pose de clôtures ou de terrasses), l\u2019élagage d\u2019arbres nécessitant des cordes ou des harnais, ainsi que la maintenance de l\u2019arrosage automatique. De même, la vente de végétaux (plantes, arbres) ou de matériel n\u2019ouvre pas droit à cet avantage ; seule la main-d\u2019œuvre et le service de jardinage sont déductibles.",
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
        <FadeIn>
          <div className="mb-12 flex items-center justify-center gap-3">
            <HelpCircle size={24} strokeWidth={2} className="text-brand-600" />
            <h2 className="font-fraunces text-2xl font-bold text-earth-900 lg:text-3xl">
              Questions fréquentes
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="flex flex-col" delay={0.1}>
          {faqs.map((item, index) => (
            <StaggerItem
              key={index}
              className={`${index < faqs.length - 1 ? "border-b border-earth-200/50" : ""}`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-5 text-left transition-all duration-200 ease-out"
              >
                <span className="pr-4 text-lg font-medium text-earth-900">
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
                  <p className="mt-1 pb-5 text-base leading-relaxed text-earth-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
