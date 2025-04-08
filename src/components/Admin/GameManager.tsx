
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Game, addGame, getGames, deleteGame, setBetOfTheDay, addPremiumTip } from "@/utils/localStorageUtils";

export function GameManager() {
  const [games, setGames] = useState<Game[]>([]);
  const [newGame, setNewGame] = useState<Omit<Game, 'id'>>({
    match: '',
    league: '',
    date: '',
    time: '',
    prediction: '',
    odds: '',
    confidence: 70,
  });
  const { toast } = useToast();

  useEffect(() => {
    // Load games from localStorage
    setGames(getGames());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewGame(prev => ({
      ...prev,
      [name]: name === 'confidence' ? Number(value) : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setNewGame(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddGame = () => {
    if (!newGame.match || !newGame.prediction) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Add the game to localStorage
    addGame(newGame as Game);
    
    // Refresh the games list
    setGames(getGames());
    
    // Reset the form
    setNewGame({
      match: '',
      league: '',
      date: '',
      time: '',
      prediction: '',
      odds: '',
      confidence: 70,
    });

    toast({
      title: "Game added successfully",
      description: "The game has been added to the system.",
    });
  };

  const handleDeleteGame = (id: string) => {
    deleteGame(id);
    setGames(getGames());
    toast({
      title: "Game deleted",
      description: "The game has been removed from the system.",
    });
  };

  const handleSetBetOfTheDay = (id: string) => {
    setBetOfTheDay(id);
    toast({
      title: "Bet of the day updated",
      description: "This game is now the bet of the day.",
    });
  };

  const handleAddToPremiumTips = (game: Game) => {
    addPremiumTip(game);
    toast({
      title: "Added to premium tips",
      description: "This game has been added to premium tips.",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Game Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="add">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="add">Add New Game</TabsTrigger>
            <TabsTrigger value="manage">Manage Games</TabsTrigger>
          </TabsList>

          <TabsContent value="add" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="match">Match</Label>
                <Input
                  id="match"
                  name="match"
                  value={newGame.match}
                  onChange={handleInputChange}
                  placeholder="Team A vs Team B"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="league">League</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('league', value)}
                  value={newGame.league}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select league" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Premier League">Premier League</SelectItem>
                    <SelectItem value="La Liga">La Liga</SelectItem>
                    <SelectItem value="Bundesliga">Bundesliga</SelectItem>
                    <SelectItem value="Serie A">Serie A</SelectItem>
                    <SelectItem value="Ligue 1">Ligue 1</SelectItem>
                    <SelectItem value="Champions League">Champions League</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={newGame.date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={newGame.time}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="prediction">Prediction</Label>
                <Select 
                  onValueChange={(value) => handleSelectChange('prediction', value)}
                  value={newGame.prediction}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select prediction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Home Win">Home Win</SelectItem>
                    <SelectItem value="Away Win">Away Win</SelectItem>
                    <SelectItem value="Draw">Draw</SelectItem>
                    <SelectItem value="BTTS">Both Teams To Score</SelectItem>
                    <SelectItem value="Over 2.5">Over 2.5 Goals</SelectItem>
                    <SelectItem value="Under 2.5">Under 2.5 Goals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="odds">Odds</Label>
                <Input
                  id="odds"
                  name="odds"
                  value={newGame.odds}
                  onChange={handleInputChange}
                  placeholder="2.10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confidence">Confidence (%)</Label>
                <Input
                  id="confidence"
                  name="confidence"
                  type="number"
                  min="1"
                  max="100"
                  value={newGame.confidence}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Button onClick={handleAddGame}>Add Game</Button>
            </div>
          </TabsContent>

          <TabsContent value="manage">
            {games.length > 0 ? (
              <div className="space-y-4">
                {games.map((game) => (
                  <Card key={game.id} className="relative overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{game.match}</h3>
                          <div className="text-sm text-muted-foreground">
                            {game.league} - {game.date} {game.time}
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Prediction:</span> {game.prediction}
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Odds:</span> {game.odds}
                          </div>
                          <div className="text-sm">
                            <span className="font-medium">Confidence:</span> {game.confidence}%
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleSetBetOfTheDay(game.id)}
                          >
                            Set as Bet of Day
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleAddToPremiumTips(game)}
                          >
                            Add to Premium Tips
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteGame(game.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center p-8 text-muted-foreground">
                No games added yet. Add a game first.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
