
// Utility functions to save and retrieve data from localStorage
// This allows us to persist data without a database

export interface Game {
  id: string;
  match: string;
  league: string;
  date: string;
  time: string;
  prediction: string;
  odds: string;
  confidence: number;
  status?: string;
  result?: string;
}

const GAMES_STORAGE_KEY = 'tiptopia_games';
const BETS_STORAGE_KEY = 'tiptopia_bets';
const TIPS_STORAGE_KEY = 'tiptopia_tips';

export const saveGames = (games: Game[]): void => {
  localStorage.setItem(GAMES_STORAGE_KEY, JSON.stringify(games));
};

export const getGames = (): Game[] => {
  const gamesData = localStorage.getItem(GAMES_STORAGE_KEY);
  return gamesData ? JSON.parse(gamesData) : [];
};

export const addGame = (game: Game): void => {
  const games = getGames();
  games.push({
    ...game,
    id: crypto.randomUUID()
  });
  saveGames(games);
};

export const updateGame = (gameId: string, updatedGame: Partial<Game>): void => {
  const games = getGames();
  const updatedGames = games.map(game => 
    game.id === gameId ? { ...game, ...updatedGame } : game
  );
  saveGames(updatedGames);
};

export const deleteGame = (gameId: string): void => {
  const games = getGames();
  const filteredGames = games.filter(game => game.id !== gameId);
  saveGames(filteredGames);
};

export const setBetOfTheDay = (gameId: string): void => {
  const games = getGames();
  const selectedGame = games.find(game => game.id === gameId);
  if (selectedGame) {
    localStorage.setItem(BETS_STORAGE_KEY, JSON.stringify(selectedGame));
  }
};

export const getBetOfTheDay = (): Game | null => {
  const betData = localStorage.getItem(BETS_STORAGE_KEY);
  return betData ? JSON.parse(betData) : null;
};

export const savePremiumTips = (tips: Game[]): void => {
  localStorage.setItem(TIPS_STORAGE_KEY, JSON.stringify(tips));
};

export const getPremiumTips = (): Game[] => {
  const tipsData = localStorage.getItem(TIPS_STORAGE_KEY);
  return tipsData ? JSON.parse(tipsData) : [];
};

export const addPremiumTip = (tip: Game): void => {
  const tips = getPremiumTips();
  tips.push({
    ...tip,
    id: crypto.randomUUID()
  });
  savePremiumTips(tips);
};
