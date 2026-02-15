"use client";

import Image from "next/image";
import { ShieldCheck, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "@/components/motion";
import { useState, useEffect, useCallback, useRef } from "react";

const heroPhotos = [
	"/photos-entretien/apres/AP 02.jpg",
	"/photos-entretien/apres/AP 03.jpg",
	"/photos-entretien/apres/AP 04.jpg",
	"/photos-entretien/apres/AP 05.jpg",
	"/photos-entretien/apres/AP 08.jpg",
];

const SLIDE_INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % heroPhotos.length);
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();

    const onVisibility = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current);
      } else {
        startTimer();
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [startTimer]);

  useEffect(() => {
    for (let i = 1; i <= 2; i++) {
      const idx = (current + i) % heroPhotos.length;
      const img = new window.Image();
      img.src = heroPhotos[idx];
    }
  }, [current]);

  return (
			<section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-900">
				<AnimatePresence initial={false}>
					<motion.div
						key={current}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.2, ease: "easeInOut" }}
						className="absolute inset-0 animate-ken-burns"
					>
						<Image
							src={heroPhotos[current]}
							alt=""
							fill
							className="object-cover"
							priority={current === 0}
							sizes="100vw"
						/>
					</motion.div>
				</AnimatePresence>

				<div className="pointer-events-none absolute inset-0 bg-brand-900/65" />

				<div
					className="pointer-events-none absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage:
							"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
					}}
				/>

				<div className="relative z-10 mx-auto max-w-6xl px-6">
					<div className="mx-auto max-w-4xl text-center">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							className="font-fraunces text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
							style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
						>
							Reprenez vos week-ends, nous redonnons vie à votre jardin.
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
							className="mt-4 text-xl font-normal text-white/80 md:text-2xl"
						>
							Votre jardinier de proximité à Vallet et dans tout le Vignoble Nantais
						</motion.p>

						{/* VARIANTE PRÉCÉDENTE
          <motion.p className="mt-4 text-xl font-normal text-white/80 md:text-2xl">
            Votre jardinier de confiance à Vallet et dans tout le Vignoble Nantais
          </motion.p>
          */}

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
							className="mt-4 text-base leading-relaxed text-white/60"
						>
							Ne payez que la moitié de vos factures d&apos;entretien. Tonte, taille et
							désherbage : nous gérons tout pour vous, sans aucune avance de
							trésorerie.
						</motion.p>

						{/* VARIANTE PRÉCÉDENTE
          <motion.p className="mt-4 text-base leading-relaxed text-white/60">
            Profitez de votre extérieur sans les contraintes. Tonte, taille, désherbage — on s'occupe de tout, toute l'année.
          </motion.p>
          */}

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
							className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
						>
							<ShieldCheck size={18} strokeWidth={2} className="text-brand-400" />
							<span>Avance immédiate URSSAF — Devis gratuit sous 24h</span>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
							className="mt-8 flex flex-col items-center gap-4"
						>
							<a
								href="#contact"
								className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-brand-800 shadow-lg transition-all duration-200 ease-out hover:bg-cream hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
							>
								Diviser ma facture par 2
							</a>

							<a
								href="tel:0752620818"
								className="flex items-center gap-1.5 text-sm text-white/60 transition-all duration-200 ease-out hover:text-white/90"
							>
								<Phone size={14} strokeWidth={2} />
								ou appelez-nous au 07 52 62 08 18
							</a>
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
				>
					<ChevronDown
						size={28}
						strokeWidth={1.5}
						className="animate-gentle-bounce text-white/40"
					/>
				</motion.div>
			</section>
		);
}
