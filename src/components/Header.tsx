
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    toast.info("You've been signed in as a regular user", {
      description: "Welcome to TipTopia!",
      duration: 3000
    });
    navigate("/profile");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                className="hidden md:inline-flex" 
                size="sm"
                variant="outline"
              >
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleSignIn}>
                <User className="mr-2 h-4 w-4" />
                <span>User Login</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                toast.info("Signed in as administrator", { 
                  description: "You now have access to admin features",
                  duration: 3000
                });
                navigate("/admin");
              }}>
                <svg 
                  className="mr-2 h-4 w-4" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span>Admin Access</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
          isMenuOpen ? "max-h-80" : "max-h-0"
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
          <div className="flex flex-col gap-2">
            <Button 
              size="sm" 
              className="w-full"
              onClick={() => {
                setIsMenuOpen(false);
                handleSignIn();
              }}
            >
              User Login
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="w-full"
              onClick={() => {
                setIsMenuOpen(false);
                toast.info("Signed in as administrator", { 
                  description: "You now have access to admin features",
                  duration: 3000
                });
                navigate("/admin");
              }}
            >
              Admin Access
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
