import { useState } from "react";
import { Search, Filter, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuestionCard } from "@/components/questions/QuestionCard";
import { mockQuestions, subjects } from "@/lib/data";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Explore Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse through our verified knowledge base or search for specific topics
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions, topics, or concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-12 pr-4"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filters:</span>
              </div>

              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.id} value={subject.id}>
                      {subject.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex-1" />

              <Button variant="accent" asChild>
                <Link to="/ask">
                  <Plus className="w-4 h-4 mr-2" />
                  Ask Question
                </Link>
              </Button>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2">
              {selectedSubject !== "all" && (
                <Badge variant="contributor" className="cursor-pointer" onClick={() => setSelectedSubject("all")}>
                  {subjects.find(s => s.id === selectedSubject)?.name} ×
                </Badge>
              )}
              {selectedDifficulty !== "all" && (
                <Badge variant="contributor" className="cursor-pointer" onClick={() => setSelectedDifficulty("all")}>
                  {selectedDifficulty} ×
                </Badge>
              )}
            </div>
          </div>

          {/* Questions Grid */}
          <div className="max-w-4xl mx-auto space-y-4">
            {mockQuestions.map((question) => (
              <QuestionCard key={question.id} {...question} />
            ))}

            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline">Load More Questions</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
