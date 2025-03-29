
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
  Calendar
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { dailyOdds, DailyOdd } from "@/data/dailyOdds";

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
  
  // Helper function to get formatted date based on day selection
  const getFormattedDate = (dayOffset: number = 0): string => {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    return date.toISOString().split('T')[0];
  };
  
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
          
          <Tabs defaultValue="daily-odds" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="daily-odds">Daily Odds</TabsTrigger>
              <TabsTrigger value="premium-tips">Premium Tips</TabsTrigger>
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
                  <CardTitle>Add Premium Tip</CardTitle>
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
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
