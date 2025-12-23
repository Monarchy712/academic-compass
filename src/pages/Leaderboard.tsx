import { Trophy } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContributorCard } from "@/components/contributors/ContributorCard";
import { mockContributors } from "@/lib/data";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-accent" />
            </div>
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              IIITN Leaderboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Top contributors from IIIT Nagpur building the knowledge base
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-3 gap-4 items-end">
              {/* 2nd Place */}
              <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-medium">
                  P
                </div>
                <p className="font-display font-semibold text-foreground">Priya Patel</p>
                <p className="text-xs text-muted-foreground mb-1">ECE • 2023</p>
                <p className="text-2xl font-bold text-muted-foreground">2,120</p>
                <div className="h-24 bg-primary/10 rounded-t-lg mt-4 flex items-end justify-center pb-4">
                  <span className="text-4xl">🥈</span>
                </div>
              </div>

              {/* 1st Place */}
              <div className="text-center animate-slide-up">
                <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center text-accent-foreground text-3xl font-bold shadow-glow">
                  A
                </div>
                <p className="font-display text-lg font-semibold text-foreground">Arjun Sharma</p>
                <p className="text-xs text-muted-foreground mb-1">CSE • 2022</p>
                <p className="text-3xl font-bold text-accent">2,450</p>
                <div className="h-32 bg-accent/10 rounded-t-lg mt-4 flex items-end justify-center pb-4">
                  <span className="text-5xl">👑</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-medium">
                  R
                </div>
                <p className="font-display font-semibold text-foreground">Rahul Verma</p>
                <p className="text-xs text-muted-foreground mb-1">CSE • 2022</p>
                <p className="text-2xl font-bold text-muted-foreground">1,890</p>
                <div className="h-20 bg-primary/10 rounded-t-lg mt-4 flex items-end justify-center pb-4">
                  <span className="text-4xl">🥉</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Leaderboard */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              All IIITN Contributors
            </h2>
            {mockContributors.map((contributor, index) => (
              <div key={contributor.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ContributorCard {...contributor} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
