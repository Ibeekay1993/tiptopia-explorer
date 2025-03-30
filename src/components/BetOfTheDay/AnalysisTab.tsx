
import React from 'react';
import { BarChart, Target, LineChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AnimatedValues {
  homeAttack: number;
  homeDefense: number;
  awayAttack: number;
  awayDefense: number;
  xg: number;
  probHome: number;
  probDraw: number;
  probAway: number;
}

interface AnalysisTabProps {
  analysis: string;
  detailedAnalysis: string;
  animatedValues: AnimatedValues;
}

export function AnalysisTab({ analysis, detailedAnalysis, animatedValues }: AnalysisTabProps) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="bg-muted/50 p-4 rounded-md space-y-3">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Key Insights</h3>
        </div>
        <p className="text-sm">{analysis}</p>
        <hr className="border-muted-foreground/20" />
        <p className="text-sm">{detailedAnalysis}</p>
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
  );
}
