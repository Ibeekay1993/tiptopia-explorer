
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { CenteredButton } from "@/components/ui/centered-button";

interface CardFooterActionsProps {
  handleBackBet: () => void;
}

export function CardFooterActions({ handleBackBet }: CardFooterActionsProps) {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-muted/30 border-t py-6 w-full">
      <div className="flex items-center bg-white/50 dark:bg-white/5 p-2 rounded-full shadow-sm">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-xs font-bold border-2 border-background text-white">
              {String.fromCharCode(64 + i)}
            </div>
          ))}
        </div>
        <span className="ml-3 text-sm text-muted-foreground flex items-center"><Users className="h-4 w-4 mr-1" /> 1,250+ users backing this bet</span>
      </div>
      
      <CenteredButton 
        onClick={() => navigate(-1)}
        variant="outline"
        containerClassName="mx-auto" 
        className="border-primary text-primary hover:bg-primary/10"
      >
        Back to Home
      </CenteredButton>
    </div>
  );
}
