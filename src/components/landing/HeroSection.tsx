import { Search, ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Private Platform for IIIT Nagpur</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            One Verified{" "}
            <span className="text-accent">Solution</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            A closed, syllabus-aware knowledge platform built exclusively for IIIT Nagpur students. 
            Ask questions, contribute verified answers, and access campus-specific academic content.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search IIITN syllabus, PYQs, hostel rules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-12 pr-32 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent shadow-medium transition-all"
              />
              <Button 
                variant="accent" 
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                Search
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Try: "CS201 midsem pattern" or "Hostel wifi setup"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="default" size="xl" asChild>
              <Link to="/signup">
                Join with IIITN Email
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/explore">Browse Knowledge Base</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">2K+</p>
              <p className="text-sm text-muted-foreground">Verified Answers</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">8</p>
              <p className="text-sm text-muted-foreground">Semesters Covered</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Active Contributors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
