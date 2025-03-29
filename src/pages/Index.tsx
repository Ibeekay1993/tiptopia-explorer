
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturedTips } from "@/components/FeaturedTips";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <FeaturedTips />
        <SubscriptionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
