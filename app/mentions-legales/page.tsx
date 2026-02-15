import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentionsLegalesPage() {
  return (
			<>
				<Navbar />
				<main className="max-w-3xl mx-auto py-20 px-6 mt-10 lg:mt-20">
					<h1 className="font-fraunces text-4xl font-bold mb-8 text-brand-900">
						MENTIONS LÉGALES
					</h1>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Éditeur du site
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Le site lejardinierduvignoble.fr est édité par la société PERMAPAYSAGE,
						Société par Actions Simplifiée Unipersonnelle, inscrite au Registre du
						Commerce et des Sociétés de Nantes sous le numéro 953 318 391.
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Siège social : 18 avenue du général Heurtaux, 44330 Vallet
						<br />
						Téléphone : 07 52 62 08 18
						<br />
						Email : permapaysage.jl@gmail.com
						<br />
						Directeur de la publication : Jessy Laderriere
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Hébergeur
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
						91723, États-Unis.
						<br />
						Site web :{" "}
						<a
							href="https://vercel.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-brand-700"
						>
							https://vercel.com
						</a>
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Conception et développement
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Site conçu et développé par Raphaël Plassart — RP Solutions
						<br />
						Site web :{" "}
						<a
							href="https://raphael-plassart.com"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-brand-700"
						>
							https://raphael-plassart.com
						</a>
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Conditions d'utilisation
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Ces conditions de service sont un accord entre l'exploitant du site web et
						vous, l'utilisateur. Le présent accord définit les conditions générales de
						votre utilisation de ce site web et de l'un de ses produits ou services.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Liens vers d'autres sites web
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Bien que ce site web puisse être lié à d'autres sites web, nous ne sommes
						pas impliqués, directement ou indirectement, dans aucune approbation,
						association, parrainage, adhésion ou affiliation avec un site web lié,
						sauf indication contraire.
					</p>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Vous devez lire attentivement les mentions légales et les autres
						conditions d'utilisation de tout site web auquel vous accédez via un lien
						à partir de ce site web. Votre accès à d'autres pages hors site ou
						d'autres sites web est à vos propres risques.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Utilisation des cookies
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Le site web peut utiliser des cookies afin de personnaliser et de
						faciliter la navigation de l'utilisateur. L'utilisateur peut configurer
						son navigateur pour être notifié et refuser l'installation des cookies.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Propriété intellectuelle
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						L'ensemble des contenus présents sur ce site (textes, images, logos,
						vidéos) sont la propriété exclusive de PERMAPAYSAGE ou font l'objet d'une
						autorisation d'utilisation. Toute reproduction, même partielle, est
						interdite sans autorisation préalable.
					</p>

					<h2 className="font-fraunces text-xl font-semibold mt-10 mb-4 text-brand-900">
						Protection des données personnelles
					</h2>
					<p className="font-dm-sans text-base text-gray-700 leading-relaxed mb-4">
						Les informations recueillies via le formulaire de contact sont destinées
						uniquement à PERMAPAYSAGE pour le traitement de votre demande.
						Conformément au RGPD, vous disposez d'un droit d'accès, de rectification
						et de suppression de vos données. Pour exercer ce droit, contactez-nous à
						permapaysage.jl@gmail.com.
					</p>
				</main>
				<Footer />
			</>
		);
}
