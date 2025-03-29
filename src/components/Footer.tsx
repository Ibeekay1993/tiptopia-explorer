
import { Link } from "react-router-dom";
import { 
  TwitterIcon, 
  InstagramIcon, 
  FacebookIcon, 
  MailIcon, 
  TrendingUpIcon, 
  ShieldIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background py-8 md:py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex flex-col space-y-4 max-w-xs">
            <Link to="/" className="font-bold text-xl text-primary">
              TipTopia
            </Link>
            <p className="text-sm text-muted-foreground">
              The ultimate destination for betting tips and predictions. Join our community of winning bettors today.
            </p>
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                <TwitterIcon className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                <InstagramIcon className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                <FacebookIcon className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="space-y-4">
              <h4 className="font-medium text-base">Quick Links</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/predictions" className="text-muted-foreground hover:text-primary transition-colors">
                  Predictions
                </Link>
                <Link to="/daily-odds" className="text-muted-foreground hover:text-primary transition-colors">
                  Daily Odds
                </Link>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Profile
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-base">Bet Types</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link to="/daily-odds" className="text-muted-foreground hover:text-primary transition-colors">
                  Match Result (1X2)
                </Link>
                <Link to="/daily-odds" className="text-muted-foreground hover:text-primary transition-colors">
                  Both Teams to Score
                </Link>
                <Link to="/daily-odds" className="text-muted-foreground hover:text-primary transition-colors">
                  Over/Under Goals
                </Link>
                <Link to="/daily-odds" className="text-muted-foreground hover:text-primary transition-colors">
                  Correct Score
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-base">Support</h4>
              <nav className="flex flex-col space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  <MailIcon className="h-3.5 w-3.5" /> Contact Us
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  <TrendingUpIcon className="h-3.5 w-3.5" /> How It Works
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                  <ShieldIcon className="h-3.5 w-3.5" /> Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TipTopia. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Responsible Gambling</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
