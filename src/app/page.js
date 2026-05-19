import ClientReview from "@/components/ClientReview";
import HeroSection from "@/components/hero";
import ServiceSection from "@/components/Service";
import TopRatedDoctor from "@/components/TopRatedDoctor";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TopRatedDoctor />
      <ServiceSection />
      <ClientReview />
    </div>
  );
}
