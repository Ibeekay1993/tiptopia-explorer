
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Save } from "lucide-react";
import { toast } from "sonner";

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(true); // In a real app, this would be determined by authentication
  
  // For demo purposes only - in a real app this would be handled by authentication
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container py-16 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>
                You don't have permission to access this page. Please sign in as an admin.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                onClick={() => setIsAdmin(true)} 
                className="w-full"
              >
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
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            Manage betting tips, odds, and user accounts
          </p>
          
          <Tabs defaultValue="daily-odds" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="daily-odds">Daily Odds</TabsTrigger>
              <TabsTrigger value="premium-tips">Premium Tips</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily-odds" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Daily Odds</CardTitle>
                  <CardDescription>
                    Add new odds to appear in the daily odds page
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="league">League</Label>
                      <Input id="league" placeholder="e.g. Premier League" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="match">Match</Label>
                      <Input id="match" placeholder="e.g. Team A vs Team B" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="prediction">Prediction</Label>
                      <Input id="prediction" placeholder="e.g. 1, X, 2, BTTS" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Select defaultValue="today">
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
                      <Button className="gap-2 w-full">
                        <PlusCircle className="h-4 w-4" />
                        Add Odds
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Manage Existing Odds</CardTitle>
                  <CardDescription>
                    Edit or delete existing daily odds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-4 text-muted-foreground">
                    This feature would display a table of existing odds for editing
                  </p>
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
                <CardFooter className="flex justify-end">
                  <Button 
                    className="gap-2"
                    onClick={() => {
                      toast.success("Premium tip added successfully!", {
                        description: "The tip is now available to subscribers."
                      });
                    }}
                  >
                    <PlusCircle className="h-4 w-4" />
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
