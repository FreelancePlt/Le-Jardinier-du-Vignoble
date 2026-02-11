import { MapPin } from "lucide-react";

const communes = [
  "Vallet",
  "Le Loroux-Bottereau",
  "Saint-Julien-de-Concelles",
  "Clisson",
  "Divatte-sur-Loire",
  "Haute-Goulaine",
  "Gorges",
  "Aigrefeuille-sur-Maine",
  "Gétigné",
  "Le Pallet",
  "La Chapelle-Heulin",
  "Le Landreau",
  "Mouzillon",
];

export default function ZoneIntervention() {
  return (
    <section id="zone" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Titre */}
        <div className="mb-12 flex items-center gap-3">
          <MapPin size={24} strokeWidth={2} className="text-brand-600" />
          <h2 className="text-2xl font-bold text-earth-900 lg:text-3xl">
            Notre zone d&apos;intervention
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Google Maps */}
          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86956.5!2d-1.27!3d47.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec9d39a4e1b1%3A0x406d39bae4b4e20!2s44330%20Vallet!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-4/3 w-full lg:aspect-auto lg:min-h-95"
              title="Carte Google Maps — Vallet 44330"
            />
          </div>

          {/* Texte + communes */}
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-earth-800">
              Nous intervenons dans un rayon de{" "}
              <strong className="text-earth-900">
                25 km autour de Vallet
              </strong>{" "}
              pour l&apos;entretien de jardin dans le Vignoble Nantais.
            </p>

            {/* Chips communes */}
            <div className="flex flex-wrap gap-2">
              {communes.map((commune) => (
                <span
                  key={commune}
                  className="rounded-full bg-cream px-3 py-1 text-sm text-earth-800"
                >
                  {commune}
                </span>
              ))}
            </div>

            <p className="text-sm text-earth-400">
              Vous êtes plus loin ? Contactez-nous pour vérifier si nous pouvons
              intervenir.
            </p>

            <a
              href="#contact"
              className="mt-2 inline-block self-start rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 ease-out hover:bg-brand-500"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
