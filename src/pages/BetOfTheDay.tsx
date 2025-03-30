
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";

// Import our new components
import { MatchHeader } from "@/components/BetOfTheDay/MatchHeader";
import { TabNavigation } from "@/components/BetOfTheDay/TabNavigation";
import { OverviewTab } from "@/components/BetOfTheDay/OverviewTab";
import { AnalysisTab } from "@/components/BetOfTheDay/AnalysisTab";
import { TeamStatsTab } from "@/components/BetOfTheDay/TeamStatsTab";
import { CardFooterActions } from "@/components/BetOfTheDay/CardFooterActions";
import { BenefitCards } from "@/components/BetOfTheDay/BenefitCards";
import { mockBetOfDayData } from "@/components/BetOfTheDay/BetData";

const BetOfTheDayPage = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [animatedValues, setAnimatedValues] = useState({
    homeAttack: 0,
    homeDefense: 0,
    awayAttack: 0,
    awayDefense: 0,
    xg: 0,
    probHome: 0,
    probDraw: 0,
    probAway: 0
  });
  
  // Use the mock data from the new BetData.ts file
  const todaysBet = mockBetOfDayData;

  // Animate stats on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        homeAttack: todaysBet.additionalStats.homeAttack,
        homeDefense: todaysBet.additionalStats.homeDefense,
        awayAttack: todaysBet.additionalStats.awayAttack,
        awayDefense: todaysBet.additionalStats.awayDefense,
        xg: todaysBet.additionalStats.expectedGoals,
        probHome: todaysBet.additionalStats.winProbability.home,
        probDraw: todaysBet.additionalStats.winProbability.draw,
        probAway: todaysBet.additionalStats.winProbability.away
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleBackBet = () => {
    toast.success("Bet added to your betslip", {
      description: `You've backed ${todaysBet.prediction} at odds of ${todaysBet.odds}`
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 py-12">
          <div className="container">
            {/* Match Header */}
            <MatchHeader 
              match={todaysBet.match}
              league={todaysBet.league}
              date={todaysBet.date}
              time={todaysBet.time}
              odds={todaysBet.odds}
              confidence={todaysBet.confidence}
              prediction={todaysBet.prediction}
              handleBackBet={handleBackBet}
            />
            
            {/* Main Card */}
            <Card className="overflow-hidden border-none shadow-xl bg-background/90 backdrop-blur-sm mb-8 relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-32 -mt-32 z-0 group-hover:from-primary/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full -ml-32 -mb-32 z-0 group-hover:from-blue-500/20 transition-all duration-500"></div>
              
              <CardContent className="relative z-10">
                <div className="space-y-6">
                  {/* Tab Navigation */}
                  <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

                  {/* Tab Content */}
                  {activeTab === "overview" && (
                    <OverviewTab stats={todaysBet.stats} />
                  )}

                  {activeTab === "analysis" && (
                    <AnalysisTab 
                      analysis={todaysBet.analysis}
                      detailedAnalysis={todaysBet.detailedAnalysis}
                      animatedValues={animatedValues}
                    />
                  )}

                  {activeTab === "team-stats" && (
                    <TeamStatsTab 
                      homeTeam={todaysBet.teamStats.home}
                      awayTeam={todaysBet.teamStats.away}
                    />
                  )}
                </div>
              </CardContent>
              
              {/* Card Footer */}
              <CardFooter className="relative z-10">
                <CardFooterActions handleBackBet={handleBackBet} />
              </CardFooter>
            </Card>
            
            {/* Benefit Cards */}
            <BenefitCards />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BetOfTheDayPage;
