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

/**
 * Fetch Google reviews for a place using the Places API (New).
 * Called at build time in a server component — API key never exposed to client.
 *
 * Requires env vars:
 *   GOOGLE_PLACES_API_KEY — Google Cloud API key with Places API enabled
 *   GOOGLE_PLACE_ID       — Place ID for Permapaysage (format ChIJ...)
 */
export async function fetchGoogleReviews(): Promise<PlaceReviews> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    throw new Error("Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID env vars");
  }

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
    throw new Error(`Google Places API error ${res.status}: ${body}`);
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

  return {
    rating: data.rating ?? 5,
    totalReviews: data.userRatingCount ?? 0,
    reviews,
  };
}
