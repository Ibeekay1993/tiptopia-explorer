
import React from 'react';

interface StatItem {
  label: string;
  value: string;
  detail: string;
}

interface OverviewTabProps {
  stats: StatItem[];
}

export function OverviewTab({ stats }: OverviewTabProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
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
  );
}
