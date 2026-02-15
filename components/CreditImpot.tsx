import Image from "next/image";
import { BadgePercent, FileText, Zap, Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

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
					<h2 className="font-fraunces text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
						Votre jardinier à moitié prix : Un droit pour TOUS les particuliers
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
						Que vous soyez imposable ou non, l&apos;État finance 50 % de
						l&apos;entretien de votre jardin. C&apos;est simple, automatique, et nous
						gérons tout pour vous en moins de 5 minutes.
					</p>

					<div className="mt-8 flex flex-wrap items-stretch justify-center gap-4">
						<div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm">
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
						<div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm">
							<Image
								src="/logos/unipros.png"
								alt="Membre UNIPROS"
								width={48}
								height={48}
								className="shrink-0"
							/>
							<span className="text-sm font-medium text-white/90">Membre UNIPROS</span>
						</div>
						<div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-sm">
							<Image
								src="/logos/urssaf.png"
								alt="Partenaire URSSAF"
								width={48}
								height={48}
								className="shrink-0"
							/>
							<span className="text-sm font-medium text-white/90">
								Partenaire URSSAF
							</span>
						</div>
					</div>
				</FadeIn>

				<StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2" delay={0.15}>
					{/* Bloc A — Le Remboursement Annuel */}
					<StaggerItem className="h-full">
						<div className="h-full rounded-xl border border-white/15 bg-white/10 p-8 text-left backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.14]">
							<FileText size={28} strokeWidth={1.5} className="mb-4 text-brand-300" />
							<h3 className="font-fraunces mb-2 text-lg font-semibold text-white">
								Le Remboursement Annuel
							</h3>
							<p className="text-sm leading-relaxed text-white/75">
								Vous réglez 100 % de la prestation par chèque, CB ou virement.
								L&apos;année suivante, les impôts vous déduisent ou vous remboursent 50
								% de la somme. Idéal pour votre épargne.
							</p>
						</div>
					</StaggerItem>

					{/* Bloc B — Le Paiement Instantané Urssaf (CONSEILLÉ) */}
					<StaggerItem className="h-full">
						<div className="relative h-full rounded-xl border-2 border-brand-300 bg-white/15 p-8 text-left backdrop-blur-sm transition-all duration-200 hover:bg-white/20">
							<span className="absolute -top-3 right-4 rounded-full bg-brand-300 px-3 py-1 text-xs font-semibold text-brand-900">
								Recommandé
							</span>
							<Zap size={28} strokeWidth={1.5} className="mb-4 text-brand-300" />
							<h3 className="font-fraunces mb-2 text-lg font-semibold text-white">
								Le Paiement Instantané Urssaf
							</h3>
							<p className="text-sm leading-relaxed text-white/75">
								Ne payez que 50 % dès la facture ! Grâce à ce service gratuit de
								l&apos;Urssaf, l&apos;avantage fiscal est déduit en temps réel. Zéro
								avance de trésorerie, vous ne réglez que votre reste à charge.
							</p>
						</div>
					</StaggerItem>
				</StaggerContainer>

				<FadeIn delay={0.3}>
					{/* Exemple chiffré visible */}
					<div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3">
						<Star size={18} strokeWidth={2} className="text-star" />
						<span className="text-md lg:text-lg font-semibold text-white">
							Pour 200 €, vous ne payez que 100 €
						</span>
					</div>

					<div className="mt-8">
						<a
							href="#contact"
							className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand-800 transition-all duration-200 ease-out hover:bg-cream hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
						>
							Activer mes 50 % de réductions
						</a>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
