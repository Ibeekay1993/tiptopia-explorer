
import { HeroSection } from "@/components/HeroSection";
import { BetOfTheDay } from "@/components/BetOfTheDay";
import { DailyOddsSnippet } from "@/components/DailyOddsSnippet";
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
        <BetOfTheDay />
        <DailyOddsSnippet />
        <FeaturedTips />
        <SubscriptionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
