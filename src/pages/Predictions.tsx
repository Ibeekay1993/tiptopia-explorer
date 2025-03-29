
import { useState } from "react";
import { Calendar, Search, SortAsc } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TipCard } from "@/components/TipCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { tips } from "@/data/tips";

const Predictions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredTips = tips.filter(tip => 
    tip.match.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tip.league.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tip.prediction.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-primary/5 py-8">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Upcoming Predictions</h1>
            <p className="text-muted-foreground mb-6">
              Browse our expert predictions for upcoming matches
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search teams, leagues or predictions..." 
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <SortAsc className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          {filteredTips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTips.map(tip => (
                <TipCard key={tip.id} tip={tip} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No predictions found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or check back later for new predictions.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Predictions;
