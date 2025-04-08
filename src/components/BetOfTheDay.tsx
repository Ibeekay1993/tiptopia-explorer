
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Trophy, Calendar, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockBetOfDayData } from "@/components/BetOfTheDay/BetData";

export function BetOfTheDay() {
  const navigate = useNavigate();
  
  // Use the same data as the detailed page for consistency
  const todaysBet = mockBetOfDayData;

  const handleViewFullAnalysis = () => {
    navigate('/bet-of-the-day');
  };

  return (
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
        
        <Card className="overflow-hidden border-none shadow-xl bg-background/90 backdrop-blur-sm group hover:shadow-2xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-32 -mt-32 z-0 group-hover:from-primary/20 transition-all duration-300"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full -ml-32 -mb-32 z-0 group-hover:from-blue-500/20 transition-all duration-300"></div>
          
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
          
          <CardContent className="relative z-10 pb-4">
            <div className="p-3 rounded-md border border-primary/20 text-center">
              <p className="text-muted-foreground mb-2">Our expert analysts have a high-confidence prediction for this match</p>
              <Button 
                className="gap-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 transition-all duration-300"
                onClick={handleViewFullAnalysis}
              >
                View Full Analysis <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
          
          <CardFooter className="relative z-10 flex justify-center items-center bg-muted/30 border-t">
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
      </div>
    </div>
  );
};
