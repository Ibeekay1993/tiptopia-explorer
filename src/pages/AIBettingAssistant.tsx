
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Brain, MessageSquare, TrendingUp, Zap, Lock, ChevronRight, User, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const AIBettingAssistant = () => {
  const [isSubscribed] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { 
      role: "ai", 
      content: "Hi there! I'm your AI betting assistant. Ask me about any match, team statistics, or betting strategies."
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory(prev => [...prev, { role: "user", content: message }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          role: "ai", 
          content: "Based on my analysis, Manchester United has a 65% chance of winning their next home game. They've won 7 of their last 10 home matches and their opponent has struggled in away games this season."
        }
      ]);
    }, 1000);
    
    setMessage("");
  };

  const handleUpgrade = () => {
    toast.info("Upgrade Required", {
      description: "Please upgrade to access premium AI features",
    });
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
            Get personalized AI-powered betting insights and recommendations
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="chat" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
                  <TabsTrigger value="chat">AI Chat</TabsTrigger>
                  <TabsTrigger value="recommendations">Today's Recommendations</TabsTrigger>
                </TabsList>
                
                <TabsContent value="chat" className="space-y-4">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="bg-muted/50 rounded-lg p-4 h-[400px] overflow-y-auto mb-4 space-y-4">
                        {chatHistory.map((msg, index) => (
                          <div 
                            key={index} 
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div className={`flex max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                              {msg.role === "ai" && (
                                <Avatar className="h-8 w-8 mr-2">
                                  <AvatarFallback className="bg-primary/20 text-primary">
                                    <Brain className="h-4 w-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                              
                              <div
                                className={`px-4 py-2 rounded-lg text-sm ${
                                  msg.role === "user"
                                    ? "bg-primary text-primary-foreground ml-2"
                                    : "bg-muted"
                                }`}
                              >
                                {msg.content}
                              </div>
                              
                              {msg.role === "user" && (
                                <Avatar className="h-8 w-8 ml-2">
                                  <AvatarFallback className="bg-muted">
                                    <User className="h-4 w-4" />
                                  </AvatarFallback>
                                </Avatar>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Textarea
                          placeholder="Ask the AI about match predictions, team form, or betting strategies..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="resize-none"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                        />
                        <Button onClick={handleSendMessage} className="shrink-0">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Send
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="recommendations" className="space-y-4">
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle>AI-Powered Recommendations</CardTitle>
                      <CardDescription>
                        Our AI has analyzed thousands of matches to bring you today's best bets
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {!isSubscribed ? (
                        <div className="py-8">
                          <div className="bg-muted/50 rounded-lg p-6 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/20"></div>
                            <div className="relative z-10 flex flex-col items-center">
                              <Lock className="h-12 w-12 text-primary mb-4" />
                              <h3 className="text-xl font-bold mb-2">Premium Feature</h3>
                              <p className="text-muted-foreground mb-6 max-w-md">
                                Upgrade to access AI-powered betting recommendations with 75%+ success rate
                              </p>
                              <Button onClick={handleUpgrade} className="gap-2">
                                <Zap className="h-4 w-4" /> Upgrade Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="space-y-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div key={i} className="bg-muted/50 rounded-lg p-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <Badge variant="secondary">Premier League</Badge>
                                      <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                                        85% Confidence
                                      </Badge>
                                    </div>
                                    <h4 className="text-lg font-medium">Manchester City vs Chelsea</h4>
                                    <p className="text-sm text-muted-foreground">Today at 20:00</p>
                                  </div>
                                  <Badge className="bg-primary/10 text-primary border-primary/20">
                                    Man City Win & Over 2.5
                                  </Badge>
                                </div>
                                <div className="mt-2 border-t pt-2">
                                  <p className="text-sm">{`AI Analysis: Manchester City's strong home record combined with Chelsea's defensive issues away from home makes this a high-confidence prediction.`}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-lg dark:from-blue-950/20 dark:to-indigo-950/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <CardTitle>AI Features</CardTitle>
                  </div>
                  <CardDescription>
                    Discover what our AI can do for your betting
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white/80 dark:bg-gray-800/50 p-3 rounded-lg flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI Chat Assistant</h3>
                      <p className="text-sm text-muted-foreground">
                        Ask questions about any match, team or betting strategy
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-gray-800/50 p-3 rounded-lg flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <Brain className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Personalized Tips</h3>
                      <p className="text-sm text-muted-foreground">
                        Get recommendations based on your betting history
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-gray-800/50 p-3 rounded-lg flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Statistical Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Deep data insights to give you the betting edge
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-2" onClick={handleUpgrade}>
                    Unlock Premium AI <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIBettingAssistant;
