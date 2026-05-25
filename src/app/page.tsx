import { LanguageProvider } from "@/lib/LanguageContext";
import { NavBar } from "@/components/layout/NavBar";
import { HeroSection } from "@/components/layout/HeroSection";
import { SocialProofSection } from "@/components/layout/SocialProofSection";
import { ProblemSection } from "@/components/layout/ProblemSection";
import { PricingSection } from "@/components/layout/PricingSection";
import { FAQSection } from "@/components/layout/FAQSection";
import { CTABanner } from "@/components/layout/CTABanner";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <NavBar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <PricingSection />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
