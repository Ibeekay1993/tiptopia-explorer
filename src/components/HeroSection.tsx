
import React from 'react';
import { ArrowRight, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-hero-pattern bg-cover bg-center py-8 md:py-16">
      {/* Add futuristic overlay elements */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-full bg-primary/20 blur-xl"></div>
        <div className="absolute top-[70%] right-[10%] w-24 h-24 rounded-full bg-blue-500/20 blur-xl"></div>
        <div className="absolute top-[40%] right-[20%] w-12 h-12 rounded-full bg-purple-500/20 blur-xl"></div>
      </div>

      <div className="container relative z-10 text-center">
        <Badge />
        <h1 className="text-2xl font-bold leading-tight md:text-3xl text-white mb-2 mt-2">
          Betting Tips That Actually Win
        </h1>
        <p className="text-base text-white/90 max-w-2xl mx-auto mb-4">
          Join thousands of successful bettors using our expert predictions with a proven track record.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="default" 
            className="gap-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 transition-all duration-300 shadow-lg"
            onClick={() => {
              const tipsSection = document.querySelector('.container.py-12');
              if (tipsSection) {
                tipsSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate("/");
              }
            }}
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="default" 
            className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
            onClick={() => {
              navigate("/daily-odds");
            }}
          >
            View Today's Tips
          </Button>
        </div>
      </div>
    </div>
  );
};

// Futuristic badge component
const Badge = () => (
  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-white border border-primary/30 backdrop-blur-sm">
    <Zap className="h-3.5 w-3.5 text-primary-foreground" />
    <span className="text-xs font-medium">Powered by AI Predictions</span>
  </div>
);
