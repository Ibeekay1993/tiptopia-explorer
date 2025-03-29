
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background/50 py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link to="/" className="font-bold text-xl text-primary">
            TipTopia
          </Link>
          <p className="text-sm text-muted-foreground">
            The ultimate destination for betting tips and predictions
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav className="flex gap-4 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/predictions" className="hover:text-foreground">
              Predictions
            </Link>
            <Link to="/profile" className="hover:text-foreground">
              Profile
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TipTopia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
