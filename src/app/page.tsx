import HeroSection from "@/components/HeroSection";
import FeaturedServices from "@/components/FeaturedServices";
import StickyComponent from "@/components/StickyComponent";
import TestimonialCards from "@/components/TestimonialCards";
import FeaturedContribution from "@/components/FeaturedContribution";
import MeetOurTeam from "@/components/MeetOurTeam";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      <HeroSection />
      <FeaturedServices />
      <StickyComponent />
      <TestimonialCards />
      <FeaturedContribution />
      <MeetOurTeam />
      <Footer />
    </main>
  );
}
