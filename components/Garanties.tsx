import { ShieldCheck, RefreshCw, BadgePercent, Clock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const garanties = [
  {
    icon: RefreshCw,
    title: "Satisfait ou refait",
    text: "Pas satisfait du résultat ? On revient et on corrige, sans frais. C\u2019est aussi simple que ça.",
  },
  {
    icon: BadgePercent,
    title: "Crédit d\u2019impôt clair & immédiat",
    text: "Grâce à notre agrément, vous récupérez 50 % du montant en crédit d\u2019impôt. Et avec l\u2019avance immédiate, vous ne payez que la moitié dès la facturation.",
  },
  {
    icon: Clock,
    title: "Toujours à l\u2019heure",
    text: "On respecte chaque rendez-vous. Un imprévu ? Vous êtes prévenu 24h à l\u2019avance.",
  },
];

export default function Garanties() {
  return (
			<section id="garanties" className="bg-brand-900 py-20 lg:py-28">
				<div className="mx-auto max-w-6xl px-6">
					<FadeIn>
						<div className="mb-12 flex items-center justify-center gap-3">
							<ShieldCheck size={24} strokeWidth={2} className="text-brand-400" />
							<h2 className="text-2xl font-bold text-white lg:text-3xl">
								Nos garanties pour votre sérénité
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
									<h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
									<p className="text-sm leading-relaxed text-white/75">{item.text}</p>
								</div>
							</StaggerItem>
						))}
					</StaggerContainer>
				</div>
			</section>
		);
}
