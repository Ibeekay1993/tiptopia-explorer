
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { dailyOdds } from "@/data/dailyOdds";

const DailyOdds = () => {
  const [selectedDay, setSelectedDay] = useState<string>("today");
  
  const filteredOdds = dailyOdds.filter(odd => odd.day === selectedDay);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-primary/5 py-8">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Daily Odds</h1>
            <p className="text-muted-foreground mb-6">
              Browse our expertly selected odds with high winning probability
            </p>
            
            <Tabs 
              defaultValue="today" 
              value={selectedDay}
              onValueChange={setSelectedDay}
              className="w-full"
            >
              <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
                <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
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
          </div>
        </div>
      </main>
      <Footer />
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
    <div className="rounded-md border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">League</TableHead>
            <TableHead>Match</TableHead>
            <TableHead className="w-[120px] text-center">Prediction</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {odds.map((odd) => (
            <TableRow key={odd.id}>
              <TableCell className="font-medium">{odd.league}</TableCell>
              <TableCell>{odd.match}</TableCell>
              <TableCell className="text-center font-bold">{odd.prediction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DailyOdds;
