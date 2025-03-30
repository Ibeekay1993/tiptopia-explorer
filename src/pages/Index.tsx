
import { HeroSection } from "@/components/HeroSection";
import { BetOfTheDay } from "@/components/BetOfTheDay";
import { DailyOddsSnippet } from "@/components/DailyOddsSnippet";
import { FeaturedTips } from "@/components/FeaturedTips";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Brain, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BetOfTheDay />
        <DailyOddsSnippet />
        
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-md hover:shadow-lg transition-shadow dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Brain className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">AI Betting Assistant</h3>
                <p className="text-muted-foreground mb-6">
                  Get personalized betting recommendations powered by advanced AI analysis
                </p>
                <Button 
                  onClick={() => navigate('/ai-assistant')}
                  className="gap-2 bg-gradient-to-r from-primary to-blue-500"
                >
                  <Brain className="h-4 w-4" />
                  Try AI Assistant
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-none shadow-md hover:shadow-lg transition-shadow dark:from-amber-950/20 dark:to-yellow-950/20">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Crown className="h-16 w-16 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Premium Betting Tips</h3>
                <p className="text-muted-foreground mb-6">
                  Exclusive high-confidence tips with detailed analysis and insights
                </p>
                <Button 
                  onClick={() => navigate('/premium-tips')}
                  className="gap-2 bg-gradient-to-r from-yellow-500 to-amber-500"
                >
                  <Crown className="h-4 w-4" />
                  View Premium Tips
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <FeaturedTips />
        <SubscriptionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
