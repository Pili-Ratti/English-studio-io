import { NavBar } from "@/components/layout/NavBar";
import { HeroSection } from "@/components/layout/HeroSection";
import { ProblemSection } from "@/components/layout/ProblemSection";
import { PricingSection } from "@/components/layout/PricingSection";
import { FAQSection } from "@/components/layout/FAQSection";
import { CTABanner } from "@/components/layout/CTABanner";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemSection />
        <PricingSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
