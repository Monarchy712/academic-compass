import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Scholar<span className="text-accent">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Explore
            </Link>
            <Link to="/contribute" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contribute
            </Link>
            <Link to="/leaderboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Leaderboard
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t animate-slide-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              Explore
            </Link>
            <Link to="/contribute" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              Contribute
            </Link>
            <Link to="/leaderboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              Leaderboard
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="outline" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
