
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Trophy, 
  Calendar, 
  ArrowRight, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Clock,
  Info,
  BarChart,
  ListChecks,
  History
} from "lucide-react";

const BetOfTheDayPage = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showStatsDetail, setShowStatsDetail] = useState(false);
  
  // In a real application, this would come from an API or database
  const todaysBet = {
    match: "Manchester City vs Chelsea",
    league: "Premier League",
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
    time: "20:00",
    prediction: "Manchester City to Win & Over 2.5",
    odds: 2.25,
    confidence: 92,
    analysis: "Manchester City have been in excellent form at home, winning their last 7 matches and scoring at least 2 goals in each. Chelsea have struggled defensively away from home, conceding in 9 of their last 10 away games.",
    detailedAnalysis: "Manchester City's attacking prowess at the Etihad Stadium has been formidable this season, with an average of 3.2 goals per home game. Their defensive solidity has also improved, conceding just 0.8 goals per game at home. Chelsea, while dangerous on counter-attacks, have shown vulnerability when pressed high, conceding an average of 1.7 goals in away fixtures. The tactical matchup favors City, whose high-possession style should create numerous scoring opportunities against Chelsea's transitional defense.",
    stats: [
      { label: "Head-to-Head", value: "City won 6 of last 8", detail: "Manchester City have dominated this fixture in recent years, winning 6 and drawing 1 of their last 8 meetings. The average number of goals in these matches is 3.1." },
      { label: "Goals", value: "Over 2.5 in 80% of matches", detail: "In their respective league matches this season, over 2.5 goals have occurred in 82% of Manchester City's home games and 75% of Chelsea's away fixtures." },
      { label: "Form", value: "City: WWWWD, Chelsea: WDLWL", detail: "Manchester City are unbeaten in their last 12 matches in all competitions, winning 10. Chelsea have been inconsistent, winning only 5 of their last 10 matches." }
    ],
    additionalStats: {
      homeAttack: 3.2, // Goals per game
      homeDefense: 0.8, // Goals conceded per game
      awayAttack: 1.5, // Goals per game
      awayDefense: 1.7, // Goals conceded per game
      expectedGoals: 3.2, // xG for the match
      winProbability: {
        home: 65,
        draw: 20,
        away: 15
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-2xl md:text-3xl font-bold">Bet of the Day</h2>
                </div>
                <p className="text-muted-foreground">Our highest confidence prediction for today</p>
              </div>
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 mt-2 md:mt-0">
                <Star className="h-3.5 w-3.5 mr-1 fill-white" /> Expert Pick
              </Badge>
            </div>
            
            <Card className="overflow-hidden border-none shadow-xl bg-background/90 backdrop-blur-sm mb-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-32 -mt-32 z-0"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full -ml-32 -mb-32 z-0"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <CardDescription>{todaysBet.date} | {todaysBet.time}</CardDescription>
                    </div>
                    <CardTitle className="text-2xl mt-2">{todaysBet.match}</CardTitle>
                    <div className="flex items-center mt-1">
                      <Badge variant="outline" className="mr-2 bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                        {todaysBet.league}
                      </Badge>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">{todaysBet.confidence}% Confidence</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">Odds</div>
                    <div className="text-3xl font-bold text-primary">{todaysBet.odds}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="mb-6">
                  <div className="text-sm font-medium text-muted-foreground mb-1">PREDICTION</div>
                  <div className="p-3 rounded-md bg-primary/10 border border-primary/20 font-semibold text-primary text-center">
                    {todaysBet.prediction}
                  </div>
                </div>
                
                <div className="mb-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAnalysis(!showAnalysis)} 
                    className="w-full justify-between mb-2"
                  >
                    <span className="flex items-center">
                      <Info className="h-4 w-4 mr-2" />
                      <span className="font-medium">Analysis</span>
                    </span>
                    {showAnalysis ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                  
                  {showAnalysis && (
                    <div className="animate-accordion-down bg-muted/50 p-4 rounded-md space-y-3">
                      <p className="text-sm">{todaysBet.analysis}</p>
                      <hr className="border-muted-foreground/20" />
                      <p className="text-sm">{todaysBet.detailedAnalysis}</p>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowStatsDetail(!showStatsDetail)} 
                    className="w-full justify-between mb-2"
                  >
                    <span className="flex items-center">
                      <BarChart className="h-4 w-4 mr-2" />
                      <span className="font-medium">Match Statistics</span>
                    </span>
                    {showStatsDetail ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                  
                  {showStatsDetail ? (
                    <div className="animate-accordion-down space-y-4">
                      {todaysBet.stats.map((stat, index) => (
                        <div key={index} className="bg-muted/50 p-4 rounded-md space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="text-sm font-medium">{stat.label}</div>
                            <div className="text-sm font-medium">{stat.value}</div>
                          </div>
                          <p className="text-xs text-muted-foreground">{stat.detail}</p>
                        </div>
                      ))}
                      
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-muted/50 p-4 rounded-md">
                          <h4 className="text-sm font-medium mb-2">Win Probability</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Man City</span>
                              <span>{todaysBet.additionalStats.winProbability.home}%</span>
                            </div>
                            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                              <div 
                                className="bg-green-500 h-full rounded-full" 
                                style={{ width: `${todaysBet.additionalStats.winProbability.home}%` }}
                              ></div>
                            </div>
                            
                            <div className="flex justify-between text-xs">
                              <span>Draw</span>
                              <span>{todaysBet.additionalStats.winProbability.draw}%</span>
                            </div>
                            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                              <div 
                                className="bg-yellow-500 h-full rounded-full" 
                                style={{ width: `${todaysBet.additionalStats.winProbability.draw}%` }}
                              ></div>
                            </div>
                            
                            <div className="flex justify-between text-xs">
                              <span>Chelsea</span>
                              <span>{todaysBet.additionalStats.winProbability.away}%</span>
                            </div>
                            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                              <div 
                                className="bg-red-500 h-full rounded-full" 
                                style={{ width: `${todaysBet.additionalStats.winProbability.away}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-md">
                          <h4 className="text-sm font-medium mb-2">Expected Goals</h4>
                          <div className="flex items-center justify-center h-full">
                            <div className="text-3xl font-bold text-primary">{todaysBet.additionalStats.expectedGoals}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-4">
                      {todaysBet.stats.map((stat, index) => (
                        <div key={index} className="bg-muted/50 p-3 rounded-md">
                          <div className="text-xs font-medium text-muted-foreground mb-1">{stat.label}</div>
                          <div className="text-sm font-medium">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="relative z-10 flex justify-between items-center bg-muted/30 border-t">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold border-2 border-background">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-muted-foreground">1,250+ users backing this bet</span>
                </div>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <ListChecks className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Expert Selection</CardTitle>
                    <CardDescription>Our tips are chosen by sports betting experts</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Data-Driven</CardTitle>
                    <CardDescription>All picks are backed by advanced statistics</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full p-2 bg-primary/10 text-primary">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Proven Track Record</CardTitle>
                    <CardDescription>85%+ success rate on our Bet of the Day</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BetOfTheDayPage;
