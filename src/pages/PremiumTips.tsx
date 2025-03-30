
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Lock, 
  TrendingUp, 
  Crown, 
  Star, 
  Clock, 
  Calendar, 
  Filter,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { toast } from "sonner";
import { tips } from "@/data/tips";

const PremiumTips = () => {
  const [subscriptionStatus] = useState<"free" | "pro" | "vip">("free");
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("today");
  
  // Mock premium tips - in a real app, this would be fetched from an API
  const premiumTips = tips.slice(0, 6).map(tip => ({
    ...tip,
    isPremium: true,
    winProbability: Math.floor(Math.random() * 25) + 75, // 75-99%
    analysis: "Advanced statistical analysis shows strong value in this selection based on recent form, head-to-head records, and current team news.",
    vipOnly: tip.id % 3 === 0,
  }));
  
  const isLocked = (tipVipOnly: boolean) => {
    if (tipVipOnly && subscriptionStatus !== "vip") return true;
    if (subscriptionStatus === "free") return true;
    return false;
  };
  
  const handleUpgrade = () => {
    toast({
      title: "Upgrade Required",
      description: "Please upgrade to access premium betting tips",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="h-6 w-6 text-yellow-500" />
            <h1 className="text-3xl font-bold">Premium Betting Tips</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Exclusive high-value predictions available only to premium subscribers
          </p>
          
          {subscriptionStatus === "free" && (
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 mb-8 border-primary/20">
              <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Unlock Premium Tips</h3>
                  <p className="text-muted-foreground max-w-md">
                    Subscribe to our premium service to access expert betting tips with 75%+ win rate
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2 border-primary/30 text-primary" onClick={handleUpgrade}>
                    <Crown className="h-4 w-4" />
                    Pro Plan
                  </Button>
                  <Button className="gap-2 bg-gradient-to-r from-primary to-blue-500" onClick={handleUpgrade}>
                    <Star className="h-4 w-4 fill-white" />
                    VIP Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <Tabs 
              defaultValue="today" 
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full md:w-auto"
            >
              <TabsList className="grid w-full md:w-auto grid-cols-3">
                <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 w-full md:w-auto"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
              {showFilters ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          {showFilters && (
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Sports</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer">Football</Badge>
                      <Badge variant="outline" className="cursor-pointer">Basketball</Badge>
                      <Badge variant="outline" className="cursor-pointer">Tennis</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Confidence</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer">75%+</Badge>
                      <Badge variant="outline" className="cursor-pointer">85%+</Badge>
                      <Badge variant="outline" className="cursor-pointer">90%+</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Bet Type</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer">Match Result</Badge>
                      <Badge variant="outline" className="cursor-pointer">Over/Under</Badge>
                      <Badge variant="outline" className="cursor-pointer">Both Teams to Score</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {premiumTips.map((tip) => (
              <Card key={tip.id} className={`overflow-hidden border-border relative ${isLocked(tip.vipOnly) ? 'opacity-90' : ''}`}>
                {isLocked(tip.vipOnly) && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
                    <div className="text-center space-y-3 p-6">
                      <Lock className="h-10 w-10 mx-auto text-primary" />
                      <h3 className="text-lg font-semibold">
                        {tip.vipOnly ? 'VIP Access Required' : 'Premium Content'}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {tip.vipOnly 
                          ? 'This premium tip is available exclusively to VIP members' 
                          : 'Upgrade to unlock premium betting tips'}
                      </p>
                      <Button 
                        size="sm" 
                        onClick={handleUpgrade}
                        className="gap-2"
                      >
                        <TrendingUp className="h-4 w-4" />
                        Upgrade Now
                      </Button>
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-3 space-y-0">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-yellow-100 text-yellow-700 mb-2 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800">
                      PREMIUM
                    </Badge>
                    
                    <div className="flex items-center">
                      <Badge variant="outline" className="gap-1 bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                        <TrendingUp className="h-3 w-3" />
                        {tip.winProbability}% Win Probability
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(tip.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {tip.time}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg mt-3">{tip.match}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Badge variant="outline" className="mr-2">
                      {tip.league}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {tip.sport.charAt(0).toUpperCase() + tip.sport.slice(1)}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-3">
                  <div className="p-3 rounded-md bg-primary/10 border border-primary/20 font-semibold text-primary text-center mb-4">
                    {tip.prediction}
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-1">Premium Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      {tip.analysis}
                    </p>
                  </div>
                </CardContent>
                
                <CardFooter className="bg-muted/30 border-t flex justify-between items-center">
                  <div className="text-sm font-medium">
                    <span className="text-muted-foreground mr-1">Odds:</span> 
                    {tip.odds}
                  </div>
                  
                  {tip.vipOnly && (
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800">
                      VIP Only
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PremiumTips;
