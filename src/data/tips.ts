
export interface Tip {
  id: string;
  match: string;
  league: string;
  prediction: string;
  odds: number;
  confidence: number;
  date: string;
  time: string;
  status: 'Pending' | 'Won' | 'Lost';
  sport: 'soccer' | 'basketball' | 'tennis' | 'hockey';
  isPremium: boolean;
}

// Helper function to get formatted dates
const getFormattedDate = (dayOffset: number = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString().split('T')[0];
};

const today = getFormattedDate();
const yesterday = getFormattedDate(-1);
const tomorrow = getFormattedDate(1);

export const tips: Tip[] = [
  // Yesterday's tips
  {
    id: '1',
    match: 'Manchester United vs Liverpool',
    league: 'Premier League',
    prediction: 'Over 2.5 Goals',
    odds: 1.91,
    confidence: 85,
    date: yesterday,
    time: '15:00',
    status: 'Won',
    sport: 'soccer',
    isPremium: false
  },
  {
    id: '2',
    match: 'Real Madrid vs Barcelona',
    league: 'La Liga',
    prediction: 'Both Teams to Score',
    odds: 1.75,
    confidence: 90,
    date: yesterday,
    time: '20:00',
    status: 'Won',
    sport: 'soccer',
    isPremium: false
  },
  
  // Today's tips
  {
    id: '3',
    match: 'PSG vs Bayern Munich',
    league: 'Champions League',
    prediction: 'Home Win',
    odds: 2.10,
    confidence: 75,
    date: today,
    time: '20:00',
    status: 'Pending',
    sport: 'soccer',
    isPremium: false
  },
  {
    id: '4',
    match: 'LA Lakers vs Golden State Warriors',
    league: 'NBA',
    prediction: 'Away Win',
    odds: 2.50,
    confidence: 80,
    date: today,
    time: '19:30',
    status: 'Pending',
    sport: 'basketball',
    isPremium: true
  },
  {
    id: '5',
    match: 'Roger Federer vs Rafael Nadal',
    league: 'ATP Tour',
    prediction: 'Over 3.5 Sets',
    odds: 1.85,
    confidence: 70,
    date: today,
    time: '14:00',
    status: 'Pending',
    sport: 'tennis',
    isPremium: true
  },
  
  // Tomorrow's tips
  {
    id: '6',
    match: 'Toronto Maple Leafs vs Montreal Canadiens',
    league: 'NHL',
    prediction: 'Under 5.5 Goals',
    odds: 1.95,
    confidence: 65,
    date: tomorrow,
    time: '19:00',
    status: 'Pending',
    sport: 'hockey',
    isPremium: false
  },
  {
    id: '7',
    match: 'Juventus vs AC Milan',
    league: 'Serie A',
    prediction: 'Draw',
    odds: 3.20,
    confidence: 60,
    date: tomorrow,
    time: '20:45',
    status: 'Pending',
    sport: 'soccer',
    isPremium: false
  },
  {
    id: '8',
    match: 'Boston Celtics vs Brooklyn Nets',
    league: 'NBA',
    prediction: 'Over 220.5 Points',
    odds: 1.90,
    confidence: 75,
    date: tomorrow,
    time: '19:00',
    status: 'Pending',
    sport: 'basketball',
    isPremium: true
  },
  
  // Additional tips for tomorrow
  {
    id: '9',
    match: 'Arsenal vs Tottenham',
    league: 'Premier League',
    prediction: 'Both Teams to Score',
    odds: 1.80,
    confidence: 82,
    date: tomorrow,
    time: '15:30',
    status: 'Pending',
    sport: 'soccer',
    isPremium: false
  },
  {
    id: '10',
    match: 'Novak Djokovic vs Carlos Alcaraz',
    league: 'Wimbledon',
    prediction: 'Djokovic to Win',
    odds: 2.25,
    confidence: 78,
    date: tomorrow,
    time: '13:00',
    status: 'Pending',
    sport: 'tennis',
    isPremium: true
  }
];

export interface Statistic {
  name: string;
  value: string | number;
  icon: string;
}

export const userStats: Statistic[] = [
  {
    name: 'Success Rate',
    value: '68%',
    icon: 'trending-up'
  },
  {
    name: 'Tips Used',
    value: 142,
    icon: 'check-circle'
  },
  {
    name: 'Profit',
    value: '+$1,250',
    icon: 'dollar-sign'
  },
  {
    name: 'Days Active',
    value: 87,
    icon: 'calendar'
  }
];

export interface MenuItem {
  name: string;
  icon: string;
  route: string;
}

export const menuItems: MenuItem[] = [
  {
    name: 'Settings',
    icon: 'settings',
    route: '/settings'
  },
  {
    name: 'Subscriptions',
    icon: 'credit-card',
    route: '/subscriptions'
  },
  {
    name: 'Bookmarks',
    icon: 'bookmark',
    route: '/bookmarks'
  },
  {
    name: 'Notifications',
    icon: 'bell',
    route: '/notifications'
  },
  {
    name: 'Help & Support',
    icon: 'help-circle',
    route: '/support'
  }
];
