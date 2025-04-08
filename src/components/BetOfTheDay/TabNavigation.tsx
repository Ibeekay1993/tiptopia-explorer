
import React from 'react';
import { BarChart, Target, LineChart } from "lucide-react";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const handleTabChange = (tab: string) => {
    // Don't scroll to top when changing tabs
    setActiveTab(tab);
  };
  
  return (
    <div className="tabs flex border-b mb-6">
      <button 
        onClick={() => handleTabChange("overview")}
        className={`px-6 py-3 font-medium text-sm flex items-center gap-2 transition-all ${activeTab === "overview" ? 
          "border-b-2 border-blue-600 text-blue-600 bg-blue-50/50 dark:bg-blue-900/10" : 
          "text-muted-foreground hover:text-foreground hover:bg-blue-50/30 dark:hover:bg-blue-900/5"}`}
      >
        <BarChart className="h-4 w-4" />
        Overview
      </button>
      <button 
        onClick={() => handleTabChange("analysis")}
        className={`px-6 py-3 font-medium text-sm flex items-center gap-2 transition-all ${activeTab === "analysis" ? 
          "border-b-2 border-green-600 text-green-600 bg-green-50/50 dark:bg-green-900/10" : 
          "text-muted-foreground hover:text-foreground hover:bg-green-50/30 dark:hover:bg-green-900/5"}`}
      >
        <Target className="h-4 w-4" />
        Expert Analysis
      </button>
      <button 
        onClick={() => handleTabChange("team-stats")}
        className={`px-6 py-3 font-medium text-sm flex items-center gap-2 transition-all ${activeTab === "team-stats" ? 
          "border-b-2 border-purple-600 text-purple-600 bg-purple-50/50 dark:bg-purple-900/10" : 
          "text-muted-foreground hover:text-foreground hover:bg-purple-50/30 dark:hover:bg-purple-900/5"}`}
      >
        <LineChart className="h-4 w-4" />
        Team Statistics
      </button>
    </div>
  );
}
