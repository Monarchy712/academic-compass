import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThumbsUp, MessageSquare, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface QuestionCardProps {
  id: string;
  title: string;
  subject: string;
  difficulty: "easy" | "medium" | "hard";
  votes: number;
  answers: number;
  verified: boolean;
  tags: string[];
  createdAt: string;
}

export function QuestionCard({
  id,
  title,
  subject,
  difficulty,
  votes,
  answers,
  verified,
  tags,
}: QuestionCardProps) {
  return (
    <Card variant="interactive" className="group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <Link to={`/question/${id}`} className="flex-1">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>
          {verified ? (
            <Badge variant="verified" className="flex-shrink-0">
              <CheckCircle className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          ) : (
            <Badge variant="pending" className="flex-shrink-0">
              <Clock className="w-3 h-3 mr-1" />
              Pending
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="subject">{subject}</Badge>
          <Badge variant={difficulty}>{difficulty}</Badge>
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            <span>{votes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{answers} answers</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
