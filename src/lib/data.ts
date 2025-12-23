import { BookOpen, Brain, Users, GitBranch, Trophy, Shield } from "lucide-react";

export const features = [
  {
    icon: Brain,
    title: "AI-Powered Search",
    description: "Get instant answers from our verified knowledge base before asking new questions",
  },
  {
    icon: BookOpen,
    title: "Syllabus-Aware",
    description: "Content aligned with your curriculum, organized by semester and subject",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Students and educators collaborate to build and verify knowledge",
  },
  {
    icon: GitBranch,
    title: "Version Controlled",
    description: "Every contribution is tracked, reviewed, and merged transparently",
  },
  {
    icon: Trophy,
    title: "Earn Recognition",
    description: "Build your contributor profile and climb the leaderboard",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Multi-tier verification ensures accurate, reliable content",
  },
];

export const institutions = [
  { id: "1", name: "Stanford University", domain: "stanford.edu" },
  { id: "2", name: "MIT", domain: "mit.edu" },
  { id: "3", name: "Harvard University", domain: "harvard.edu" },
  { id: "4", name: "UC Berkeley", domain: "berkeley.edu" },
  { id: "5", name: "Carnegie Mellon", domain: "cmu.edu" },
];

export const departments = [
  { id: "cs", name: "Computer Science" },
  { id: "ee", name: "Electrical Engineering" },
  { id: "me", name: "Mechanical Engineering" },
  { id: "math", name: "Mathematics" },
  { id: "physics", name: "Physics" },
  { id: "chem", name: "Chemistry" },
];

export const semesters = [
  { id: "1", name: "Semester 1" },
  { id: "2", name: "Semester 2" },
  { id: "3", name: "Semester 3" },
  { id: "4", name: "Semester 4" },
  { id: "5", name: "Semester 5" },
  { id: "6", name: "Semester 6" },
  { id: "7", name: "Semester 7" },
  { id: "8", name: "Semester 8" },
];

export const subjects = [
  { id: "ds", name: "Data Structures", code: "CS201", semester: "3" },
  { id: "algo", name: "Algorithms", code: "CS301", semester: "4" },
  { id: "os", name: "Operating Systems", code: "CS302", semester: "5" },
  { id: "dbms", name: "Database Management", code: "CS303", semester: "5" },
  { id: "cn", name: "Computer Networks", code: "CS401", semester: "6" },
  { id: "ml", name: "Machine Learning", code: "CS501", semester: "7" },
];

export const mockQuestions = [
  {
    id: "1",
    title: "Explain the difference between stack and queue data structures",
    subject: "Data Structures",
    difficulty: "easy" as const,
    votes: 245,
    answers: 12,
    verified: true,
    tags: ["stack", "queue", "fundamentals"],
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "How does Dijkstra's algorithm work for finding shortest paths?",
    subject: "Algorithms",
    difficulty: "medium" as const,
    votes: 189,
    answers: 8,
    verified: true,
    tags: ["graphs", "shortest-path", "dijkstra"],
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    title: "Explain process scheduling in operating systems",
    subject: "Operating Systems",
    difficulty: "hard" as const,
    votes: 156,
    answers: 6,
    verified: false,
    tags: ["scheduling", "processes", "cpu"],
    createdAt: "2024-01-08",
  },
];

export const mockContributors = [
  {
    id: "1",
    name: "Alex Chen",
    avatar: "",
    score: 2450,
    contributions: 89,
    verified: 45,
    rank: 1,
    badges: ["Expert", "Maintainer"],
  },
  {
    id: "2",
    name: "Sarah Miller",
    avatar: "",
    score: 2120,
    contributions: 72,
    verified: 38,
    rank: 2,
    badges: ["Contributor"],
  },
  {
    id: "3",
    name: "James Wilson",
    avatar: "",
    score: 1890,
    contributions: 65,
    verified: 32,
    rank: 3,
    badges: ["Contributor"],
  },
];
