import {
  Leaf,
  BadgePercent,
  Wallet,
  Scissors,
  TreePine,
  Trees,
  Sprout,
  Flower2,
  Wind,
  Droplets,
  Grid3x3,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Scissors,
    title: "Tonte de pelouse en mulching",
    description:
      "Retrouvez le plaisir de marcher pieds nus dans une herbe fraîche chaque samedi, sans jamais sortir la tondeuse. Je m\u2019occupe de tout pour que votre week-end commence dès que vous rentrez chez vous.",
  },
  {
    icon: TreePine,
    title: "Débroussaillage",
    description:
      "Ne laissez plus les ronces envahir votre tranquillité. Je redonne vie à vos espaces oubliés pour que vous retrouviez tout le potentiel de votre terrain, sans le moindre effort.",
  },
  {
    icon: Trees,
    title: "Taille de haies, arbustes & fruitiers",
    description:
      "Évitez la corvée des hauteurs et des évacuations. Je taille au moment idéal pour garantir floraisons et récoltes, vous laissant l\u2019esprit léger et le jardin parfaitement ordonné.",
  },
  {
    icon: Sprout,
    title: "Désherbage manuel et écoresponsable",
    description:
      "Dites adieu aux mauvaises herbes sans culpabilité. Je m\u2019occupe de la propreté de vos sols de manière naturelle, vous offrant le confort d\u2019un extérieur soigné et respectueux de la biodiversité.",
  },
  {
    icon: Flower2,
    title: "Entretien des massifs vivaces et fleuris",
    description:
      "Le bonheur de voir vos fleurs s\u2019épanouir sans avoir à vous soucier de leur entretien. J\u2019assure le suivi saisonnier pour que vos massifs soient un spectacle permanent sous vos fenêtres.",
  },
  {
    icon: Wind,
    title: "Soufflage & ramassage des feuilles",
    description:
      "Retrouvez des allées et une pelouse dégagées en un clin d\u2019œil. Je libère votre jardin de l\u2019étouffement des feuilles mortes pour préserver sa beauté et la sécurité de vos accès.",
  },
  {
    icon: Droplets,
    title: "Nettoyage des allées, terrasses et surfaces extérieures",
    description:
      "Redonnez de l\u2019éclat à vos espaces de vie. Je redonne une seconde jeunesse à vos terrasses pour que vous retrouviez le plaisir de recevoir vos proches en toute sérénité.",
  },
  {
    icon: Grid3x3,
    title: "Scarification",
    description:
      "Offrez une cure de jeunesse à votre pelouse. J\u2019élimine le feutrage qui l\u2019asphyxie pour lui permettre de respirer et de reverdir intensément dès les premiers beaux jours.",
  },
];

export default function Prestations() {
  return (
    <section id="prestations" className="bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center md:text-left">
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <Leaf size={24} strokeWidth={2} className="text-brand-600" />
              <h2 className="font-fraunces text-2xl font-bold italic text-earth-900 lg:text-3xl">
                &laquo;&nbsp;Je prends soin de votre jardin comme si c&apos;était le mien.&nbsp;&raquo;
              </h2>
            </div>

            <p className="text-center text-lg leading-relaxed text-earth-600 md:text-left">
              Un entretien de jardin complet et soigné, adapté à votre terrain et au fil des saisons. Je propose des solutions ponctuelles ou des contrats annuels pour les particuliers de Vallet, Clisson, Gorges, La Chapelle-Heulin… Pour une présence locale et réactive dans tout le Sud-Loire.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/15 px-4 py-1.5 text-sm font-medium text-accent-500">
                <BadgePercent size={16} strokeWidth={2} />
                Éligible au crédit d&apos;impôt de 50 %
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-800/10 bg-brand-800/5 px-4 py-1.5 text-sm text-earth-800">
                <Wallet size={16} strokeWidth={2} />
                Virement, CB, CESU, E-CESU, Chèque, avance immédiate
              </span>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          delay={0.15}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title} className="group h-full">
                <div className="relative h-full overflow-hidden rounded-2xl bg-white p-7 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  {/* Barre latérale gauche animée */}
                  <div className="absolute inset-y-0 left-0 w-1 bg-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                  {/* Icône dans un conteneur organique */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 transition-colors duration-300 group-hover:bg-brand-600">
                    <Icon size={22} strokeWidth={2} className="text-brand-700 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Numéro discret */}
                  <span className="absolute top-5 right-6 font-fraunces text-[40px] font-bold leading-none text-brand-600/6">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-fraunces text-[17px] font-bold text-earth-900">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-earth-600">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}

          {/* Carte CTA */}
          <StaggerItem className="h-full">
            <a
              href="#contact"
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-brand-800 p-7 transition-all duration-300 hover:bg-brand-700 hover:-translate-y-1"
            >
              {/* Déco organique */}
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-brand-600/20" />
              <div className="pointer-events-none absolute -right-2 -bottom-2 h-20 w-20 rounded-full bg-brand-600/15" />

              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <ArrowRight size={22} strokeWidth={2} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <h3 className="font-fraunces text-[17px] font-bold text-white">
                  Un autre besoin ?
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                  Décrivez-nous votre projet, on trouve la solution adaptée à votre jardin.
                </p>
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 transition-colors duration-200 group-hover:text-white">
                Demander un devis
                <ArrowRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
