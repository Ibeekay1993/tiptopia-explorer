
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { User, Calendar, Flag } from "lucide-react";

interface TeamStat {
  name: string;
  form: string[];
  lastGames: {
    opponent: string;
    result: string;
    score: string;
  }[];
  topScorers: {
    name: string;
    goals: number;
  }[];
}

interface TeamStatsTabProps {
  homeTeam: TeamStat;
  awayTeam: TeamStat;
}

export function TeamStatsTab({ homeTeam, awayTeam }: TeamStatsTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <TeamStatCard team={homeTeam} isHome={true} />
      <TeamStatCard team={awayTeam} isHome={false} />
    </div>
  );
}

function TeamStatCard({ team, isHome }: { team: TeamStat, isHome: boolean }) {
  const bgGradient = isHome 
    ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-blue-200 dark:border-blue-800" 
    : "bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 border-purple-200 dark:border-purple-800";
  
  const titleBg = isHome 
    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200" 
    : "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200";

  return (
    <div className={`p-5 rounded-lg border shadow-sm ${bgGradient}`}>
      <h3 className={`font-semibold text-center mb-5 py-2 px-4 rounded-md ${titleBg} inline-block mx-auto w-full`}>
        {team.name}
      </h3>
      
      <div className="space-y-5">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium mb-3">
            <Calendar className="h-4 w-4" /> 
            <span className="text-gray-700 dark:text-gray-300">Recent Form</span>
          </div>
          <div className="flex gap-1 justify-center">
            {team.form.map((result, i) => (
              <div 
                key={i} 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-sm
                  ${result === 'W' ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 
                  result === 'D' ? 'bg-gradient-to-br from-yellow-400 to-amber-500' : 
                  'bg-gradient-to-br from-red-500 to-rose-600'}`}
              >
                {result}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/50 dark:bg-black/5 rounded-md p-3">
          <div className="flex items-center gap-2 text-sm font-medium mb-3">
            <Flag className="h-4 w-4" />
            <span className="text-gray-700 dark:text-gray-300">Last 5 Games</span>
          </div>
          <div className="space-y-2">
            {team.lastGames.map((game, i) => (
              <div key={i} className="flex justify-between items-center text-sm p-2 bg-white/50 dark:bg-white/5 rounded-md">
                <span className="text-gray-700 dark:text-gray-300">vs {game.opponent}</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{game.score}</span>
                  <Badge 
                    className={`px-1.5 rounded text-xs font-medium
                      ${game.result === 'W' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200' : 
                      game.result === 'D' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 hover:bg-yellow-200' : 
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-200'}`}
                    variant="outline"
                  >
                    {game.result}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/50 dark:bg-black/5 rounded-md p-3">
          <div className="flex items-center gap-2 text-sm font-medium mb-3">
            <User className="h-4 w-4" />
            <span className="text-gray-700 dark:text-gray-300">Top Scorers</span>
          </div>
          <div className="space-y-2">
            {team.topScorers.map((scorer, i) => (
              <div key={i} className="flex justify-between items-center text-sm p-2 bg-white/50 dark:bg-white/5 rounded-md">
                <span className="text-gray-700 dark:text-gray-300">{scorer.name}</span>
                <span className="font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-800 dark:text-gray-200">
                  {scorer.goals} goals
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
