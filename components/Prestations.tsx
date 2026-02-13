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
  MessageSquare,
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
    title: "Tonte de pelouse & mulching",
    description:
      "Un gazon toujours net, dense et naturellement nourri grâce au mulching. Vous n\u2019avez qu\u2019à en profiter.",
  },
  {
    icon: TreePine,
    title: "Débroussaillage",
    description:
      "On redonne forme à vos espaces envahis. Terrains, talus, sous-bois — tout redevient propre et accessible.",
  },
  {
    icon: Trees,
    title: "Taille de haies, arbustes & fruitiers",
    description:
      "Des haies nettes, des arbustes en pleine santé. On taille au bon moment pour respecter chaque végétal.",
  },
  {
    icon: Sprout,
    title: "Désherbage manuel et écoresponsable",
    description:
      "Zéro produit chimique, que du travail manuel. Votre jardin reste sain pour vos enfants, vos animaux et la biodiversité.",
  },
  {
    icon: Flower2,
    title: "Entretien des massifs vivaces et fleuris",
    description:
      "Des massifs colorés et soignés à chaque saison. On s\u2019en occupe pour que vous n\u2019ayez qu\u2019à admirer.",
  },
  {
    icon: Wind,
    title: "Soufflage & ramassage des feuilles",
    description:
      "L\u2019automne est beau, les feuilles mortes moins. On s\u2019en charge pour garder vos allées et pelouses impeccables.",
  },
  {
    icon: Droplets,
    title: "Nettoyage des allées, terrasses et surfaces extérieures",
    description:
      "Allées, terrasses, murets — on leur redonne leur éclat. Haute pression ou nettoyage manuel selon le support.",
  },
  {
    icon: Grid3x3,
    title: "Scarification",
    description:
      "Le secret d\u2019un gazon qui reverdit vite au printemps. La scarification aère le sol et relance la pousse.",
  },
];

export default function Prestations() {
  return (
			<section id="prestations" className="bg-brand-50 py-20 lg:py-28">
				<div className="mx-auto max-w-6xl px-6">
					<FadeIn>
						<div className="mx-auto max-w-2xl text-center">
							<div className="mb-4 flex items-center justify-center gap-3">
								<Leaf size={24} strokeWidth={2} className="text-brand-600" />
								<h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
									Tout ce dont votre jardin a besoin
								</h2>
							</div>

							<p className="text-lg leading-relaxed text-earth-600">
								Des prestations complètes, adaptées à chaque saison et chaque terrain.
								Nous intervenons à Vallet, Clisson, Mouzillon, Gorges et dans tout le
								Vignoble Nantais.
							</p>

							<div className="mt-6 flex flex-wrap justify-center gap-3">
								<span className="inline-flex items-center gap-2 rounded-full border border-brand-600/20 bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-600">
									<BadgePercent size={16} strokeWidth={2} />
									Éligible au crédit d&apos;impôt de 50 %
								</span>
								<span className="inline-flex items-center gap-2 rounded-full border border-brand-800/10 bg-brand-800/5 px-4 py-1.5 text-sm text-earth-800">
									<Wallet size={16} strokeWidth={2} />
									Virement, CB, CESU, E-CESU, avance immédiate
								</span>
							</div>
						</div>
					</FadeIn>

					<StaggerContainer
						className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
						delay={0.15}
					>
						{services.map((service) => {
							const Icon = service.icon;
							return (
								<StaggerItem key={service.title} className="h-full">
									<div className="h-full cursor-default rounded-xl border border-cream bg-white p-6 transition-all duration-200 hover:border-brand-600/30 hover:shadow-md hover:-translate-y-1">
										<Icon size={24} strokeWidth={2} className="mb-3 text-brand-600" />
										<h3 className="text-lg font-semibold text-earth-900">
											{service.title}
										</h3>
										<p className="mt-2 text-sm leading-relaxed text-earth-600">
											{service.description}
										</p>
									</div>
								</StaggerItem>
							);
						})}

						<StaggerItem className="h-full">
							<a
								href="#contact"
								className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-brand-600/50 bg-brand-50 p-6 text-center transition-all duration-200 hover:border-brand-600 hover:bg-brand-100 hover:-translate-y-1"
							>
								<MessageSquare
									size={24}
									strokeWidth={2}
									className="mb-3 text-brand-600"
								/>
								<h3 className="text-lg font-semibold text-earth-900">
									Un autre besoin ?
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-earth-600">
									Décrivez-nous votre projet, on trouve la solution adaptée à votre
									jardin.
								</p>
							</a>
						</StaggerItem>
					</StaggerContainer>
				</div>
			</section>
		);
}
