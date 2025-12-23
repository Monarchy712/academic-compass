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
            title: "Understanding Binary Search Trees",
            relevance: 95,
            verified: true,
            excerpt: "A binary search tree (BST) is a data structure where each node has at most two children...",
          },
          {
            title: "Tree Traversal Methods Explained",
            relevance: 78,
            verified: true,
            excerpt: "There are three main ways to traverse a binary tree: inorder, preorder, and postorder...",
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
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                Ask a Question
              </h1>
              <p className="text-lg text-muted-foreground">
                Our AI will first search for existing answers before creating a new question
              </p>
            </div>

            {/* Question Form */}
            <Card variant="elevated" className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-accent" />
                  What's your question?
                </CardTitle>
                <CardDescription>
                  Be specific and include relevant context for better results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger>
                      <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((sub) => (
                        <SelectItem key={sub.id} value={sub.id}>
                          {sub.name} ({sub.code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  placeholder="Example: How do I implement a binary search tree in Python? I understand the concept but I'm confused about the insertion method..."
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
                      Searching Knowledge Base...
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
                        We found related answers!
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
                      <Button variant="hero">
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
                  Tips for asking great questions
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Be specific about what you're trying to understand
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Include relevant context (what you've already tried, course material, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Use proper terminology from your syllabus
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Check if a similar question already exists
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
