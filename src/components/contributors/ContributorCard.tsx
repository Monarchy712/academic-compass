import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, CheckCircle } from "lucide-react";

interface ContributorCardProps {
  id: string;
  name: string;
  avatar: string;
  score: number;
  contributions: number;
  verified: number;
  rank: number;
  badges: string[];
}

export function ContributorCard({
  name,
  score,
  contributions,
  verified,
  rank,
  badges,
}: ContributorCardProps) {
  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-500";
    if (rank === 2) return "text-gray-400";
    if (rank === 3) return "text-amber-600";
    return "text-muted-foreground";
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) return Trophy;
    return Award;
  };

  const RankIcon = getRankIcon(rank);

  return (
    <Card variant="interactive" className="group">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          {/* Rank */}
          <div className={`flex-shrink-0 ${getRankColor(rank)}`}>
            <RankIcon className="w-8 h-8" />
            <span className="block text-center text-sm font-bold">#{rank}</span>
          </div>

          {/* Avatar */}
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
            {name.charAt(0)}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-lg font-semibold text-foreground truncate">
              {name}
            </h3>
            <div className="flex flex-wrap gap-1 mt-1">
              {badges.map((badge) => (
                <Badge 
                  key={badge} 
                  variant={badge === "Expert" ? "expert" : badge === "Maintainer" ? "maintainer" : "contributor"}
                  className="text-xs"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <div className="text-center">
              <p className="font-display font-bold text-lg text-foreground">{score.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Score</p>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-lg text-foreground">{contributions}</p>
              <p className="text-xs text-muted-foreground">Contributions</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-success" />
                <span className="font-display font-bold text-lg text-foreground">{verified}</span>
              </div>
              <p className="text-xs text-muted-foreground">Verified</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
