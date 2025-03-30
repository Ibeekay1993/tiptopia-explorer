
import React from 'react';
import { Badge } from "@/components/ui/badge";

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
      <TeamStatCard team={homeTeam} />
      <TeamStatCard team={awayTeam} />
    </div>
  );
}

function TeamStatCard({ team }: { team: TeamStat }) {
  return (
    <div className="bg-muted/50 p-4 rounded-md">
      <h3 className="font-medium text-center mb-4">{team.name}</h3>
      
      <div className="space-y-4">
        <div>
          <div className="text-sm font-medium mb-2">Recent Form</div>
          <div className="flex gap-1 justify-center">
            {team.form.map((result, i) => (
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
            {team.lastGames.map((game, i) => (
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
            {team.topScorers.map((scorer, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span>{scorer.name}</span>
                <span>{scorer.goals} goals</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
