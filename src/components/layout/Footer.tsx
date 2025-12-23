import { Brain, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Scholar<span className="text-accent">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              An open-source, AI-powered knowledge platform built by students, for students.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Explore</Link></li>
              <li><Link to="/contribute" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contribute</Link></li>
              <li><Link to="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Leaderboard</Link></li>
              <li><Link to="/institutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Institutions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link to="/api" className="text-sm text-muted-foreground hover:text-foreground transition-colors">API</Link></li>
              <li><Link to="/guidelines" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contribution Guidelines</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/license" className="text-sm text-muted-foreground hover:text-foreground transition-colors">License</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ScholarHub. Open source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
