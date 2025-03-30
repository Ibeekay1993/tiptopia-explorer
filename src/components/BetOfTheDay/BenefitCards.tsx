
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ListChecks, BarChart, Award } from "lucide-react";

export function BenefitCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="border-primary/10 hover:border-primary/30 transition-colors">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="rounded-full p-2 bg-primary/10 text-primary">
            <ListChecks className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">Expert Selection</CardTitle>
            <CardDescription>Our tips are chosen by sports betting experts</CardDescription>
          </div>
        </CardHeader>
      </Card>
      
      <Card className="border-primary/10 hover:border-primary/30 transition-colors">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="rounded-full p-2 bg-primary/10 text-primary">
            <BarChart className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">Data-Driven</CardTitle>
            <CardDescription>All picks are backed by advanced statistics</CardDescription>
          </div>
        </CardHeader>
      </Card>
      
      <Card className="border-primary/10 hover:border-primary/30 transition-colors">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="rounded-full p-2 bg-primary/10 text-primary">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">Proven Track Record</CardTitle>
            <CardDescription>85%+ success rate on our Bet of the Day</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
