import ClientReview from "@/components/ClientReview";
import HeroSection from "@/components/hero";
import ServiceSection from "@/components/Service";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <ClientReview />
    </div>
  );
}
