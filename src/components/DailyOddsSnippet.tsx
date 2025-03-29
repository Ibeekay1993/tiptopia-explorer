
import { useState } from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ArrowRight } from "lucide-react";
import { dailyOdds } from "@/data/dailyOdds";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function DailyOddsSnippet() {
  const [selectedDay, setSelectedDay] = useState<string>("today");
  const navigate = useNavigate();
  
  // Filter odds by day and limit to 50% of the available odds
  const filteredOdds = dailyOdds
    .filter(odd => odd.day === selectedDay)
    .slice(0, Math.ceil(dailyOdds.filter(odd => odd.day === selectedDay).length / 2));

  return (
    <div className="py-12 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Daily Match Predictions</h2>
            <p className="text-muted-foreground">
              Expert selections with high winning probability
            </p>
          </div>
        </div>
        
        <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm mb-6">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Match Predictions</CardTitle>
              <CalendarDays className="h-5 w-5 text-muted-foreground" />
            </div>
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
        
        <div className="flex justify-end">
          <Button 
            onClick={() => navigate('/daily-odds')}
            className="gap-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 transition-all duration-300"
          >
            View All Predictions <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

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
