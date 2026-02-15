"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Prestations from "@/components/Prestations";
import CreditImpot from "@/components/CreditImpot";
import Garanties from "@/components/Garanties";
import AvantApres from "@/components/AvantApres";
import Avis from "@/components/Avis";
import ZoneIntervention from "@/components/ZoneIntervention";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { PlaceReviews } from "@/lib/google-reviews";

interface HomeContentProps {
  reviewsData: PlaceReviews;
}

export default function HomeContent({ reviewsData }: HomeContentProps) {
  const [isHeroReady, setIsHeroReady] = useState(false);

  useEffect(() => {
    if (isHeroReady) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isHeroReady]);

  return (
    <>
      {!isHeroReady && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-brand-900">
          <div className="flex flex-col items-center gap-4 text-white/90">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/25 border-t-white" />
            <p className="font-medium tracking-wide">Chargement...</p>
          </div>
        </div>
      )}

      <div className={isHeroReady ? "opacity-100" : "pointer-events-none opacity-0"}>
        <Navbar />
        <main>
          <Hero onInitialImageLoad={() => setIsHeroReady(true)} />
          <Prestations />
          <CreditImpot />
          <Garanties />
          <AvantApres />
          <Avis data={reviewsData} />
          <ZoneIntervention />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
