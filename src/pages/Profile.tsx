
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, BookOpen, CreditCard, HelpCircle, History, 
  Settings, Star, TrendingUp, CheckCircle, DollarSign, Calendar 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { menuItems, userStats } from "@/data/tips";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'settings':
        return <Settings className="h-5 w-5" />;
      case 'credit-card':
        return <CreditCard className="h-5 w-5" />;
      case 'bookmark':
        return <Star className="h-5 w-5" />;
      case 'bell':
        return <Bell className="h-5 w-5" />;
      case 'help-circle':
        return <HelpCircle className="h-5 w-5" />;
      case 'trending-up':
        return <TrendingUp className="h-5 w-5" />;
      case 'check-circle':
        return <CheckCircle className="h-5 w-5" />;
      case 'dollar-sign':
        return <DollarSign className="h-5 w-5" />;
      case 'calendar':
        return <Calendar className="h-5 w-5" />;
      default:
        return <Settings className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-secondary/30">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-xl bg-primary text-white">JD</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-muted-foreground">Premium Member</p>
                    <Badge className="mt-2 bg-primary">Pro Plan</Badge>
                    
                    <div className="w-full mt-4 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Membership</span>
                        <span>75 days left</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    
                    <Button className="w-full mt-6">Upgrade to VIP</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    {menuItems.map((item, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="justify-start rounded-none h-12 px-4 border-b border-border last:border-0"
                      >
                        <div className="flex items-center">
                          {getIconComponent(item.icon)}
                          <span className="ml-3">{item.name}</span>
                        </div>
                      </Button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {userStats.map((stat, index) => (
                      <Card key={index}>
                        <CardContent className="p-6 flex items-center">
                          <div className="bg-primary/10 p-3 rounded-full mr-4">
                            {getIconComponent(stat.icon)}
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">{stat.name}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                      <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="flex gap-4 items-start pb-4 border-b border-border last:border-0 last:pb-0">
                            <div className="bg-secondary rounded-full p-2">
                              <History className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <p className="font-medium">Used a premium tip</p>
                                <p className="text-sm text-muted-foreground">2d ago</p>
                              </div>
                              <p className="text-sm text-muted-foreground">Man City vs. Arsenal - BTTS</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full mt-4">View All Activity</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="history">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold">Betting History</h3>
                        <Button variant="outline" size="sm">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                      </div>
                      <p className="text-muted-foreground text-center py-8">
                        Your betting history will appear here
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="bookmarks">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Bookmarked Tips</h3>
                      <p className="text-muted-foreground text-center py-8">
                        You haven't bookmarked any tips yet
                      </p>
                      <Button className="w-full">Browse Tips</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
