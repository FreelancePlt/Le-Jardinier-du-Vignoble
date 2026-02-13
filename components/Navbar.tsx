"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "@/components/motion";

const navLinks = [
  { label: "Prestations", href: "#prestations" },
  { label: "Garanties", href: "#garanties" },
  { label: "Avis", href: "#avis" },
  { label: "Zone", href: "#zone" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
			<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 shadow-sm">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
					{/* Logo */}
					<a href="#" className="flex items-center gap-2">
						<Image
							src="/logos/Logo.png"
							alt="Le Jardinier du Vignoble"
							width={40}
							height={40}
							className="rounded-full"
						/>
						<div className="flex flex-col">
							<span className="text-lg font-bold leading-tight text-brand-700">
								Le Jardinier du Vignoble
							</span>
							<span className="text-xs text-earth-400">propulsé par Permapaysage</span>
						</div>
					</a>

					{/* Desktop nav links */}
					<div className="hidden items-center gap-6 lg:flex">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="relative text-sm font-medium text-earth-800 transition-all duration-200 ease-out hover:text-brand-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-600 after:transition-all after:duration-200 hover:after:w-full"
							>
								{link.label}
							</a>
						))}
					</div>

					{/* Desktop CTA + phone */}
					<div className="hidden items-center gap-4 lg:flex">
						<a
							href="tel:0752620818"
							className="flex items-center gap-1.5 text-sm text-earth-600 transition-all duration-200 ease-out hover:text-brand-600"
						>
							<Phone size={16} strokeWidth={2} />
							07 52 62 08 18
						</a>
						<a
							href="#contact"
							className="rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm"
						>
							Obtenir un devis
						</a>
					</div>

					{/* Mobile hamburger */}
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="lg:hidden text-earth-800"
						aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
					>
						{mobileOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile menu */}
				<AnimatePresence>
					{mobileOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.25, ease: "easeOut" }}
							className="overflow-hidden border-t border-earth-200 bg-white lg:hidden"
						>
							<div className="flex flex-col gap-4 px-6 pb-6 pt-4">
								{navLinks.map((link) => (
									<a
										key={link.href}
										href={link.href}
										onClick={() => setMobileOpen(false)}
										className="text-sm font-medium text-earth-800 transition-all duration-200 ease-out hover:text-brand-600"
									>
										{link.label}
									</a>
								))}
								<a
									href="tel:0752620818"
									className="flex items-center gap-1.5 text-sm text-earth-600"
								>
									<Phone size={16} strokeWidth={2} />
									07 52 62 08 18
								</a>
								<a
									href="#contact"
									onClick={() => setMobileOpen(false)}
									className="rounded-full bg-brand-700 px-5 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-600 active:scale-[0.98]"
								>
									Obtenir un devis
								</a>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		);
}
