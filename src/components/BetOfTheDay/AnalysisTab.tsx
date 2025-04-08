
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
    <div className="space-y-6 animate-fade-in">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-5 rounded-lg border border-blue-200 dark:border-blue-800 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h3 className="font-semibold text-blue-700 dark:text-blue-300">Key Insights</h3>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{analysis}</p>
        <hr className="border-blue-200/50 dark:border-blue-800/50" />
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{detailedAnalysis}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-5 rounded-lg border border-green-200 dark:border-green-800 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart className="h-5 w-5 text-green-600 dark:text-green-400" />
            <h3 className="font-semibold text-green-700 dark:text-green-300">Performance Metrics</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Man City Attack</span>
                <span className="font-bold text-green-600 dark:text-green-400">{animatedValues.homeAttack.toFixed(1)}</span>
              </div>
              <Progress value={animatedValues.homeAttack * 25} className="h-2 bg-green-200 dark:bg-green-800">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
              </Progress>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Man City Defense</span>
                <span className="font-bold text-green-600 dark:text-green-400">{animatedValues.homeDefense.toFixed(1)}</span>
              </div>
              <Progress value={(4 - animatedValues.homeDefense) * 25} className="h-2 bg-green-200 dark:bg-green-800">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
              </Progress>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Chelsea Attack</span>
                <span className="font-bold text-green-600 dark:text-green-400">{animatedValues.awayAttack.toFixed(1)}</span>
              </div>
              <Progress value={animatedValues.awayAttack * 25} className="h-2 bg-green-200 dark:bg-green-800">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
              </Progress>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Chelsea Defense</span>
                <span className="font-bold text-green-600 dark:text-green-400">{animatedValues.awayDefense.toFixed(1)}</span>
              </div>
              <Progress value={(4 - animatedValues.awayDefense) * 25} className="h-2 bg-green-200 dark:bg-green-800">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
              </Progress>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 p-5 rounded-lg border border-purple-200 dark:border-purple-800 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <LineChart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <h3 className="font-semibold text-purple-700 dark:text-purple-300">Match Prediction</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Man City Win</span>
                <span className="font-bold text-green-600 dark:text-green-400">{animatedValues.probHome}%</span>
              </div>
              <div className="w-full bg-purple-200 dark:bg-purple-800 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${animatedValues.probHome}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Draw</span>
                <span className="font-bold text-yellow-600 dark:text-yellow-400">{animatedValues.probDraw}%</span>
              </div>
              <div className="w-full bg-purple-200 dark:bg-purple-800 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${animatedValues.probDraw}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">Chelsea Win</span>
                <span className="font-bold text-red-600 dark:text-red-400">{animatedValues.probAway}%</span>
              </div>
              <div className="w-full bg-purple-200 dark:bg-purple-800 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-500 to-rose-500 h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${animatedValues.probAway}%` }}
                ></div>
              </div>
            </div>
            
            <div className="pt-2 flex items-center justify-center">
              <div className="text-center bg-violet-100 dark:bg-violet-900/40 px-6 py-2 rounded-full">
                <div className="text-sm text-gray-700 dark:text-gray-300">Expected Goals</div>
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">{animatedValues.xg.toFixed(1)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
