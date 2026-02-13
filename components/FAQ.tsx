"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const faqs = [
  {
    question: "Combien coûte l\u2019entretien de mon jardin ?",
    answer:
      "Chaque jardin est différent. On vous propose un devis personnalisé gratuit après une rapide évaluation de vos besoins — par téléphone ou sur place. Aucun engagement.",
  },
  {
    question: "Est-ce que je peux bénéficier du crédit d\u2019impôt ?",
    answer:
      "Oui ! Notre activité est éligible au service à la personne. Concrètement, vous récupérez 50 % de la facture en crédit d\u2019impôt. Et si vous optez pour l\u2019avance immédiate, vous ne payez que la moitié dès le départ.",
  },
  {
    question: "Intervenez-vous pour des prestations ponctuelles ?",
    answer:
      "Bien sûr. Que ce soit une tonte avant un événement, un gros débroussaillage ou un nettoyage de terrasse, on intervient aussi à la demande, sans contrat.",
  },
  {
    question:
      "Quelles sont les tâches incluses dans un entretien régulier ?",
    answer:
      "Tonte, taille des haies, désherbage, soufflage des feuilles, entretien des massifs — on adapte le programme à votre jardin et à la saison. Tout est compris dans un forfait clair, sans surprise.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Remplissez le formulaire en bas de page ou appelez-nous directement au 07 52 62 08 18. On vous répond dans la journée par téléphone et sous 48h par email avec une proposition détaillée.",
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
							<h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
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
