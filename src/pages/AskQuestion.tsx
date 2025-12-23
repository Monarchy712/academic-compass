import { useState } from "react";
import { Search, Sparkles, BookOpen, ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { subjects } from "@/lib/data";

export default function AskQuestionPage() {
  const [question, setQuestion] = useState("");
  const [subject, setSubject] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<null | { found: boolean; results?: any[] }>(null);

  const handleSearch = () => {
    if (!question.trim()) return;
    
    setIsSearching(true);
    // Simulate AI search
    setTimeout(() => {
      setIsSearching(false);
      setSearchResults({
        found: true,
        results: [
          {
            title: "CS201 Midsem Grading Pattern - IIIT Nagpur",
            relevance: 95,
            verified: true,
            excerpt: "The midsem exam for CS201 Data Structures typically follows a 30-mark pattern with 2 coding questions and 3 theory questions...",
          },
          {
            title: "Previous Year CS201 Question Papers",
            relevance: 82,
            verified: true,
            excerpt: "Collection of PYQs from 2020-2024 for Data Structures including solutions verified by senior students...",
          },
        ],
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                Ask a Question
              </h1>
              <p className="text-lg text-muted-foreground">
                Our AI searches the IIITN knowledge base for existing verified answers first
              </p>
            </div>

            {/* Question Form */}
            <Card variant="elevated" className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-accent" />
                  What do you want to know?
                </CardTitle>
                <CardDescription>
                  Be specific - include course codes, semester info, or campus context
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger>
                      <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select a subject or category" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((sub) => (
                        <SelectItem key={sub.id} value={sub.id}>
                          {sub.name} ({sub.code})
                        </SelectItem>
                      ))}
                      <SelectItem value="campus">Campus Life & Rules</SelectItem>
                      <SelectItem value="hostel">Hostel & Accommodation</SelectItem>
                      <SelectItem value="placements">Placements & Internships</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  placeholder="Example: What's the grading scheme for CS201 midsems? How many marks are allocated for theory vs practical?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-[150px] resize-none"
                />

                <Button 
                  variant="accent" 
                  className="w-full" 
                  onClick={handleSearch}
                  disabled={!question.trim() || isSearching}
                >
                  {isSearching ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                      Searching IIITN Knowledge Base...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Search for Answers
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Search Results */}
            {searchResults && (
              <div className="animate-slide-up">
                {searchResults.found && searchResults.results && searchResults.results.length > 0 ? (
                  <Card variant="glow" className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-accent">
                        <Sparkles className="w-5 h-5" />
                        Found verified answers!
                      </CardTitle>
                      <CardDescription>
                        Review these existing solutions before submitting a new question
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {searchResults.results.map((result, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-muted/50 border border-border hover:border-accent/30 transition-colors cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="font-display font-semibold text-foreground">
                              {result.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <Badge variant="verified">Verified</Badge>
                              <Badge variant="contributor">{result.relevance}% match</Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{result.excerpt}</p>
                        </div>
                      ))}

                      <div className="flex items-center gap-4 pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          None of these help?
                        </span>
                        <Button variant="outline">
                          Submit New Question
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>No existing answers found</CardTitle>
                      <CardDescription>
                        Your question will be submitted for community contribution
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="default">
                        Submit Question
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Tips */}
            <Card variant="glass">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Tips for IIITN-specific questions
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Include course codes (CS201, EC301) for academic questions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Mention the semester or batch year for context
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    For hostel/campus queries, specify building or block if relevant
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Check if a similar question already exists in the knowledge base
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
