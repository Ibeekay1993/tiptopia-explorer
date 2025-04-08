
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CenteredButton } from "@/components/ui/centered-button";
import { TrendingUp, CheckCircle, XCircle } from "lucide-react";

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
  
  // Get color based on stat value
  const getStatColor = (label: string, value: string) => {
    if (label.includes('Form') || label.includes('Streak')) {
      if (value.includes('W') || value.includes('won')) return 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800';
      if (value.includes('L') || value.includes('lost')) return 'bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-red-200 dark:border-red-800';
    }
    return 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800';
  };

  const getStatIcon = (label: string, value: string) => {
    if (label.includes('Form') || label.includes('Streak')) {
      if (value.includes('W') || value.includes('won')) return <CheckCircle className="h-4 w-4 text-green-600" />;
      if (value.includes('L') || value.includes('lost')) return <XCircle className="h-4 w-4 text-red-600" />;
    }
    return <TrendingUp className="h-4 w-4 text-blue-600" />;
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border shadow-sm ${getStatColor(stat.label, stat.value)} hover:shadow-md transition-all duration-300`}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.label}</div>
              <div className="flex items-center gap-1.5">
                {getStatIcon(stat.label, stat.value)}
                <span className="text-sm font-bold">{stat.value}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{stat.detail}</p>
          </div>
        ))}
      </div>
      
      <CenteredButton 
        onClick={() => navigate('/predictions')}
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10"
      >
        View All Predictions
      </CenteredButton>
    </div>
  );
}
