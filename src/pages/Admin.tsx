
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PlusCircle, 
  Save, 
  Trash2, 
  Shield, 
  AlertCircle,
  Check,
  X,
  CalendarClock,
  Calendar,
  TrendingUp,
  Trophy,
  BarChart4,
  Crown,
  FootballIcon,
  Database
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { dailyOdds, DailyOdd } from "@/data/dailyOdds";

// Helper function to get formatted date based on day selection
const getFormattedDate = (dayOffset: number = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString().split('T')[0];
};

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(true); // In a real app, this would be determined by authentication
  const [newOdd, setNewOdd] = useState<Omit<DailyOdd, 'id'>>({
    league: "",
    match: "",
    prediction: "",
    day: "today",
    date: getFormattedDate(0) // Current date by default
  });
  const [existingOdds, setExistingOdds] = useState<DailyOdd[]>([...dailyOdds]);
  const [activeTab, setActiveTab] = useState("daily-odds");
  const [betOfDay, setBetOfDay] = useState({
    match: "Manchester City vs Chelsea",
    league: "Premier League",
    prediction: "Manchester City to Win & Over 2.5",
    odds: "2.25",
    confidence: "92"
  });
  
  // Update date when day changes
  useEffect(() => {
    let dateOffset = 0;
    if (newOdd.day === "yesterday") dateOffset = -1;
    else if (newOdd.day === "tomorrow") dateOffset = 1;
    
    setNewOdd(prev => ({
      ...prev,
      date: getFormattedDate(dateOffset)
    }));
  }, [newOdd.day]);
  
  const handleAddOdd = () => {
    if (!newOdd.league || !newOdd.match || !newOdd.prediction) {
      toast.error("Please fill in all fields", {
        description: "League, match and prediction are required"
      });
      return;
    }

    const newOddWithId: DailyOdd = {
      ...newOdd,
      id: `odd-${Date.now()}`
    };

    setExistingOdds(prev => [newOddWithId, ...prev]);
    
    toast.success("New odds added successfully!", {
      description: `${newOdd.match} has been added to ${newOdd.day}'s odds`
    });
    
    // Reset form
    setNewOdd({
      league: "",
      match: "",
      prediction: "",
      day: newOdd.day,
      date: newOdd.date
    });
  };

  const handleRemoveOdd = (id: string) => {
    setExistingOdds(prev => prev.filter(odd => odd.id !== id));
    toast.success("Odds removed successfully", {
      description: "The odds have been deleted from the system"
    });
  };

  const handleUpdateBetOfDay = () => {
    toast.success("Bet of the Day updated successfully", {
      description: "The changes have been saved"
    });
  };
  
  // For demo purposes only - in a real app this would be handled by authentication
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-16 flex items-center justify-center">
          <Card className="w-full max-w-md border-destructive">
            <CardHeader className="bg-destructive/10 gap-2">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>
                You don't have permission to access this page. Please sign in as an admin.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-4">
              <Button 
                onClick={() => setIsAdmin(true)} 
                className="w-full gap-2"
              >
                <Shield className="h-4 w-4" />
                Demo: Override Access (Development Only)
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1 flex items-center">
                Admin Dashboard <Shield className="ml-2 h-5 w-5 text-primary" />
              </h1>
              <p className="text-muted-foreground">
                Manage betting tips, odds, and user accounts
              </p>
            </div>
            <Badge variant="outline" className="px-3 py-1 bg-primary/10 border-primary/30 text-primary">
              Admin Access
            </Badge>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-4xl grid-cols-5">
              <TabsTrigger value="daily-odds">Daily Odds</TabsTrigger>
              <TabsTrigger value="premium-tips">Premium Tips</TabsTrigger>
              <TabsTrigger value="bet-of-day">Bet of the Day</TabsTrigger>
              <TabsTrigger value="football-data">Football Data</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily-odds" className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <CalendarClock className="h-5 w-5 text-primary" />
                    <CardTitle>Add New Daily Odds</CardTitle>
                  </div>
                  <CardDescription>
                    Add new odds to appear in the daily odds page
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="league">League</Label>
                      <Input 
                        id="league" 
                        placeholder="e.g. Premier League" 
                        value={newOdd.league}
                        onChange={(e) => setNewOdd({...newOdd, league: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="match">Match</Label>
                      <Input 
                        id="match" 
                        placeholder="e.g. Team A vs Team B" 
                        value={newOdd.match}
                        onChange={(e) => setNewOdd({...newOdd, match: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prediction">Prediction</Label>
                      <Input 
                        id="prediction" 
                        placeholder="e.g. 1, X, 2, BTTS" 
                        value={newOdd.prediction}
                        onChange={(e) => setNewOdd({...newOdd, prediction: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Select 
                        value={newOdd.day}
                        onValueChange={(value) => setNewOdd({...newOdd, day: value as 'yesterday' | 'today' | 'tomorrow'})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yesterday">Yesterday</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="tomorrow">Tomorrow</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2 flex items-end">
                      <Button className="gap-2 w-full" onClick={handleAddOdd}>
                        <PlusCircle className="h-4 w-4" />
                        Add Odds
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle>Manage Existing Odds</CardTitle>
                  </div>
                  <CardDescription>
                    Edit or delete existing daily odds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Day</TableHead>
                          <TableHead>League</TableHead>
                          <TableHead>Match</TableHead>
                          <TableHead>Prediction</TableHead>
                          <TableHead className="text-right w-[100px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {existingOdds.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                              No odds available. Add some odds to get started.
                            </TableCell>
                          </TableRow>
                        ) : (
                          existingOdds.map((odd) => (
                            <TableRow key={odd.id}>
                              <TableCell>
                                <Badge variant="outline" className="capitalize">
                                  {odd.day}
                                </Badge>
                              </TableCell>
                              <TableCell>{odd.league}</TableCell>
                              <TableCell>{odd.match}</TableCell>
                              <TableCell>{odd.prediction}</TableCell>
                              <TableCell className="text-right">
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                  onClick={() => handleRemoveOdd(odd.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => {
                      toast.success("Changes saved successfully!", {
                        description: "All odds have been updated."
                      });
                    }}
                  >
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="premium-tips" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Crown className="h-5 w-5 text-yellow-500" />
                    <CardTitle>Add Premium Tip</CardTitle>
                  </div>
                  <CardDescription>
                    Create new premium tips for subscribers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="p-match">Match</Label>
                      <Input id="p-match" placeholder="e.g. Team A vs Team B" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="p-league">League</Label>
                      <Input id="p-league" placeholder="e.g. Premier League" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="p-prediction">Prediction</Label>
                      <Input id="p-prediction" placeholder="e.g. Over 2.5 Goals" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="p-odds">Odds</Label>
                      <Input id="p-odds" type="number" step="0.01" placeholder="e.g. 1.95" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="p-confidence">Confidence (%)</Label>
                      <Input id="p-confidence" type="number" min="1" max="100" placeholder="e.g. 80" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="p-date">Date</Label>
                      <Input id="p-date" type="date" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="p-time">Time</Label>
                      <Input id="p-time" type="time" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="p-sport">Sport</Label>
                      <Select defaultValue="soccer">
                        <SelectTrigger id="p-sport">
                          <SelectValue placeholder="Select sport" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="soccer">Soccer</SelectItem>
                          <SelectItem value="basketball">Basketball</SelectItem>
                          <SelectItem value="tennis">Tennis</SelectItem>
                          <SelectItem value="hockey">Hockey</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => {
                      toast.info("Form cleared", {
                        description: "All fields have been reset"
                      });
                    }}
                  >
                    <X className="h-4 w-4" />
                    Clear Form
                  </Button>
                  <Button 
                    className="gap-2"
                    onClick={() => {
                      toast.success("Premium tip added successfully!", {
                        description: "The tip is now available to subscribers."
                      });
                    }}
                  >
                    <Check className="h-4 w-4" />
                    Add Premium Tip
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="bet-of-day" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <CardTitle>Manage Bet of the Day</CardTitle>
                  </div>
                  <CardDescription>
                    Update the featured bet of the day that appears on the homepage
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bod-match">Match</Label>
                      <Input 
                        id="bod-match" 
                        placeholder="e.g. Team A vs Team B" 
                        value={betOfDay.match}
                        onChange={(e) => setBetOfDay({...betOfDay, match: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bod-league">League</Label>
                      <Input 
                        id="bod-league" 
                        placeholder="e.g. Premier League" 
                        value={betOfDay.league}
                        onChange={(e) => setBetOfDay({...betOfDay, league: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bod-prediction">Prediction</Label>
                      <Input 
                        id="bod-prediction" 
                        placeholder="e.g. Over 2.5 Goals" 
                        value={betOfDay.prediction}
                        onChange={(e) => setBetOfDay({...betOfDay, prediction: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bod-odds">Odds</Label>
                      <Input 
                        id="bod-odds" 
                        type="text" 
                        placeholder="e.g. 1.95" 
                        value={betOfDay.odds}
                        onChange={(e) => setBetOfDay({...betOfDay, odds: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bod-confidence">Confidence (%)</Label>
                      <Input 
                        id="bod-confidence" 
                        type="text" 
                        placeholder="e.g. 90" 
                        value={betOfDay.confidence}
                        onChange={(e) => setBetOfDay({...betOfDay, confidence: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bod-analysis">Analysis</Label>
                    <Input 
                      id="bod-analysis" 
                      placeholder="Enter detailed analysis for this bet" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="bod-h2h">Head-to-Head</Label>
                      <Input id="bod-h2h" placeholder="e.g. Team A won 6 of last 8" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bod-goals">Goals</Label>
                      <Input id="bod-goals" placeholder="e.g. Over 2.5 in 80% of matches" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bod-form">Team Form</Label>
                      <Input id="bod-form" placeholder="e.g. Team A: WWWWD, Team B: WDLWL" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button 
                    className="gap-2"
                    onClick={handleUpdateBetOfDay}
                  >
                    <Save className="h-4 w-4" />
                    Update Bet of the Day
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="football-data" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FootballIcon className="h-5 w-5 text-green-500" />
                    <CardTitle>Football Data Management</CardTitle>
                  </div>
                  <CardDescription>
                    Manage football leagues, teams, and match data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        <h3 className="text-lg font-medium">Data Sources</h3>
                      </div>
                      
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>API Name</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Last Updated</TableHead>
                              <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Football Data API</TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  Active
                                </Badge>
                              </TableCell>
                              <TableCell>Today, 14:30</TableCell>
                              <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                  Sync Now
                                </Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Odds API</TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  Active
                                </Badge>
                              </TableCell>
                              <TableCell>Today, 14:25</TableCell>
                              <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                  Sync Now
                                </Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Player Stats API</TableCell>
                              <TableCell>
                                <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                                  Pending
                                </Badge>
                              </TableCell>
                              <TableCell>Yesterday, 09:15</TableCell>
                              <TableCell className="text-right">
                                <Button variant="outline" size="sm">
                                  Sync Now
                                </Button>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <h3 className="text-lg font-medium">Leagues & Competitions</h3>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                              Active
                            </Badge>
                            <span>Premier League</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                              Active
                            </Badge>
                            <span>La Liga</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                              Active
                            </Badge>
                            <span>Serie A</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                              Inactive
                            </Badge>
                            <span>Bundesliga</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="gap-2">
                      <PlusCircle className="h-4 w-4" />
                      Add New Data Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BarChart4 className="h-5 w-5 text-primary" />
                    <CardTitle>Analytics Dashboard</CardTitle>
                  </div>
                  <CardDescription>
                    Monitor platform performance and user engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary">5,280</div>
                          <p className="text-muted-foreground">Total Users</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-500">82%</div>
                          <p className="text-muted-foreground">Prediction Accuracy</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-yellow-500">420</div>
                          <p className="text-muted-foreground">Premium Subscribers</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Most Popular Tips</h3>
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Match</TableHead>
                              <TableHead>Prediction</TableHead>
                              <TableHead>Users Backing</TableHead>
                              <TableHead>Result</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>Manchester City vs Chelsea</TableCell>
                              <TableCell>Man City Win & Over 2.5</TableCell>
                              <TableCell>1,250</TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  Won
                                </Badge>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Arsenal vs Liverpool</TableCell>
                              <TableCell>BTTS & Over 2.5</TableCell>
                              <TableCell>985</TableCell>
                              <TableCell>
                                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                  Won
                                </Badge>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Barcelona vs Real Madrid</TableCell>
                              <TableCell>Barcelona Win</TableCell>
                              <TableCell>872</TableCell>
                              <TableCell>
                                <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                                  Lost
                                </Badge>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">User Engagement</h3>
                      <div className="h-[300px] bg-muted/50 rounded-md flex items-center justify-center">
                        <p className="text-muted-foreground">
                          Chart data visualization will appear here
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
