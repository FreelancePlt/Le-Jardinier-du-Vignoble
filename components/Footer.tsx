"use client";
import Image from "next/image";
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	Facebook,
	Instagram,
	BadgePercent,
	ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/motion";

const quickLinks = [
	{ label: "Prestations SAP", href: "/#prestations" },
	{ label: "Crédit d'impôts", href: "/#credit-impot" },
	{ label: "Zone d'intervention", href: "/#zone" },
	{ label: "Garanties", href: "/#garanties" },
	{ label: "Avis Clients", href: "/#avis" },
	{ label: "Foire Aux Questions", href: "/#faq" },
	{ label: "Contact", href: "/#contact" },
];

const avantagesFiscaux = [
	"-50\u00A0% de crédit d\u2019impôt immédiat",
	"Zéro avance de frais (Service Urssaf)",
	"Plafond annuel : 5\u00A0000\u00A0€",
	"Accessible même si vous n\u2019êtes pas imposable",
];

const villes = [
	"Vallet",
	"Clisson",
	"Gorges",
	"Le Pallet",
	"Le Loroux-Bottereau",
	"Saint-Julien-de-Concelles",
	"Divatte-sur-Loire",
	"Haute-Goulaine",
	"Aigrefeuille-sur-Maine",
	"Gétigné",
	"La Chapelle-Heulin",
	"Le Landreau",
];

export default function Footer() {
	return (
		<footer className="bg-brand-900 pt-16 pb-8">
			<div className="mx-auto max-w-6xl px-6">
				<FadeIn>
					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
						{/* Col 1 — Identité */}
						<div>
							<div className="flex items-center gap-2">
								<Image
									src="/logos/Logo.png"
									alt="Le Jardinier du Vignoble"
									width={36}
									height={36}
									className="rounded-full"
								/>
								<span className="text-base font-bold text-white/90">
									Le Jardinier du Vignoble
								</span>
							</div>
							<a
								href="https://www.permapaysage.com"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-2 inline-block text-sm text-white/50 transition-colors hover:text-brand-400"
							>
								propulsé par Permapaysage
							</a>
							<p className="mt-4 text-sm leading-relaxed text-white/70">
								Jardinier paysagiste basé à Vallet (44330). Interventions rapides dans
								tout le Vignoble Nantais et le Sud-Loire.
							</p>
							{/* Badges */}
							<div className="mt-4 flex flex-wrap items-center gap-3">
								<Image
									src="/logos/unipros.png"
									alt="Membre UNIPROS"
									width={40}
									height={40}
									className="shrink-0"
								/>
								<span className="text-xs text-white/50">Membre UNEP</span>
							</div>
							<a
								href="https://www.permapaysage.com"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 inline-block text-sm text-brand-400 transition-colors hover:text-brand-300"
							>
								www.permapaysage.com
							</a>
						</div>

						{/* Col 2 — Plan du site */}
						<div>
							<h3 className="mb-4 text-sm font-semibold text-white/90">
								Plan du site
							</h3>
							<ul className="flex flex-col gap-2">
								{quickLinks.map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											className="text-sm text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Col 3 — Avantages Fiscaux */}
						<div>
							<h3 className="mb-4 text-sm font-semibold text-white/90">
								Vos Avantages Fiscaux
							</h3>
							<ul className="flex flex-col gap-2.5">
								{avantagesFiscaux.map((item, i) => (
									<li key={i} className="flex items-start gap-2">
										<BadgePercent
											size={14}
											strokeWidth={2}
											className="mt-0.5 shrink-0 text-brand-400"
										/>
										<span className="text-sm leading-snug text-white/70">{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Col 4 — Contact */}
						<div>
							<h3 className="mb-4 text-sm font-semibold text-white/90">Contact</h3>
							<ul className="flex flex-col gap-3">
								<li>
									<a
										href="tel:0752620818"
										className="flex items-center gap-2 text-sm text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
									>
										<Phone size={16} strokeWidth={2} />
										07 52 62 08 18
									</a>
								</li>
								<li>
									<a
										href="mailto:permapaysage.jl@gmail.com"
										className="flex items-center gap-2 text-sm text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
									>
										<Mail size={16} strokeWidth={2} />
										permapaysage.jl@gmail.com
									</a>
								</li>
								<li className="flex items-center gap-2 text-sm text-white/70">
									<MapPin size={16} strokeWidth={2} />
									Vallet (44330)
								</li>
								<li className="flex items-center gap-2 text-sm text-white/70">
									<Clock size={16} strokeWidth={2} />
									Lun - Ven : 8h - 18h
								</li>
							</ul>

							{/* Réseaux sociaux */}
							<div className="mt-5">
								<p className="mb-2 text-xs text-white/50">Nos chantiers en direct</p>
								<div className="flex gap-4">
									<a
										href="https://www.facebook.com/people/Permapaysage/100094192620749/"
										aria-label="Facebook"
										className="text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
									>
										<Facebook size={20} strokeWidth={2} />
									</a>
									<a
										href="https://www.instagram.com/perma.paysage/"
										aria-label="Instagram"
										className="text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
									>
										<Instagram size={20} strokeWidth={2} />
									</a>
									<a
										href="https://www.linkedin.com/company/permapaysage/"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="LinkedIn"
										className="text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
									>
										<svg
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
											<rect width="4" height="12" x="2" y="9" />
											<circle cx="4" cy="4" r="2" />
										</svg>
									</a>
								</div>
							</div>

							{/* CTA */}
							<a
								href="#contact"
								className="mt-5 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-brand-400/40 bg-brand-400/10 px-5 py-2.5 text-sm font-semibold text-brand-300 transition-all duration-200 hover:bg-brand-400/20 hover:text-white"
							>
								Calculer mon reste à payer
								<ArrowRight size={16} strokeWidth={2} />
							</a>
						</div>
					</div>
				</FadeIn>

				{/* Bas de footer */}
				<div className="mt-12 border-t border-white/10 pt-6">
					<div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
						<p>
							© {new Date().getFullYear()} Le Jardinier du Vignoble — propulsé par{" "}
							<a
								href="https://www.permapaysage.com"
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:text-brand-400"
							>
								Permapaysage
							</a>
						</p>
						<p>
							<a
								href="/mentions-legales"
								className="transition-colors hover:text-brand-400"
							>
								Mentions légales
							</a>{" "}
							·{" "}
							<a href="/cgv" className="transition-colors hover:text-brand-400">
								CGV
							</a>
						</p>
					</div>

					{/* SEO — villes d'intervention */}
					<p className="mt-4 text-center text-[11px] text-white/30">
						Entretien de jardin : {villes.join(" · ")}
					</p>
				</div>
			</div>
		</footer>
	);
}
