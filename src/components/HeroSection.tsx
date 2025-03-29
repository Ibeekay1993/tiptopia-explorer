
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-hero-pattern bg-cover bg-center py-20 md:py-32">
      <div className="container relative z-10 text-center">
        <h1 className="text-3xl font-bold leading-tight md:text-5xl text-white mb-4">
          Betting Tips That Actually Win
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Join thousands of successful bettors using our expert predictions with a proven track record of 70%+ accuracy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            View Today's Tips
          </Button>
        </div>
      </div>
    </div>
  );
}
