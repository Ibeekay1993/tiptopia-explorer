
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface StatItem {
  label: string;
  value: string;
  detail: string;
}

interface OverviewTabProps {
  stats: StatItem[];
}

export function OverviewTab({ stats }: OverviewTabProps) {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-muted/50 p-4 rounded-md space-y-2 hover:bg-muted/70 transition-colors">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="text-sm font-medium">{stat.value}</div>
            </div>
            <p className="text-xs text-muted-foreground">{stat.detail}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={() => navigate('/predictions')}
          variant="outline"
          className="mx-auto"
        >
          View All Predictions
        </Button>
      </div>
    </div>
  );
}
