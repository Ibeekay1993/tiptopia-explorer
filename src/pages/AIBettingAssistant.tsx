
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageSquare, 
  LucideIcon, 
  TrendingUp, 
  Lightbulb, 
  Shield,
  AlertTriangle,
  Award
} from "lucide-react";
import { toast } from "sonner";

// Mock AI analysis data
const aiRecommendations = [
  {
    id: 1,
    match: "Arsenal vs Liverpool",
    prediction: "Over 2.5 Goals",
    confidence: 87,
    reasoning: "Both teams have averaged 3.2 goals per match in their last 5 games, and 8 out of their last 10 encounters have resulted in over 2.5 goals.",
    risk: "low",
  },
  {
    id: 2,
    match: "Bayern Munich vs Dortmund",
    prediction: "Bayern Munich to Win",
    confidence: 72,
    reasoning: "Bayern has won 7 of their last 8 home matches against Dortmund and has a significantly stronger home record this season.",
    risk: "medium",
  },
  {
    id: 3,
    match: "Barcelona vs Real Madrid",
    prediction: "Both Teams to Score",
    confidence: 91,
    reasoning: "El Clásico has seen both teams score in 9 out of the last 10 matchups. Current attacking form for both teams is exceptional.",
    risk: "low",
  },
  {
    id: 4,
    match: "PSG vs Manchester City",
    prediction: "Draw",
    confidence: 65,
    reasoning: "Both teams are evenly matched in recent form, and their last 3 encounters in similar competitions ended in draws.",
    risk: "high",
  },
];

// Risk level component
const RiskLevel: React.FC<{ level: string }> = ({ level }) => {
  const getRiskData = (risk: string): { icon: LucideIcon; color: string; text: string } => {
    switch (risk) {
      case "low":
        return { 
          icon: Shield, 
          color: "text-green-500 bg-green-100 border-green-200 dark:bg-green-900/30 dark:border-green-800", 
          text: "Low Risk"
        };
      case "medium":
        return { 
          icon: AlertTriangle, 
          color: "text-yellow-500 bg-yellow-100 border-yellow-200 dark:bg-yellow-900/30 dark:border-yellow-800", 
          text: "Medium Risk"
        };
      case "high":
        return { 
          icon: AlertTriangle, 
          color: "text-red-500 bg-red-100 border-red-200 dark:bg-red-900/30 dark:border-red-800", 
          text: "High Risk"
        };
      default:
        return { 
          icon: Shield, 
          color: "text-blue-500 bg-blue-100 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800", 
          text: "Unknown"
        };
    }
  };

  const { icon: Icon, color, text } = getRiskData(level);

  return (
    <Badge variant="outline" className={`${color} px-2 py-1 flex items-center gap-1`}>
      <Icon className="h-3.5 w-3.5" />
      {text}
    </Badge>
  );
};

// AI confidence display
const ConfidenceBar: React.FC<{ value: number }> = ({ value }) => {
  const getColor = (val: number) => {
    if (val >= 80) return "bg-green-500";
    if (val >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">AI Confidence</span>
        <span className="text-sm font-medium">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`h-2.5 rounded-full ${getColor(value)}`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

const AIBettingAssistant = () => {
  const [query, setQuery] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPremium] = useState(false); // In a real app, this would come from auth state

  const handleAsk = () => {
    if (!query.trim()) {
      toast.error("Please enter a question or match details");
      return;
    }

    if (!isPremium) {
      toast({
        title: "Premium Feature",
        description: "AI chat assistance is only available for premium subscribers",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      toast.success("AI analysis complete");
      setIsGenerating(false);
      // In a real app, this would call an API and process the response
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">AI Betting Assistant</h1>
          </div>
          <p className="text-muted-foreground mb-8">
            Advanced AI-powered predictions and personalized betting insights
          </p>

          <Tabs defaultValue="recommendations" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
              <TabsTrigger value="chat">Ask the AI</TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aiRecommendations.map((rec) => (
                  <Card key={rec.id} className="overflow-hidden border-border">
                    <CardHeader className="bg-muted/30 pb-3">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">{rec.match}</CardTitle>
                        <RiskLevel level={rec.risk} />
                      </div>
                      <CardDescription className="mt-2">
                        <Badge className="bg-primary/20 hover:bg-primary/30 text-primary border-none">
                          {rec.prediction}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-3">
                      <ConfidenceBar value={rec.confidence} />
                      
                      <div className="mt-4">
                        <div className="text-sm font-medium mb-1">AI Analysis</div>
                        <p className="text-sm text-muted-foreground">
                          {rec.reasoning}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-muted/30 border-t">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Lightbulb className="h-3.5 w-3.5 mr-1" />
                        Analyzed from 250+ similar matches
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {!isPremium && (
                <Card className="border-dashed border-primary/40 bg-primary/5">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <Award className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Unlock Premium AI Insights</h3>
                    <p className="text-muted-foreground mb-4">
                      Get access to our full AI analysis, personalized recommendations, and more
                    </p>
                    <Button className="gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Upgrade to Premium
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="chat">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Ask the AI Assistant
                  </CardTitle>
                  <CardDescription>
                    Ask specific questions about matches, teams, or betting strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="E.g., Should I bet on Arsenal to win against Chelsea?"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        disabled={isGenerating}
                        className="flex-grow"
                      />
                      <Button 
                        onClick={handleAsk} 
                        disabled={isGenerating || !query.trim()}
                        className="gap-2"
                      >
                        {isGenerating ? "Analyzing..." : "Ask AI"}
                        <Brain className="h-4 w-4" />
                      </Button>
                    </div>

                    {!isPremium && (
                      <div className="p-4 rounded-md bg-primary/10 border border-primary/20 text-center">
                        <p className="font-medium text-primary mb-2">Premium Feature</p>
                        <p className="text-sm text-muted-foreground mb-3">
                          AI chat assistance is available exclusively for premium subscribers
                        </p>
                        <Button size="sm" variant="outline" className="text-primary border-primary/30">
                          Upgrade Now
                        </Button>
                      </div>
                    )}

                    <div className="space-y-2 mt-4">
                      <p className="text-sm text-muted-foreground">Try asking about:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted/50" onClick={() => setQuery("Is Manchester United vs Liverpool likely to have over 2.5 goals?")}>
                          Over/Under predictions
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted/50" onClick={() => setQuery("Which team has the better form, Real Madrid or Barcelona?")}>
                          Team form analysis
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer hover:bg-muted/50" onClick={() => setQuery("What's the best betting strategy for low-risk gains?")}>
                          Betting strategies
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIBettingAssistant;
