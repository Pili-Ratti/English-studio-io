import { HeroSection } from "@/components/layout/HeroSection";
import { ProblemSection } from "@/components/layout/ProblemSection";
import { PricingSection } from "@/components/layout/PricingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <PricingSection />
    </main>
  );
}
