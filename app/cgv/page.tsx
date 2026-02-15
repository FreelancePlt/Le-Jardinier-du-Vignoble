import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CgvPage() {
  return (
			<>
				<Navbar />
				<main className="max-w-3xl mx-auto py-20 px-6 mt-10 lg:mt-20">
					<h1 className="font-fraunces text-4xl font-bold mb-8 text-brand-900">
						CONDITIONS GÉNÉRALES DE VENTE
					</h1>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Préambule
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						PERMAPAYSAGE est une Société par Actions Simplifiée Unipersonnelle
						inscrite au Registre du Commerce et des Sociétés de Nantes, sous le numéro
						953 318 391, dont le siège social est situé 18 avenue du général Heurtaux,
						44330 Vallet.
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						La société PERMAPAYSAGE, opérant sous la marque Le Jardinier du Vignoble,
						réalise des prestations d'entretien de jardin (services à la personne)
						selon les besoins de ses clients. Les présentes conditions générales de
						vente définissent les relations contractuelles avec ses clients.
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Les présentes conditions générales s'appliquent à tous les contrats de
						prestations de service d'entretien de jardin conclus et/ou exécutés par la
						société en France. Les parties conviennent que leurs relations seront
						exclusivement régies par les présentes. Toute modification souhaitée par
						le client doit faire l'objet d'une demande écrite au plus tard lors de
						l'acceptation du devis et doit être acceptée par la société par écrit. En
						cas de conflit entre les présentes conditions générales et les conditions
						particulières portées sur les devis, les conditions particulières
						primeront.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Devis
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						La société établit un devis écrit répondant au besoin formulé par le
						client. Le devis est élaboré gratuitement, sauf information contraire
						préalable. Sauf indication contraire dans le devis, celui-ci :
					</p>
					<ul className="list-disc pl-6 mb-4 text-gray-700">
						<li className="font-dm-sans text-base leading-relaxed mb-2">
							est valable un mois à compter de la date de son établissement et n'inclut
							que les prestations qui y sont décrites ;
						</li>
						<li className="font-dm-sans text-base leading-relaxed mb-2">
							s'entend pour l'exécution des travaux décrits dans des conditions
							normales ;
						</li>
						<li className="font-dm-sans text-base leading-relaxed mb-2">
							n'inclut pas les demandes d'autorisation exigées par des règles
							d'urbanisme ou des règlements de copropriété.
						</li>
					</ul>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Il appartient au client de s'informer et de réaliser toute formalité pour
						obtenir les autorisations nécessaires, sous sa seule responsabilité.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Formation du contrat
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Le contrat est définitivement formé dès l'acceptation, sans réserve ni
						modification, du devis par le client. Toute demande de modification
						donnera lieu à l'établissement d'un devis modificatif.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Prix et facturation
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Sauf accord contraire dans le devis, un acompte de 30 % du prix est versé
						par le client lors de l'acceptation du devis. La commande ne recevra
						exécution qu'après l'encaissement de cette somme.
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Le solde du prix est payable à la réception des travaux, à moins que les
						parties aient convenu d'autres modalités de paiement.
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Les prix affichés s'entendent hors TVA. Les paiements seront effectués par
						chèque, espèce, virement ou CESU, sauf accord contraire.
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						En cas de retard de paiement, un intérêt de retard égal au taux d'intérêt
						de la Banque Centrale Européenne majoré de 10 points de pourcentage sera
						dû sur la totalité des sommes impayées (article L 441-6 du code de
						commerce).
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Délais d'exécution
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Les éventuels délais d'exécution convenus ne constituent qu'une indication
						et sont valables sauf intempéries, force majeure, catastrophe naturelle,
						difficultés d'approvisionnement ou de transport.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Droit de rétractation
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Le client dispose d'un délai de rétractation de quatorze jours à compter
						de la conclusion du contrat. En cas d'exercice de ce droit, la société
						s'engage à rembourser la somme versée dans les 30 jours (article L 221-18
						du code de la consommation).
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Responsabilité
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						La société est tenue d'une obligation de moyen et non de résultat, sauf
						cas contraire prévu par la loi. La société sera exonérée de toute
						responsabilité en cas de force majeure, notamment : intempéries,
						catastrophes naturelles, sécheresses, inondations, grèves.
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						La société a souscrit une assurance dont un exemplaire pourra être remis
						au client sur simple demande.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Règlement des litiges
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						En cas de litige, le client peut recourir gratuitement au service de
						médiation suivant :<br />
						Médiation de la consommation — [coordonnées du médiateur à compléter]
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Le présent contrat est soumis à la loi française. Le tribunal du lieu du
						siège social de la société sera compétent en cas de litige.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Protection des données
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Les informations recueillies dans le cadre de nos prestations sont
						destinées uniquement à PERMAPAYSAGE pour le traitement de votre demande et
						le suivi de la relation commerciale. Conformément au RGPD, vous disposez
						d'un droit d'accès, de rectification et de suppression de vos données.
						Contact : permapaysage.jl@gmail.com.
					</p>
				</main>
				<Footer />
			</>
		);
}
