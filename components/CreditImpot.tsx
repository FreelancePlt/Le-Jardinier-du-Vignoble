import Image from "next/image";
import { BadgePercent, FileText, Wallet } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const cards = [
  {
    icon: FileText,
    title: "Crédit d\u2019impôt 50 %",
    text: "Récupérez la moitié de chaque facture sous forme de crédit d\u2019impôt. Valable pour la tonte, la taille, le désherbage — toutes nos prestations.",
  },
  {
    icon: Wallet,
    title: "Avance immédiate",
    text: "Pas besoin d\u2019avancer les frais. Avec le dispositif d\u2019avance immédiate, vous ne payez que 50 % dès la facturation. Le reste est directement déduit.",
  },
];

export default function CreditImpot() {
  return (
    <section className="bg-brand-800 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <FadeIn>
          <BadgePercent
            size={40}
            strokeWidth={1.5}
            className="mx-auto mb-6 text-brand-300"
          />
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Vos factures à -50 %
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Grâce à notre agrément « Service à la personne », vous bénéficiez
            automatiquement d&apos;un crédit d&apos;impôt de 50 % sur toutes nos
            prestations.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm border border-white/15">
            <Image
              src="/logos/SAP.png"
              alt="Agrément Service à la Personne"
              width={48}
              height={48}
              className="shrink-0"
            />
            <span className="text-sm font-medium text-white/90">
              Organisme agréé Service à la Personne
            </span>
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-12 grid gap-6 sm:grid-cols-2"
          delay={0.15}
        >
          {cards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <div className="h-full rounded-xl border border-white/15 bg-white/10 p-6 text-left backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.14]">
                <card.icon
                  size={28}
                  strokeWidth={1.5}
                  className="mb-4 text-brand-300"
                />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">
                  {card.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-sm text-white/60">
            Exemple : pour une prestation de 80 €, vous ne payez que 40 €.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand-800 transition-all duration-200 ease-out hover:bg-cream hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            Demander un devis
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
