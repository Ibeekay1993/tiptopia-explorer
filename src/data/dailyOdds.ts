
// Helper function to get formatted dates
const getFormattedDate = (dayOffset: number = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString().split('T')[0];
};

const today = getFormattedDate();
const yesterday = getFormattedDate(-1);
const tomorrow = getFormattedDate(1);

export interface DailyOdd {
  id: string;
  league: string;
  match: string;
  prediction: string;
  day: 'yesterday' | 'today' | 'tomorrow';
  date: string;
}

export const dailyOdds: DailyOdd[] = [
  // Yesterday's odds
  {
    id: '1',
    league: 'Premier League',
    match: 'Manchester United vs Liverpool',
    prediction: '1X',
    day: 'yesterday',
    date: yesterday
  },
  {
    id: '2',
    league: 'La Liga',
    match: 'Real Madrid vs Barcelona',
    prediction: '1',
    day: 'yesterday',
    date: yesterday
  },
  {
    id: '3',
    league: 'Serie A',
    match: 'Inter Milan vs Juventus',
    prediction: 'BTTS',
    day: 'yesterday',
    date: yesterday
  },
  {
    id: '4',
    league: 'Bundesliga',
    match: 'Bayern Munich vs Borussia Dortmund',
    prediction: 'Over 2.5',
    day: 'yesterday',
    date: yesterday
  },
  
  // Today's odds
  {
    id: '5',
    league: 'Ligue 1',
    match: 'AS Saint Etienne vs Paris Saint Germain',
    prediction: '2',
    day: 'today',
    date: today
  },
  {
    id: '6',
    league: 'Bundesliga',
    match: 'Bayern Munich vs FC St. Pauli',
    prediction: '1',
    day: 'today',
    date: today
  },
  {
    id: '7',
    league: 'Premier League',
    match: 'Chelsea vs Arsenal',
    prediction: 'X',
    day: 'today',
    date: today
  },
  {
    id: '8',
    league: 'Serie A',
    match: 'AC Milan vs AS Roma',
    prediction: '1',
    day: 'today',
    date: today
  },
  
  // Tomorrow's odds
  {
    id: '9',
    league: 'Champions League',
    match: 'Real Madrid vs Manchester City',
    prediction: 'BTTS',
    day: 'tomorrow',
    date: tomorrow
  },
  {
    id: '10',
    league: 'Europa League',
    match: 'Arsenal vs FC Porto',
    prediction: '1',
    day: 'tomorrow',
    date: tomorrow
  },
  {
    id: '11',
    league: 'Premier League',
    match: 'Tottenham vs Newcastle',
    prediction: 'Over 2.5',
    day: 'tomorrow',
    date: tomorrow
  },
  {
    id: '12',
    league: 'La Liga',
    match: 'Atletico Madrid vs Sevilla',
    prediction: '1X',
    day: 'tomorrow',
    date: tomorrow
  }
];
