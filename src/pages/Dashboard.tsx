import { useState } from "react";
import { 
  BookOpen, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/layout/Header";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { subjects, mockQuestions } from "@/lib/data";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [selectedSubjects] = useState(["ds", "algo", "os"]);

  const userStats = {
    questionsAsked: 12,
    questionsAnswered: 28,
    contributionScore: 450,
    rank: 127,
    verifiedAnswers: 15,
    streak: 7,
  };

  const enrolledSubjects = subjects.filter(s => selectedSubjects.includes(s.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Welcome back, Student! 👋
            </h1>
            <p className="text-muted-foreground">
              You're on a {userStats.streak}-day learning streak. Keep it up!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card variant="interactive">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-foreground">
                      {userStats.contributionScore}
                    </p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </CardContent>
                </Card>
                <Card variant="interactive">
                  <CardContent className="p-4 text-center">
                    <CheckCircle className="w-6 h-6 text-success mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-foreground">
                      {userStats.verifiedAnswers}
                    </p>
                    <p className="text-xs text-muted-foreground">Verified</p>
                  </CardContent>
                </Card>
                <Card variant="interactive">
                  <CardContent className="p-4 text-center">
                    <Star className="w-6 h-6 text-warning mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-foreground">
                      #{userStats.rank}
                    </p>
                    <p className="text-xs text-muted-foreground">Rank</p>
                  </CardContent>
                </Card>
                <Card variant="interactive">
                  <CardContent className="p-4 text-center">
                    <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-foreground">
                      {userStats.streak}
                    </p>
                    <p className="text-xs text-muted-foreground">Day Streak</p>
                  </CardContent>
                </Card>
              </div>

              {/* My Subjects */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-accent" />
                      My Subjects
                    </CardTitle>
                    <Button variant="ghost" size="sm">
                      Manage
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {enrolledSubjects.map((subject) => (
                      <Card key={subject.id} variant="interactive" className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="subject">{subject.code}</Badge>
                          <span className="text-xs text-muted-foreground">
                            Sem {subject.semester}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-foreground mb-2">
                          {subject.name}
                        </h3>
                        <Progress value={65} className="h-2 mb-2" />
                        <p className="text-xs text-muted-foreground">
                          65% syllabus covered
                        </p>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Questions */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Activity</CardTitle>
                    <Button variant="accent" size="sm" asChild>
                      <Link to="/ask">
                        <Plus className="w-4 h-4 mr-1" />
                        Ask Question
                      </Link>
                    </Button>
                  </div>
                  <CardDescription>
                    Questions from your enrolled subjects
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockQuestions.slice(0, 2).map((question) => (
                    <QuestionCard key={question.id} {...question} />
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card variant="glow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-medium">
                    S
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-1">
                    Student Name
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Computer Science • Semester 5
                  </p>
                  <div className="flex justify-center gap-2 mb-4">
                    <Badge variant="contributor">Contributor</Badge>
                    <Badge variant="verified">Verified</Badge>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bell className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <LogOut className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contribution Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">This Week</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Contributions</span>
                      <span className="text-sm font-medium">5/7</span>
                    </div>
                    <Progress value={71} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Reviews</span>
                      <span className="text-sm font-medium">12/15</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/ask">
                      <Plus className="w-4 h-4 mr-2" />
                      Ask a Question
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/explore">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Browse Questions
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/leaderboard">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      View Leaderboard
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
