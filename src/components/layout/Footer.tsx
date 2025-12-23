import { Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">S1</span>
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Sol<span className="text-accent">-1</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              One verified solution. Built exclusively for IIIT Nagpur students.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Explore</Link></li>
              <li><Link to="/ask" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ask Question</Link></li>
              <li><Link to="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Leaderboard</Link></li>
              <li><Link to="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/guidelines" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contribution Guidelines</Link></li>
              <li><Link to="/syllabus" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Syllabus</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* IIIT Nagpur */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">IIIT Nagpur</h4>
            <ul className="space-y-2">
              <li><a href="https://iiitn.ac.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Official Website</a></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Maintainers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Sol-1. Private platform for IIIT Nagpur students only.
          </p>
        </div>
      </div>
    </footer>
  );
}
