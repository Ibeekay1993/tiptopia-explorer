
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CardFooterActionsProps {
  handleBackBet: () => void;
}

export function CardFooterActions({ handleBackBet }: CardFooterActionsProps) {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-muted/30 border-t py-4">
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold border-2 border-background">
              {String.fromCharCode(64 + i)}
            </div>
          ))}
        </div>
        <span className="ml-3 text-sm text-muted-foreground">1,250+ users backing this bet</span>
      </div>
      
      <Button 
        onClick={() => navigate(-1)}
        variant="outline"
      >
        Back to Home
      </Button>
    </div>
  );
}
