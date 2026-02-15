import { ShieldCheck, Smile, Banknote, Clock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const garanties = [
  {
    icon: Smile,
    title: "Satisfaction \"Sourire\"",
    text: "Votre regard sur le jardin est ce qui compte le plus. Si un détail ne vous convient pas parfaitement, je reviens corriger le travail gratuitement et avec le sourire sous 3 jours.",
  },
  {
    icon: Banknote,
    title: "La Transparence Fiscale",
    text: "Profitez d\u2019un service pro pour la moitié du prix. Que vous soyez imposable ou non, je m\u2019occupe de tout. Zéro paperasse, 100\u00A0% d\u2019économie.",
  },
  {
    icon: Clock,
    title: "Respect de votre temps",
    text: "Je respecte votre planning et votre intimité. Je suis toujours à l\u2019heure, et je ne repars jamais sans avoir nettoyé vos allées. Un jardin net, sans aucun effort pour vous.",
  },
];

export default function Garanties() {
  return (
    <section id="garanties" className="bg-brand-900 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-12 flex items-center justify-center gap-3">
            <ShieldCheck size={24} strokeWidth={2} className="text-brand-400" />
            <h2 className="font-fraunces text-2xl font-bold text-white lg:text-3xl">
              Notre priorité : votre bonheur au jardin
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid gap-6 lg:grid-cols-3 lg:gap-8"
          delay={0.1}
        >
          {garanties.map((item, index) => (
            <StaggerItem key={index} className="h-full">
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.07] p-8 text-center backdrop-blur-sm transition-all duration-200 hover:bg-white/12 hover:-translate-y-1">
                <item.icon
                  size={36}
                  strokeWidth={1.5}
                  className="mx-auto mb-4 text-brand-300"
                />
                <h3 className="font-fraunces mb-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/75">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
