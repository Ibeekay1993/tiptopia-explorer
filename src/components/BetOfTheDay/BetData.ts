
// This file contains the mock data structure for the Bet of the Day

export interface BetOfDayData {
  match: string;
  league: string;
  date: string;
  time: string;
  prediction: string;
  odds: number;
  confidence: number;
  analysis: string;
  detailedAnalysis: string;
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  additionalStats: {
    homeAttack: number;
    homeDefense: number;
    awayAttack: number;
    awayDefense: number;
    expectedGoals: number;
    winProbability: {
      home: number;
      draw: number;
      away: number;
    };
  };
  teamStats: {
    home: {
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
    };
    away: {
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
    };
  };
}

// Mock data for the Bet of the Day
export const mockBetOfDayData: BetOfDayData = {
  match: "Manchester City vs Chelsea",
  league: "Premier League",
  date: new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
  time: "20:00",
  prediction: "Manchester City Win & Over 2.5",
  odds: 2.25,
  confidence: 92,
  analysis: "Manchester City have been in excellent form at home, winning their last 7 matches and scoring at least 2 goals in each. Chelsea have struggled defensively away from home, conceding in 9 of their last 10 away games.",
  detailedAnalysis: "Manchester City's attacking prowess at the Etihad Stadium has been formidable this season, with an average of 3.2 goals per home game. Their defensive solidity has also improved, conceding just 0.8 goals per game at home. Chelsea, while dangerous on counter-attacks, have shown vulnerability when pressed high, conceding an average of 1.7 goals in away fixtures. The tactical matchup favors City, whose high-possession style should create numerous scoring opportunities against Chelsea's transitional defense.",
  stats: [
    { label: "Head-to-Head", value: "City won 6 of last 8", detail: "Manchester City have dominated this fixture in recent years, winning 6 and drawing 1 of their last 8 meetings. The average number of goals in these matches is 3.1." },
    { label: "Goals", value: "Over 2.5 in 80% of matches", detail: "In their respective league matches this season, over 2.5 goals have occurred in 82% of Manchester City's home games and 75% of Chelsea's away fixtures." },
    { label: "Form", value: "City: WWWWD, Chelsea: WDLWL", detail: "Manchester City are unbeaten in their last 12 matches in all competitions, winning 10. Chelsea have been inconsistent, winning only 5 of their last 10 matches." }
  ],
  additionalStats: {
    homeAttack: 3.2,
    homeDefense: 0.8,
    awayAttack: 1.5,
    awayDefense: 1.7,
    expectedGoals: 3.2,
    winProbability: {
      home: 65,
      draw: 20,
      away: 15
    }
  },
  teamStats: {
    home: {
      name: "Manchester City",
      form: ["W", "W", "W", "W", "D"],
      lastGames: [
        { opponent: "Liverpool", result: "W", score: "3-1" },
        { opponent: "Arsenal", result: "W", score: "2-0" },
        { opponent: "Tottenham", result: "W", score: "4-1" },
        { opponent: "Newcastle", result: "W", score: "2-0" },
        { opponent: "Aston Villa", result: "D", score: "1-1" }
      ],
      topScorers: [
        { name: "Erling Haaland", goals: 22 },
        { name: "Phil Foden", goals: 14 },
        { name: "Kevin De Bruyne", goals: 8 }
      ]
    },
    away: {
      name: "Chelsea",
      form: ["W", "D", "L", "W", "L"],
      lastGames: [
        { opponent: "Brentford", result: "W", score: "2-0" },
        { opponent: "Fulham", result: "D", score: "1-1" },
        { opponent: "Manchester United", result: "L", score: "1-2" },
        { opponent: "Everton", result: "W", score: "3-0" },
        { opponent: "Brighton", result: "L", score: "1-3" }
      ],
      topScorers: [
        { name: "Nicolas Jackson", goals: 12 },
        { name: "Cole Palmer", goals: 11 },
        { name: "Raheem Sterling", goals: 7 }
      ]
    }
  }
};
