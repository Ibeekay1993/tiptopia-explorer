
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, CreditCard, HelpCircle, 
  Settings, Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { menuItems } from "@/data/tips";

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
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Account Overview</h3>
                      <p className="text-muted-foreground">
                        Welcome to your account dashboard. Here you can manage your preferences and subscription.
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
                      <div className="flex justify-center">
                        <Button>Browse Tips</Button>
                      </div>
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
