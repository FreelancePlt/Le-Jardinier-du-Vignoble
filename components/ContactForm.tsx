"use client";

import { useState, FormEvent } from "react";
import {
  Send,
  CheckCircle,
  Clock,
  ShieldCheck,
  Phone,
  BadgePercent,
  Star,
  Quote,
} from "lucide-react";
import { FadeIn } from "@/components/motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
		const [errorMessage, setErrorMessage] = useState("");
		const [form, setForm] = useState({
			prenom: "",
			nom: "",
			email: "",
			telephone: "",
			ville: "",
			besoin: "",
			message: "",
		});

		const handleChange = (
			e: React.ChangeEvent<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>,
		) => {
			setForm({ ...form, [e.target.name]: e.target.value });
		};

		const handleSubmit = async (e: FormEvent) => {
			e.preventDefault();
			setErrorMessage("");
			setIsSubmitting(true);

			try {
				const response = await fetch("https://api.web3forms.com/submit", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify({
						access_key:
							process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
							"779b2d66-e36b-4b2d-8506-2167a62c71a7",
						subject: "Nouvelle demande de devis - Le Jardinier du Vignoble",
						from_name: `${form.prenom} ${form.nom}`.trim(),
						...form,
					}),
				});

				const result = await response.json();

				if (result.success) {
					setSubmitted(true);
				} else {
					setErrorMessage(
						"Une erreur est survenue. Merci de réessayer dans quelques instants.",
					);
				}
			} catch {
				setErrorMessage(
					"Impossible d'envoyer le formulaire pour le moment. Merci de réessayer.",
				);
			} finally {
				setIsSubmitting(false);
			}
		};

		if (submitted) {
			return (
				<section id="contact" className="bg-white py-20 lg:py-28">
					<div className="mx-auto max-w-2xl px-6 text-center">
						<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/15">
							<CheckCircle size={32} strokeWidth={1.5} className="text-success" />
						</div>
						<h2 className="text-2xl font-bold text-earth-900">
							Merci, votre demande a été envoyée !
						</h2>
						<p className="mt-3 text-earth-600">
							Nous vous recontactons sous 24h. En attendant, vous pouvez nous appeler
							directement.
						</p>
						<a
							href="tel:0752620818"
							className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-brand-600"
						>
							<Phone size={18} strokeWidth={2} />
							07 52 62 08 18
						</a>
					</div>
				</section>
			);
		}

		const inputClasses =
			"w-full rounded-lg border border-earth-200 bg-white px-4 py-3 text-earth-800 placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all duration-200";

		return (
			<section id="contact" className="bg-white py-24 lg:py-32">
				<div className="mx-auto max-w-6xl px-6">
					{/* Title centered */}
					<FadeIn>
						<div className="mb-12 text-center lg:mb-16">
							<h2 className="font-fraunces text-3xl font-bold tracking-tight text-earth-900 lg:text-5xl">
								Obtenez votre devis gratuit
							</h2>
							<p className="mx-auto mt-4 max-w-xl text-lg text-earth-600">
								Décrivez votre besoin en 2 minutes. On vous rappelle dans la journée.
							</p>
						</div>
					</FadeIn>

					<div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
						{/* Left — form card */}
						<FadeIn delay={0.1} className="lg:col-span-3">
							<div className="rounded-2xl border border-earth-200/50 bg-white p-7 shadow-sm lg:p-9">
								<form onSubmit={handleSubmit} className="flex flex-col gap-4">
									{/* Prénom / Nom */}
									<div className="grid gap-4 sm:grid-cols-2">
										<div>
											<label
												htmlFor="prenom"
												className="mb-1.5 block text-sm font-medium text-earth-800"
											>
												Prénom
											</label>
											<input
												type="text"
												id="prenom"
												name="prenom"
												autoComplete="given-name"
												required
												value={form.prenom}
												onChange={handleChange}
												className={inputClasses}
												placeholder="Votre prénom"
											/>
										</div>
										<div>
											<label
												htmlFor="nom"
												className="mb-1.5 block text-sm font-medium text-earth-800"
											>
												Nom
											</label>
											<input
												type="text"
												id="nom"
												name="nom"
												autoComplete="family-name"
												required
												value={form.nom}
												onChange={handleChange}
												className={inputClasses}
												placeholder="Votre nom"
											/>
										</div>
									</div>

									{/* Email + Téléphone */}
									<div className="grid gap-4 sm:grid-cols-2">
										<div>
											<label
												htmlFor="email"
												className="mb-1.5 block text-sm font-medium text-earth-800"
											>
												Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												autoComplete="email"
												required
												value={form.email}
												onChange={handleChange}
												className={inputClasses}
												placeholder="votre@email.fr"
											/>
										</div>
										<div>
											<label
												htmlFor="telephone"
												className="mb-1.5 block text-sm font-medium text-earth-800"
											>
												Téléphone
											</label>
											<input
												type="tel"
												id="telephone"
												name="telephone"
												autoComplete="tel"
												required
												value={form.telephone}
												onChange={handleChange}
												className={inputClasses}
												placeholder="06 00 00 00 00"
											/>
										</div>
									</div>

									{/* Ville + Besoin */}
									<div className="grid gap-4 sm:grid-cols-2">
										<div>
											<label
												htmlFor="ville"
												className="mb-1.5 block text-sm font-medium text-earth-800"
											>
												Ville / Code postal
											</label>
											<input
												type="text"
												id="ville"
												name="ville"
												autoComplete="address-level2"
												required
												value={form.ville}
												onChange={handleChange}
												className={inputClasses}
												placeholder="Vallet 44330"
											/>
										</div>
										<div>
											<label
												htmlFor="besoin"
												className="mb-1.5 block text-sm font-medium text-earth-800"
											>
												Besoin principal
											</label>
											<select
												id="besoin"
												name="besoin"
												required
												value={form.besoin}
												onChange={handleChange}
												className={inputClasses}
											>
												<option value="">Sélectionnez</option>
												<option value="tonte">Tonte</option>
												<option value="taille">Taille haies / arbres</option>
												<option value="nettoyage">Nettoyage allées / terrasses</option>
												<option value="entretien-complet">Entretien complet</option>
												<option value="autre">Autre</option>
											</select>
										</div>
									</div>

									{/* Message */}
									<div>
										<label
											htmlFor="message"
											className="mb-1.5 block text-sm font-medium text-earth-800"
										>
											Message{" "}
											<span className="font-normal text-earth-400">(optionnel)</span>
										</label>
										<textarea
											id="message"
											name="message"
											rows={3}
											value={form.message}
											onChange={handleChange}
											className={inputClasses}
											placeholder="Décrivez votre besoin..."
										/>
									</div>

									{/* Submit */}
									<button
										type="submit"
										disabled={isSubmitting}
										className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-brand-700 py-4 text-lg font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm"
									>
										<Send size={18} strokeWidth={2} />
										{isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
									</button>

									{errorMessage && (
										<p className="text-center text-sm text-red-600">{errorMessage}</p>
									)}

									<p className="text-center text-xs text-earth-400">
										Vos données restent confidentielles. Réponse garantie sous 24h.
									</p>
								</form>
							</div>
						</FadeIn>

						{/* Right — reassurance */}
						<FadeIn delay={0.25} className="lg:col-span-2">
							<div className="flex flex-col gap-5">
								{/* Reassurance items */}
								<div className="flex flex-col gap-3">
									<div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100">
											<Clock size={18} strokeWidth={2} className="text-brand-600" />
										</div>
										<div>
											<p className="text-sm font-semibold text-earth-900">
												Réponse sous 24h
											</p>
											<p className="text-xs text-earth-400">
												Par téléphone dans la journée
											</p>
										</div>
									</div>

									<div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100">
											<BadgePercent size={18} strokeWidth={2} className="text-brand-600" />
										</div>
										<div>
											<p className="text-sm font-semibold text-earth-900">
												Crédit d&apos;impôt 50 %
											</p>
											<p className="text-xs text-earth-400">Attestation fiscale incluse</p>
										</div>
									</div>

									<div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
										<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100">
											<ShieldCheck size={18} strokeWidth={2} className="text-brand-600" />
										</div>
										<div>
											<p className="text-sm font-semibold text-earth-900">
												Sans engagement
											</p>
											<p className="text-xs text-earth-400">Devis 100 % gratuit</p>
										</div>
									</div>
								</div>

								{/* Testimonial */}
								<div className="rounded-xl border border-earth-200/50 bg-white p-5 shadow-sm">
									<Quote size={20} strokeWidth={2} className="mb-2 text-brand-400/40" />
									<p className="text-sm italic leading-relaxed text-earth-600">
										&ldquo;Jessy est attentif, patient et très à l&apos;écoute. Je
										recommande vivement.&rdquo;
									</p>
									<div className="mt-3 flex items-center gap-2">
										<div className="flex gap-0.5">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													size={12}
													strokeWidth={0}
													fill="currentColor"
													className="text-star"
												/>
											))}
										</div>
										<span className="text-xs text-earth-400">
											— Claudie E., avis Google
										</span>
									</div>
								</div>

								{/* Phone CTA */}
								<a
									href="tel:0752620818"
									className="group flex items-center gap-4 rounded-xl bg-brand-800 p-5 transition-all duration-200 hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-md"
								>
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors duration-200 group-hover:bg-white/25">
										<Phone size={20} strokeWidth={2} className="text-white" />
									</div>
									<div>
										<p className="text-xs font-medium text-white/60">
											Vous préférez appeler ?
										</p>
										<p className="text-lg font-bold text-white">07 52 62 08 18</p>
									</div>
								</a>
							</div>
						</FadeIn>
					</div>
				</div>
			</section>
		);
}
