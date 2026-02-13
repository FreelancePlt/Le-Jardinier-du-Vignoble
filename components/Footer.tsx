import Image from "next/image";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FadeIn } from "@/components/motion";

const quickLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Garanties", href: "#garanties" },
  { label: "Avis", href: "#avis" },
  { label: "Zone", href: "#zone" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const villes = [
  "Vallet",
  "Clisson",
  "Mouzillon",
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
							{/* Col 1 — Logo */}
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
								<p className="mt-2 text-sm text-white/50">propulsé par Permapaysage</p>
								<p className="mt-4 text-sm leading-relaxed text-white/70">
									Votre service d&apos;entretien de jardin à Vallet et dans le Vignoble
									Nantais.
								</p>
							</div>

							{/* Col 2 — Liens rapides */}
							<div>
								<h3 className="mb-4 text-sm font-semibold text-white/90">
									Liens rapides
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

							{/* Col 3 — Contact */}
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
											href="mailto:contact@permapaysage.fr"
											className="flex items-center gap-2 text-sm text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
										>
											<Mail size={16} strokeWidth={2} />
											contact@permapaysage.fr
										</a>
									</li>
								</ul>
							</div>

							{/* Col 4 — Réseaux sociaux */}
							<div>
								<h3 className="mb-4 text-sm font-semibold text-white/90">
									Suivez-nous
								</h3>
								<div className="flex gap-4">
									<a
										href="#"
										aria-label="Facebook"
										className="text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
									>
										<Facebook size={20} strokeWidth={2} />
									</a>
									<a
										href="#"
										aria-label="Instagram"
										className="text-white/70 transition-all duration-200 ease-out hover:text-brand-400"
									>
										<Instagram size={20} strokeWidth={2} />
									</a>
								</div>
							</div>
						</div>
					</FadeIn>

					{/* Séparateur */}
					<div className="mt-12 border-t border-white/10 pt-6">
						<div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 sm:flex-row">
							<p>Mentions légales · CGV</p>
							<p>Devis gratuit, rapide et sans engagement</p>
						</div>

						<p className="mt-4 text-center text-xs text-white/50">
							© 2025 Le Jardinier du Vignoble — propulsé par Permapaysage
						</p>

						{/* SEO — villes d'intervention */}
						<p className="mt-4 text-center text-xs text-white/30">
							Entretien de jardin : {villes.join(" · ")}
						</p>
					</div>
				</div>
			</footer>
		);
}
