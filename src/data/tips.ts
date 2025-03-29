
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

export const tips: Tip[] = [
  {
    id: '1',
    match: 'Manchester United vs Liverpool',
    league: 'Premier League',
    prediction: 'Over 2.5 Goals',
    odds: 1.91,
    confidence: 85,
    date: '2023-09-15',
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
    date: '2023-09-15',
    time: '20:00',
    status: 'Won',
    sport: 'soccer',
    isPremium: false
  },
  {
    id: '3',
    match: 'PSG vs Bayern Munich',
    league: 'Champions League',
    prediction: 'Home Win',
    odds: 2.10,
    confidence: 75,
    date: '2023-09-16',
    time: '20:00',
    status: 'Lost',
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
    date: '2023-09-16',
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
    date: '2023-09-17',
    time: '14:00',
    status: 'Pending',
    sport: 'tennis',
    isPremium: true
  },
  {
    id: '6',
    match: 'Toronto Maple Leafs vs Montreal Canadiens',
    league: 'NHL',
    prediction: 'Under 5.5 Goals',
    odds: 1.95,
    confidence: 65,
    date: '2023-09-17',
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
    date: '2023-09-18',
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
    date: '2023-09-18',
    time: '19:00',
    status: 'Pending',
    sport: 'basketball',
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
