import { useState } from "react";
import { 
  Bike, // For soccer (football)
  CircleDot, // For basketball
  BarChart, // For tennis
  Dumbbell, 
  Star, ThumbsUp, Lock, TrendingUp 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tip } from "@/data/tips";

interface TipCardProps {
  tip: Tip;
}

export function TipCard({ tip }: TipCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const getSportIcon = (sport: string) => {
    switch (sport) {
      case 'soccer':
        return <Bike className="h-5 w-5" />;
      case 'basketball':
        return <CircleDot className="h-5 w-5" />;
      case 'tennis':
        return <BarChart className="h-5 w-5" />;
      case 'hockey':
        return <Dumbbell className="h-5 w-5" />;
      default:
        return <Bike className="h-5 w-5" />;
    }
  };

  const getSportColor = (sport: string) => {
    switch (sport) {
      case 'soccer':
        return 'bg-sport-green text-white';
      case 'basketball':
        return 'bg-sport-red text-white';
      case 'tennis':
        return 'bg-sport-yellow text-white';
      case 'hockey':
        return 'bg-sport-blue text-white';
      default:
        return 'bg-primary text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Won':
        return 'bg-green-500';
      case 'Lost':
        return 'bg-red-500';
      default:
        return 'bg-yellow-500';
    }
  };

  return (
    <Card className="overflow-hidden h-full">
      <div className={cn("h-2", getStatusColor(tip.status))} />
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className={cn("sport-icon", getSportColor(tip.sport))}>
              {getSportIcon(tip.sport)}
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{tip.league}</p>
              <h3 className="font-semibold">{tip.match}</h3>
            </div>
          </div>
          {tip.isPremium && (
            <Badge variant="secondary" className="gap-1">
              <Lock className="h-3 w-3" /> Premium
            </Badge>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-md bg-secondary p-2">
            <p className="text-xs text-muted-foreground">Prediction</p>
            <p className="font-medium text-sm">{tip.prediction}</p>
          </div>
          <div className="rounded-md bg-secondary p-2">
            <p className="text-xs text-muted-foreground">Odds</p>
            <p className="font-medium text-sm">{tip.odds}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4 text-sport-green" />
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-sport-green h-2 rounded-full" 
              style={{ width: `${tip.confidence}%` }}
            />
          </div>
          <span className="text-xs font-medium">{tip.confidence}%</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            {tip.date} • {tip.time}
          </div>
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Star 
                className={cn("h-4 w-4", isBookmarked ? "fill-yellow-400 text-yellow-400" : "")} 
              />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ThumbsUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
