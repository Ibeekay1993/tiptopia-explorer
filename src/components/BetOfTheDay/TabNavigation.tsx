
import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <div className="tabs flex">
      <button 
        onClick={() => setActiveTab("overview")}
        className={`px-4 py-2 font-medium text-sm ${activeTab === "overview" ? 
          "border-b-2 border-primary text-primary" : 
          "text-muted-foreground hover:text-foreground transition-colors"}`}
      >
        Overview
      </button>
      <button 
        onClick={() => setActiveTab("analysis")}
        className={`px-4 py-2 font-medium text-sm ${activeTab === "analysis" ? 
          "border-b-2 border-primary text-primary" : 
          "text-muted-foreground hover:text-foreground transition-colors"}`}
      >
        Expert Analysis
      </button>
      <button 
        onClick={() => setActiveTab("team-stats")}
        className={`px-4 py-2 font-medium text-sm ${activeTab === "team-stats" ? 
          "border-b-2 border-primary text-primary" : 
          "text-muted-foreground hover:text-foreground transition-colors"}`}
      >
        Team Statistics
      </button>
    </div>
  );
}
