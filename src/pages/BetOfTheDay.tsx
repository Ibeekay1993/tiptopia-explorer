
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Trophy, 
  Calendar, 
  ChevronDown, 
  ChevronUp,
  Clock,
  Info,
  BarChart,
  ListChecks,
  History,
  Target,
  Zap,
  Shield,
  Sparkles,
  LineChart,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const BetOfTheDayPage = () => {
  const navigate = useNavigate();
  const [showAnalysis, setShowAnalysis] = useState(true);
  const [showStatsDetail, setShowStatsDetail] = useState(true);
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
  
  // In a real application, this would come from an API or database
  const todaysBet = {
    match: "Manchester City vs Chelsea",
    league: "Premier League",
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
    time: "20:00",
    prediction: "Manchester City Win & Over 2.5",
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
    },
    teamStats: {
      home: {
        name: "Manchester City",
        form: ["W", "W", "W", "W", "D"],
        lastGames: [
          { opponent: "Liverpool", result: "W", score: "3-1" },
          { opponent: "Arsenal", result: "W", score: "2-0" },
          { opponent: "Tottenham", result: "W", score: "4-1" },
          { opponent: "Newcastle", result: "W", score: "2-0" },
          { opponent: "Aston Villa", result: "D", score: "1-1" }
        ],
        topScorers: [
          { name: "Erling Haaland", goals: 22 },
          { name: "Phil Foden", goals: 14 },
          { name: "Kevin De Bruyne", goals: 8 }
        ]
      },
      away: {
        name: "Chelsea",
        form: ["W", "D", "L", "W", "L"],
        lastGames: [
          { opponent: "Brentford", result: "W", score: "2-0" },
          { opponent: "Fulham", result: "D", score: "1-1" },
          { opponent: "Manchester United", result: "L", score: "1-2" },
          { opponent: "Everton", result: "W", score: "3-0" },
          { opponent: "Brighton", result: "L", score: "1-3" }
        ],
        topScorers: [
          { name: "Nicolas Jackson", goals: 12 },
          { name: "Cole Palmer", goals: 11 },
          { name: "Raheem Sterling", goals: 7 }
        ]
      }
    }
  };

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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Trophy className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-2xl md:text-3xl font-bold">Bet of the Day</h2>
                </div>
                <p className="text-muted-foreground">
                  Our highest confidence prediction for today
                </p>
              </div>
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 mt-2 md:mt-0">
                <Sparkles className="h-3.5 w-3.5 mr-1" /> Expert Pick
              </Badge>
            </div>
            
            <Card className="overflow-hidden border-none shadow-xl bg-background/90 backdrop-blur-sm mb-8 relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-32 -mt-32 z-0 group-hover:from-primary/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full -ml-32 -mb-32 z-0 group-hover:from-blue-500/20 transition-all duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <CardDescription>{todaysBet.date} | {todaysBet.time}</CardDescription>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mt-2 animate-fade-in">{todaysBet.match}</CardTitle>
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
                    <div className="text-3xl font-bold text-primary animate-pulse">{todaysBet.odds}</div>
                    <Button 
                      onClick={handleBackBet}
                      className="mt-2 bg-green-500 hover:bg-green-600 text-white"
                      size="sm"
                    >
                      Back This Bet
                    </Button>
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
                
                <div className="space-y-6">
                  <div className="tabs flex">
                    <button 
                      onClick={() => setActiveTab("overview")}
                      className={`px-4 py-2 font-medium text-sm ${activeTab === "overview" ? 
                        "border-b-2 border-primary text-primary" : 
                        "text-muted-foreground hover:text-foreground transition-colors"}`}
                    >
                      Overview
                    </button>
                    <button 
                      onClick={() => setActiveTab("analysis")}
                      className={`px-4 py-2 font-medium text-sm ${activeTab === "analysis" ? 
                        "border-b-2 border-primary text-primary" : 
                        "text-muted-foreground hover:text-foreground transition-colors"}`}
                    >
                      Expert Analysis
                    </button>
                    <button 
                      onClick={() => setActiveTab("team-stats")}
                      className={`px-4 py-2 font-medium text-sm ${activeTab === "team-stats" ? 
                        "border-b-2 border-primary text-primary" : 
                        "text-muted-foreground hover:text-foreground transition-colors"}`}
                    >
                      Team Statistics
                    </button>
                  </div>

                  {activeTab === "overview" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                      {todaysBet.stats.map((stat, index) => (
                        <div key={index} className="bg-muted/50 p-4 rounded-md space-y-2 hover:bg-muted/70 transition-colors">
                          <div className="flex justify-between items-center">
                            <div className="text-sm font-medium">{stat.label}</div>
                            <div className="text-sm font-medium">{stat.value}</div>
                          </div>
                          <p className="text-xs text-muted-foreground">{stat.detail}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "analysis" && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="bg-muted/50 p-4 rounded-md space-y-3">
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Key Insights</h3>
                        </div>
                        <p className="text-sm">{todaysBet.analysis}</p>
                        <hr className="border-muted-foreground/20" />
                        <p className="text-sm">{todaysBet.detailedAnalysis}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-muted/50 p-4 rounded-md">
                          <div className="flex items-center gap-2 mb-3">
                            <BarChart className="h-5 w-5 text-primary" />
                            <h3 className="font-medium">Performance Metrics</h3>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Man City Attack</span>
                                <span className="font-medium">{animatedValues.homeAttack.toFixed(1)}</span>
                              </div>
                              <Progress value={animatedValues.homeAttack * 25} className="h-2" />
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Man City Defense</span>
                                <span className="font-medium">{animatedValues.homeDefense.toFixed(1)}</span>
                              </div>
                              <Progress value={(4 - animatedValues.homeDefense) * 25} className="h-2" />
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Chelsea Attack</span>
                                <span className="font-medium">{animatedValues.awayAttack.toFixed(1)}</span>
                              </div>
                              <Progress value={animatedValues.awayAttack * 25} className="h-2" />
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Chelsea Defense</span>
                                <span className="font-medium">{animatedValues.awayDefense.toFixed(1)}</span>
                              </div>
                              <Progress value={(4 - animatedValues.awayDefense) * 25} className="h-2" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-muted/50 p-4 rounded-md">
                          <div className="flex items-center gap-2 mb-3">
                            <LineChart className="h-5 w-5 text-primary" />
                            <h3 className="font-medium">Match Prediction</h3>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Man City Win</span>
                                <span className="font-medium">{animatedValues.probHome}%</span>
                              </div>
                              <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                                <div 
                                  className="bg-green-500 h-full rounded-full transition-all duration-1000 ease-out" 
                                  style={{ width: `${animatedValues.probHome}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Draw</span>
                                <span className="font-medium">{animatedValues.probDraw}%</span>
                              </div>
                              <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                                <div 
                                  className="bg-yellow-500 h-full rounded-full transition-all duration-1000 ease-out" 
                                  style={{ width: `${animatedValues.probDraw}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Chelsea Win</span>
                                <span className="font-medium">{animatedValues.probAway}%</span>
                              </div>
                              <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                                <div 
                                  className="bg-red-500 h-full rounded-full transition-all duration-1000 ease-out" 
                                  style={{ width: `${animatedValues.probAway}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="pt-2 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-sm text-muted-foreground">Expected Goals</div>
                                <div className="text-3xl font-bold text-primary">{animatedValues.xg.toFixed(1)}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "team-stats" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                      <div className="bg-muted/50 p-4 rounded-md">
                        <h3 className="font-medium text-center mb-4">{todaysBet.teamStats.home.name}</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm font-medium mb-2">Recent Form</div>
                            <div className="flex gap-1 justify-center">
                              {todaysBet.teamStats.home.form.map((result, i) => (
                                <div 
                                  key={i} 
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm
                                    ${result === 'W' ? 'bg-green-500' : 
                                    result === 'D' ? 'bg-yellow-500' : 'bg-red-500'}`}
                                >
                                  {result}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-sm font-medium mb-2">Last 5 Games</div>
                            <div className="space-y-2">
                              {todaysBet.teamStats.home.lastGames.map((game, i) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                  <span>vs {game.opponent}</span>
                                  <div className="flex items-center gap-2">
                                    <span>{game.score}</span>
                                    <span 
                                      className={`px-1 rounded text-xs font-medium
                                        ${game.result === 'W' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                                        game.result === 'D' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}
                                    >
                                      {game.result}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-sm font-medium mb-2">Top Scorers</div>
                            <div className="space-y-2">
                              {todaysBet.teamStats.home.topScorers.map((scorer, i) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                  <span>{scorer.name}</span>
                                  <span>{scorer.goals} goals</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-md">
                        <h3 className="font-medium text-center mb-4">{todaysBet.teamStats.away.name}</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm font-medium mb-2">Recent Form</div>
                            <div className="flex gap-1 justify-center">
                              {todaysBet.teamStats.away.form.map((result, i) => (
                                <div 
                                  key={i} 
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm
                                    ${result === 'W' ? 'bg-green-500' : 
                                    result === 'D' ? 'bg-yellow-500' : 'bg-red-500'}`}
                                >
                                  {result}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-sm font-medium mb-2">Last 5 Games</div>
                            <div className="space-y-2">
                              {todaysBet.teamStats.away.lastGames.map((game, i) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                  <span>vs {game.opponent}</span>
                                  <div className="flex items-center gap-2">
                                    <span>{game.score}</span>
                                    <span 
                                      className={`px-1 rounded text-xs font-medium
                                        ${game.result === 'W' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                                        game.result === 'D' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                                        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}
                                    >
                                      {game.result}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-sm font-medium mb-2">Top Scorers</div>
                            <div className="space-y-2">
                              {todaysBet.teamStats.away.topScorers.map((scorer, i) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                  <span>{scorer.name}</span>
                                  <span>{scorer.goals} goals</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 bg-muted/30 border-t py-4">
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
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    onClick={() => navigate(-1)}
                  >
                    Back to Home
                  </Button>
                  
                  <Button 
                    className="gap-2 bg-green-500 hover:bg-green-600 text-white"
                    onClick={handleBackBet}
                  >
                    Back This Bet
                  </Button>
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
                    <Award className="h-5 w-5" />
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
