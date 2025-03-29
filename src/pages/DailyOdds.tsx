
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, TrendingUp, ArrowRight, Trophy } from "lucide-react";
import { dailyOdds } from "@/data/dailyOdds";

const DailyOdds = () => {
  const [selectedDay, setSelectedDay] = useState<string>("today");
  
  const filteredOdds = dailyOdds.filter(odd => odd.day === selectedDay);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 py-8">
          <div className="container">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2 flex items-center">
                  Daily Odds <Trophy className="ml-2 h-5 w-5 text-yellow-500" />
                </h1>
                <p className="text-muted-foreground">
                  Expertly selected odds with high winning probability
                </p>
              </div>
              <div className="flex items-center mt-4 md:mt-0 space-x-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Updated daily at 10:00 AM</span>
              </div>
            </div>
            
            <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">Match Predictions</CardTitle>
                  <CalendarDays className="h-5 w-5 text-muted-foreground" />
                </div>
                <CardDescription>
                  Select a day to view our expert betting tips
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs 
                  defaultValue="today" 
                  value={selectedDay}
                  onValueChange={setSelectedDay}
                  className="w-full"
                >
                  <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
                    <TabsTrigger value="yesterday" className="data-[state=active]:bg-primary/20">Yesterday</TabsTrigger>
                    <TabsTrigger value="today" className="data-[state=active]:bg-primary/20">Today</TabsTrigger>
                    <TabsTrigger value="tomorrow" className="data-[state=active]:bg-primary/20">Tomorrow</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="yesterday" className="mt-0">
                    <DailyOddsTable odds={filteredOdds} />
                  </TabsContent>
                  <TabsContent value="today" className="mt-0">
                    <DailyOddsTable odds={filteredOdds} />
                  </TabsContent>
                  <TabsContent value="tomorrow" className="mt-0">
                    <DailyOddsTable odds={filteredOdds} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard 
                title="Daily Updates" 
                description="We refresh our odds daily based on the latest team news and statistics"
                icon={<CalendarDays className="h-5 w-5" />}
              />
              <InfoCard 
                title="Expert Analysis" 
                description="Our team of professional tipsters analyze every match in depth"
                icon={<TrendingUp className="h-5 w-5" />}
              />
              <InfoCard 
                title="Premium Insights" 
                description="Upgrade to premium for exclusive high-confidence tips"
                icon={<Trophy className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const InfoCard = ({ title, description, icon }) => (
  <Card className="border border-primary/10 hover:border-primary/30 transition-colors">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="rounded-full p-2 bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardHeader>
  </Card>
);

const DailyOddsTable = ({ odds }) => {
  if (odds.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-medium">No odds available for this day.</p>
        <p className="text-muted-foreground">Check back later for updates.</p>
      </div>
    );
  }
  
  return (
    <div className="rounded-md border bg-background overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[180px] font-semibold">League</TableHead>
            <TableHead className="font-semibold">Match</TableHead>
            <TableHead className="w-[120px] text-center font-semibold">Prediction</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {odds.map((odd) => (
            <TableRow key={odd.id} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium flex items-center gap-2">
                <LeagueIcon league={odd.league} />
                {odd.league}
              </TableCell>
              <TableCell>{odd.match}</TableCell>
              <TableCell className="text-center">
                <Badge variant="outline" className="font-bold bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  {odd.prediction}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const LeagueIcon = ({ league }) => {
  // Return different icons based on the league
  const getLeagueColor = (leagueName) => {
    const leagues = {
      "Premier League": "bg-blue-100 text-blue-600",
      "La Liga": "bg-red-100 text-red-600",
      "Serie A": "bg-green-100 text-green-600",
      "Bundesliga": "bg-yellow-100 text-yellow-600",
      "Ligue 1": "bg-purple-100 text-purple-600",
      "Champions League": "bg-indigo-100 text-indigo-600",
    };
    
    return leagues[leagueName] || "bg-gray-100 text-gray-600";
  };
  
  return (
    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium ${getLeagueColor(league)}`}>
      {league.substring(0, 1)}
    </span>
  );
};

export default DailyOdds;
