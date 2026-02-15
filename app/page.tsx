import HomeContent from "@/components/HomeContent";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export default async function Home() {
  const reviewsData = await fetchGoogleReviews();

  return <HomeContent reviewsData={reviewsData} />;
}
