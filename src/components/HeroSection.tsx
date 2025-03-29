
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-hero-pattern bg-cover bg-center py-8 md:py-16">
      <div className="container relative z-10 text-center">
        <h1 className="text-2xl font-bold leading-tight md:text-3xl text-white mb-2">
          Betting Tips That Actually Win
        </h1>
        <p className="text-base text-white/90 max-w-2xl mx-auto mb-4">
          Join thousands of successful bettors using our expert predictions with a proven track record.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="default" 
            className="gap-2"
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
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
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
}
