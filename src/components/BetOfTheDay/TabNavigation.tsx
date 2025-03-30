
import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const handleTabChange = (tab: string) => {
    // Scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab(tab);
  };
  
  return (
    <div className="tabs flex">
      <button 
        onClick={() => handleTabChange("overview")}
        className={`px-4 py-2 font-medium text-sm ${activeTab === "overview" ? 
          "border-b-2 border-primary text-primary" : 
          "text-muted-foreground hover:text-foreground transition-colors"}`}
      >
        Overview
      </button>
      <button 
        onClick={() => handleTabChange("analysis")}
        className={`px-4 py-2 font-medium text-sm ${activeTab === "analysis" ? 
          "border-b-2 border-primary text-primary" : 
          "text-muted-foreground hover:text-foreground transition-colors"}`}
      >
        Expert Analysis
      </button>
      <button 
        onClick={() => handleTabChange("team-stats")}
        className={`px-4 py-2 font-medium text-sm ${activeTab === "team-stats" ? 
          "border-b-2 border-primary text-primary" : 
          "text-muted-foreground hover:text-foreground transition-colors"}`}
      >
        Team Statistics
      </button>
    </div>
  );
}
