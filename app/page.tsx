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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Prestations />

        <div className="h-1 bg-brand-600" />

        <CreditImpot />

        <Garanties />

        <AvantApres />

        <Avis />

        <div className="h-1 bg-brand-600" />

        <ZoneIntervention />

        <FAQ />

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
