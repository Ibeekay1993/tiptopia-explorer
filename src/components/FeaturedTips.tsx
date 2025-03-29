
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Filter, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { TipCard } from "@/components/TipCard";
import { tips, Tip } from "@/data/tips";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FeaturedTips() {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("date");
  const [showAll, setShowAll] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>("today");
  const navigate = useNavigate();

  const toggleSport = (sport: string) => {
    if (selectedSports.includes(sport)) {
      setSelectedSports(selectedSports.filter(s => s !== sport));
    } else {
      setSelectedSports([...selectedSports, sport]);
    }
  };

  // Filter tips by day
  const filterByDay = (tip: Tip, day: string) => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    switch (day) {
      case "today":
        return tip.date === todayString;
      case "yesterday":
        return tip.date === yesterdayString;
      case "tomorrow":
        return tip.date === tomorrowString;
      default:
        return true;
    }
  };

  const filteredTips = tips.filter(tip => 
    (selectedSports.length === 0 || selectedSports.includes(tip.sport)) && 
    filterByDay(tip, selectedDay)
  );

  const sortedTips = [...filteredTips].sort((a, b) => {
    if (sortBy === "confidence") {
      return b.confidence - a.confidence;
    } else if (sortBy === "odds") {
      return b.odds - a.odds;
    }
    // Default sort by date
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const displayTips = showAll ? sortedTips : sortedTips.slice(0, 6);

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Today's Featured Tips</h2>
          <p className="text-muted-foreground">Expert predictions with high confidence</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Tabs 
            defaultValue="today" 
            value={selectedDay}
            onValueChange={setSelectedDay}
            className="w-full sm:w-auto mb-4 sm:mb-0"
          >
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex gap-2 self-end md:self-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                  checked={selectedSports.includes('soccer')}
                  onCheckedChange={() => toggleSport('soccer')}
                >
                  Football
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedSports.includes('basketball')}
                  onCheckedChange={() => toggleSport('basketball')}
                >
                  Basketball
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedSports.includes('tennis')}
                  onCheckedChange={() => toggleSport('tennis')}
                >
                  Tennis
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={selectedSports.includes('hockey')}
                  onCheckedChange={() => toggleSport('hockey')}
                >
                  Hockey
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                  checked={sortBy === "date"}
                  onCheckedChange={() => setSortBy("date")}
                >
                  Date
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={sortBy === "confidence"}
                  onCheckedChange={() => setSortBy("confidence")}
                >
                  Confidence
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={sortBy === "odds"}
                  onCheckedChange={() => setSortBy("odds")}
                >
                  Odds
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTips.length > 0 ? (
          displayTips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <Calendar className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
            <h3 className="text-lg font-medium">No tips available</h3>
            <p className="text-muted-foreground">
              There are no tips available for {selectedDay}. Try a different day or check back later.
            </p>
          </div>
        )}
      </div>
      
      {filteredTips.length > 6 && (
        <div className="flex justify-center mt-8">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(!showAll)}
            className="gap-2"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="h-4 w-4" /></>
            ) : (
              <>Show More <ChevronDown className="h-4 w-4" /></>
            )}
          </Button>
        </div>
      )}
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={() => navigate('/predictions')}
          className="gap-2"
        >
          View All Predictions
        </Button>
      </div>
    </div>
  );
}
