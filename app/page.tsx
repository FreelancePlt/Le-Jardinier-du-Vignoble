import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Prestations from "@/components/Prestations";
import Garanties from "@/components/Garanties";
import AvantApres from "@/components/AvantApres";
import Avis from "@/components/Avis";
import ZoneIntervention from "@/components/ZoneIntervention";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Prestations />

        {/* Séparateur vert — signature Permapaysage */}
        <div className="h-1 bg-brand-600" />

        <Garanties />

        <AvantApres />

        <Avis />

        {/* Séparateur vert */}
        <div className="h-1 bg-brand-600" />

        <ZoneIntervention />

        <FAQ />

        {/* Séparateur vert */}
        <div className="h-1 bg-brand-600" />

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
