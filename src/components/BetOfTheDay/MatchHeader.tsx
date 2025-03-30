
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, TrendingUp, Sparkles } from "lucide-react";

interface MatchHeaderProps {
  match: string;
  league: string;
  date: string;
  time: string;
  odds: number;
  confidence: number;
  prediction: string;
  handleBackBet: () => void;
}

export function MatchHeader({
  match,
  league,
  date,
  time,
  odds,
  confidence,
  prediction,
  handleBackBet
}: MatchHeaderProps) {
  return (
    <>
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
      
      <CardHeader className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <CardDescription>{date} | {time}</CardDescription>
            </div>
            <CardTitle className="text-2xl md:text-3xl mt-2 animate-fade-in">{match}</CardTitle>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="mr-2 bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                {league}
              </Badge>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">{confidence}% Confidence</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-muted-foreground mb-1">Odds</div>
            <div className="text-3xl font-bold text-primary animate-pulse">{odds}</div>
            <Button 
              onClick={handleBackBet}
              className="mt-2 bg-green-500 hover:bg-green-600 text-white"
              size="sm"
            >
              Back This Bet
            </Button>
          </div>
        </div>
        
        <div className="mb-6 mt-4">
          <div className="text-sm font-medium text-muted-foreground mb-1">PREDICTION</div>
          <div className="p-3 rounded-md bg-primary/10 border border-primary/20 font-semibold text-primary text-center">
            {prediction}
          </div>
        </div>
      </CardHeader>
    </>
  );
}
