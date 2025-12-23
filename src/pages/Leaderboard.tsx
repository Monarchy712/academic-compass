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
            <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Trophy className="w-8 h-8 text-accent-foreground" />
            </div>
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Top Contributors
            </h1>
            <p className="text-lg text-muted-foreground">
              Celebrating the students who make this platform better every day
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-3 gap-4 items-end">
              {/* 2nd Place */}
              <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-medium">
                  S
                </div>
                <p className="font-display font-semibold text-foreground">Sarah Miller</p>
                <p className="text-2xl font-bold text-muted-foreground">2,120</p>
                <div className="h-24 gradient-primary/20 rounded-t-lg mt-4 flex items-end justify-center pb-4">
                  <span className="text-4xl">🥈</span>
                </div>
              </div>

              {/* 1st Place */}
              <div className="text-center animate-slide-up">
                <div className="w-24 h-24 rounded-full gradient-accent mx-auto mb-4 flex items-center justify-center text-accent-foreground text-3xl font-bold shadow-glow">
                  A
                </div>
                <p className="font-display text-lg font-semibold text-foreground">Alex Chen</p>
                <p className="text-3xl font-bold text-accent">2,450</p>
                <div className="h-32 gradient-accent/20 rounded-t-lg mt-4 flex items-end justify-center pb-4">
                  <span className="text-5xl">👑</span>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-medium">
                  J
                </div>
                <p className="font-display font-semibold text-foreground">James Wilson</p>
                <p className="text-2xl font-bold text-muted-foreground">1,890</p>
                <div className="h-20 gradient-primary/20 rounded-t-lg mt-4 flex items-end justify-center pb-4">
                  <span className="text-4xl">🥉</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Leaderboard */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
              All Contributors
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
