
import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Lock, 
  Trophy, 
  BellRing, 
  Clock, 
  TrendingUp,
  CalendarDays,
  DollarSign,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Mock premium tips data
const premiumTips = [
  {
    id: 1,
    match: "Manchester City vs Arsenal",
    league: "Premier League",
    prediction: "Manchester City Win & Over 2.5",
    odds: 1.95,
    confidence: 85,
    time: "20:00",
    date: "2023-05-15",
    analysis: "Manchester City has won 7 of their last 8 home games against Arsenal, scoring at least 2 goals in each victory."
  },
  {
    id: 2,
    match: "Real Madrid vs Barcelona",
    league: "La Liga",
    prediction: "Both Teams to Score",
    odds: 1.75,
    confidence: 90,
    time: "21:00",
    date: "2023-05-16",
    analysis: "The last 10 El Clásico matches have seen both teams score in 8 of them. Both teams are in excellent attacking form."
  },
  {
    id: 3,
    match: "Liverpool vs Chelsea",
    league: "Premier League",
    prediction: "Over 2.5 Goals",
    odds: 1.85,
    confidence: 80,
    time: "17:30",
    date: "2023-05-17",
    analysis: "5 of the last 6 meetings between these teams have produced over 2.5 goals. Both teams have been scoring freely in recent matches."
  }
];

// Function to determine if a premium tip is locked based on subscription status
const isPremiumTipLocked = (tipId: number) => {
  // Mock implementation - in a real app, this would check user's subscription status
  // For demo purposes, we're locking tip IDs 2 and 3
  return tipId !== 1;
};

const PremiumTips = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [isSubscribed, setIsSubscribed] = useState(false); // Mock subscription status
  
  const handleSubscribe = () => {
    setIsSubscribed(true);
    toast.success("Successfully subscribed!", {
      description: "You now have access to all premium tips"
    });
  };
  
  const handleBackTip = (tipId: number) => {
    toast.success("Tip added to betslip", {
      description: `You've backed premium tip #${tipId}`
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center mb-2">
                Premium Betting Tips <Crown className="ml-2 h-6 w-6 text-yellow-500" />
              </h1>
              <p className="text-muted-foreground">
                Exclusive high-confidence tips with detailed analysis
              </p>
            </div>
            
            {!isSubscribed && (
              <Button 
                onClick={handleSubscribe}
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 gap-2"
              >
                <Crown className="h-4 w-4" />
                Upgrade to Premium
              </Button>
            )}
          </div>
          
          {!isSubscribed && (
            <Alert className="mb-8 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800">
              <BellRing className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-800 dark:text-amber-400">Premium Access Required</AlertTitle>
              <AlertDescription className="text-amber-700 dark:text-amber-300">
                You are currently viewing limited content. Upgrade to Premium to unlock all tips and analysis.
              </AlertDescription>
            </Alert>
          )}
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Tips</TabsTrigger>
              <TabsTrigger value="soccer">Soccer</TabsTrigger>
              <TabsTrigger value="basketball">Basketball</TabsTrigger>
              <TabsTrigger value="tennis">Tennis</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {premiumTips.map((tip) => (
              <Card key={tip.id} className={`overflow-hidden group hover:shadow-xl transition-all duration-300 ${isPremiumTipLocked(tip.id) && !isSubscribed ? "bg-muted/30" : ""}`}>
                <div className="relative">
                  {isPremiumTipLocked(tip.id) && !isSubscribed && (
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 p-6 text-center">
                      <Lock className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Premium Content Locked</h3>
                      <p className="text-muted-foreground mb-4">
                        Subscribe to unlock this premium betting tip and analysis
                      </p>
                      <Button 
                        onClick={handleSubscribe}
                        className="gap-2 bg-gradient-to-r from-yellow-500 to-amber-500"
                      >
                        <Crown className="h-4 w-4" />
                        Unlock Premium Tips
                      </Button>
                    </div>
                  )}
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                        Premium Tip
                      </Badge>
                      <div className="flex items-center">
                        <span className="text-xs text-muted-foreground mr-1">Confidence:</span>
                        <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800">
                          {tip.confidence}%
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>{new Date(tip.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                        <span className="mx-1">•</span>
                        <Clock className="h-3.5 w-3.5" />
                        <span>{tip.time}</span>
                      </div>
                      <CardTitle className="text-xl">{tip.match}</CardTitle>
                      <CardDescription>{tip.league}</CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">PREDICTION</div>
                        <div className="p-2 rounded-md bg-primary/10 border border-primary/20 font-medium text-primary">
                          {tip.prediction}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">ODDS</div>
                          <div className="text-2xl font-bold">{tip.odds}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">POTENTIAL RETURN</div>
                          <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                            ${(100 * tip.odds).toFixed(2)}
                            <span className="text-xs text-muted-foreground ml-1">per $100</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">ANALYSIS</div>
                        <p className="text-sm">{tip.analysis}</p>
                      </div>
                      
                      <Button 
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => handleBackTip(tip.id)}
                      >
                        Back This Tip
                      </Button>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="border-t bg-muted/50">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">High Value Bet</span>
                      </div>
                      <Badge variant="outline" className="gap-1">
                        <Trophy className="h-3 w-3" />
                        Expert Pick
                      </Badge>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            <Card className="flex-1 border-amber-200 bg-amber-50/30 dark:bg-amber-900/10 dark:border-amber-800/30">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-yellow-500" />
                  <CardTitle>Premium Membership</CardTitle>
                </div>
                <CardDescription>
                  Subscribe to unlock all premium betting tips and analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 border rounded-lg p-4 bg-background">
                    <div className="text-center mb-2">
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:border-amber-800">
                        Monthly
                      </Badge>
                    </div>
                    <div className="text-center my-3">
                      <span className="text-3xl font-bold">$29.99</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">All premium tips</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Detailed analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Email notifications</span>
                      </li>
                    </ul>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={handleSubscribe}
                    >
                      Subscribe Monthly
                    </Button>
                  </div>
                  
                  <div className="flex-1 border rounded-lg p-4 bg-background relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 transform rotate-45 bg-yellow-500 text-white text-xs px-10 py-1">
                      Best Value
                    </div>
                    <div className="text-center mb-2">
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:border-amber-800">
                        Yearly
                      </Badge>
                    </div>
                    <div className="text-center my-3">
                      <span className="text-3xl font-bold">$199.99</span>
                      <span className="text-muted-foreground">/year</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">All premium tips</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Detailed analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Email notifications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium">2 months free</span>
                      </li>
                    </ul>
                    <Button 
                      className="w-full"
                      onClick={handleSubscribe}
                    >
                      Subscribe Yearly
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-lg border p-4 bg-background">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <h3 className="font-medium">Money Back Guarantee</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Not satisfied with our premium tips? Get a full refund within 7 days of your subscription.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2 bg-gradient-to-r from-yellow-500 to-amber-500"
                  onClick={handleSubscribe}
                >
                  <Crown className="h-4 w-4" />
                  Unlock Premium Features <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
            
            <div className="flex-1 flex flex-col gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <CardTitle>Premium Success Rate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center h-32">
                    <div className="text-5xl font-bold text-green-500">78%</div>
                    <p className="text-muted-foreground mt-2">Win rate on premium tips last month</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <BellRing className="h-5 w-5 text-primary" />
                    <CardTitle>Premium Benefits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Early access to high-confidence tips</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Detailed match analysis and statistics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>Expert insights from professional tipsters</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>24/7 customer support via email and chat</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PremiumTips;
