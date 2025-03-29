
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    toast.info("Sign-in functionality will be added soon", {
      description: "This feature is currently under development.",
      duration: 3000
    });
    // For admins, we'll temporarily allow access with a direct navigation
    navigate("/admin");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl text-primary">
            TipTopia
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/predictions" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Predictions
            </Link>
            <Link to="/daily-odds" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Daily Odds
            </Link>
            <Link to="/profile" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Profile
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            className="hidden md:inline-flex" 
            size="sm"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "container md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-72" : "max-h-0"
        )}
      >
        <nav className="flex flex-col space-y-4 py-4">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/predictions"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Predictions
          </Link>
          <Link
            to="/daily-odds"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Daily Odds
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </Link>
          <Button 
            size="sm" 
            className="w-full"
            onClick={() => {
              setIsMenuOpen(false);
              handleSignIn();
            }}
          >
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
}
