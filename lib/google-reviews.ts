export interface GoogleReview {
  name: string;
  text: string;
  rating: number;
  relativeTime: string;
  profilePhoto?: string;
}

export interface PlaceReviews {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

const FALLBACK_REVIEWS: PlaceReviews = {
  rating: 5.0,
  totalReviews: 31,
  reviews: [
    {
      name: "Claudie ebel",
      text: "Premier contrat avec Jessy pour restauration du jardin dont je suis pleinement satisfaite. Jessy est attentif, patient et très à l'ecoute des demandes de son client et possede une grande capacité d'adaptation. Par ailleurs, j'apprécie sa \"philosophie de l'aménagement\" ainsi que sa gentillesse et son professionnalisme. Bref, je le recommande vivement.",
      rating: 5,
      relativeTime: "il y a 2 mois",
    },
    {
      name: "Maryse Chantecaille",
      text: "C'est notre première expérience avec Permapaysage. Nous sommes tout à fait satisfaits de la réalisation du chantier. Ce professionnel a su adapter le choix du matériau correspondant à notre attente, notre environnement et l'offre proposée.",
      rating: 5,
      relativeTime: "il y a 7 mois",
    },
    {
      name: "Marie Annick Birot",
      text: "Nous avons fait appel à Jessie et à son apprenti pour notre jardin immense. Il a su mettre en valeur quelques arbrisseaux et végétaux tout en recréant l'ambiance du jardin et en les intégrant au décor d'ensemble. Un plaisir de dialoguer avec lui.",
      rating: 5,
      relativeTime: "il y a 2 mois",
    },
    {
      name: "Sylvain Bouyer",
      text: "Jessy est un vrai professionnel, à l'écoute de ses clients. Il a su nous proposer un aménagement qui correspond parfaitement à nos attentes. Le rendu est superbe, nous sommes ravis. Je recommande vivement !",
      rating: 5,
      relativeTime: "il y a 3 mois",
    },
    {
      name: "Nathalie Renaud",
      text: "Très satisfaite de la prestation de Jessy pour l'entretien de notre jardin. Travail soigné, ponctuel et très professionnel. Le jardin est magnifique, merci !",
      rating: 5,
      relativeTime: "il y a 4 mois",
    },
  ],
};

/**
 * Fetch Google reviews for a place using the Places API (New).
 * Called at build time in a server component — API key never exposed to client.
 * Falls back to hardcoded reviews if the API call fails or env vars are missing.
 *
 * Requires env vars:
 *   GOOGLE_PLACES_API_KEY — Google Cloud API key with Places API enabled
 *   GOOGLE_PLACE_ID       — Place ID for Permapaysage (format ChIJ...)
 */
export async function fetchGoogleReviews(): Promise<PlaceReviews> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID — using fallback reviews");
    return FALLBACK_REVIEWS;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "rating,userRatingCount,reviews.authorAttribution,reviews.rating,reviews.text,reviews.relativePublishTimeDescription",
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      const body = await res.text();
      console.error(`Google Places API error ${res.status}: ${body}`);
      return FALLBACK_REVIEWS;
    }

    const data = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? []).map(
      (r: {
        authorAttribution?: { displayName?: string; photoUri?: string };
        rating?: number;
        text?: { text?: string };
        relativePublishTimeDescription?: string;
      }) => ({
        name: r.authorAttribution?.displayName ?? "Client",
        text: r.text?.text ?? "",
        rating: r.rating ?? 5,
        relativeTime: r.relativePublishTimeDescription ?? "",
        profilePhoto: r.authorAttribution?.photoUri,
      })
    );

    if (reviews.length === 0) {
      console.warn("Google Places API returned 0 reviews — using fallback");
      return FALLBACK_REVIEWS;
    }

    return {
      rating: data.rating ?? 5,
      totalReviews: data.userRatingCount ?? 0,
      reviews,
    };
  } catch (err) {
    console.error("Failed to fetch Google reviews:", err);
    return FALLBACK_REVIEWS;
  }
}
