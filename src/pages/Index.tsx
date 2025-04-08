
import { HeroSection } from "@/components/HeroSection";
import { BetOfTheDay } from "@/components/BetOfTheDay";
import { DailyOddsSnippet } from "@/components/DailyOddsSnippet";
import { FeaturedTips } from "@/components/FeaturedTips";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Brain, Crown, Trophy } from "lucide-react";
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
        
        <FeaturedTips />
        <SubscriptionSection />
        
        <div className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Explore TipTopia Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-md hover:shadow-lg transition-shadow dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Brain className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Football Predictions</h3>
                <p className="text-muted-foreground mb-6">
                  Get accurate football predictions based on statistics and expert analysis
                </p>
                <div className="flex justify-center w-full">
                  <Button 
                    onClick={() => navigate('/predictions')}
                    className="gap-2 bg-gradient-to-r from-primary to-blue-500"
                  >
                    <Brain className="h-4 w-4" />
                    View All Predictions
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-none shadow-md hover:shadow-lg transition-shadow dark:from-amber-950/20 dark:to-yellow-950/20">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Crown className="h-16 w-16 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Premium Betting Tips</h3>
                <p className="text-muted-foreground mb-6">
                  Exclusive high-confidence tips with detailed analysis and insights
                </p>
                <div className="flex justify-center w-full">
                  <Button 
                    onClick={() => navigate('/premium-tips')}
                    className="gap-2 bg-gradient-to-r from-yellow-500 to-amber-500"
                  >
                    <Crown className="h-4 w-4" />
                    View Premium Tips
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-none shadow-md hover:shadow-lg transition-shadow dark:from-green-950/20 dark:to-emerald-950/20">
              <CardContent className="flex flex-col items-center text-center p-8">
                <Trophy className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Bet of the Day</h3>
                <p className="text-muted-foreground mb-6">
                  Our expert analysts' top pick with the highest confidence level
                </p>
                <div className="flex justify-center w-full">
                  <Button 
                    onClick={() => navigate('/bet-of-the-day')}
                    className="gap-2 bg-gradient-to-r from-green-500 to-emerald-500"
                  >
                    <Trophy className="h-4 w-4" />
                    See Today's Best Bet
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
