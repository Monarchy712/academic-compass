import { BookOpen, Brain, Users, GitBranch, Trophy, Shield } from "lucide-react";

export const features = [
  {
    icon: Brain,
    title: "AI-Powered Search",
    description: "Find verified answers instantly from our IIIT Nagpur knowledge base before asking",
  },
  {
    icon: BookOpen,
    title: "Syllabus-Aligned",
    description: "Content structured around IIIT Nagpur curriculum, semester-wise and subject-specific",
  },
  {
    icon: Users,
    title: "Student Verified",
    description: "Every answer reviewed and validated by fellow IIITN students and maintainers",
  },
  {
    icon: GitBranch,
    title: "Version Controlled",
    description: "Transparent contribution tracking with diff-based edits and merge approvals",
  },
  {
    icon: Trophy,
    title: "Earn Recognition",
    description: "Build your contributor profile with algorithmic scoring and campus leaderboards",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Multi-tier verification ensures accurate, reliable academic content",
  },
];

// IIIT Nagpur is the only institution - this is a private platform
export const institutions = [
  { id: "iiitn", name: "IIIT Nagpur", domain: "iiitn.ac.in" },
];

export const departments = [
  { id: "cse", name: "Computer Science & Engineering" },
  { id: "ece", name: "Electronics & Communication Engineering" },
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
  { id: "algo", name: "Design & Analysis of Algorithms", code: "CS301", semester: "4" },
  { id: "os", name: "Operating Systems", code: "CS302", semester: "5" },
  { id: "dbms", name: "Database Management Systems", code: "CS303", semester: "5" },
  { id: "cn", name: "Computer Networks", code: "CS401", semester: "6" },
  { id: "ml", name: "Machine Learning", code: "CS501", semester: "7" },
  { id: "coa", name: "Computer Organization & Architecture", code: "CS202", semester: "3" },
  { id: "toc", name: "Theory of Computation", code: "CS304", semester: "5" },
];

export const mockQuestions = [
  {
    id: "1",
    title: "How is the grading scheme for CS201 midsems at IIIT Nagpur?",
    subject: "Data Structures",
    difficulty: "easy" as const,
    votes: 89,
    answers: 5,
    verified: true,
    tags: ["midsem", "grading", "cs201"],
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "What are the best resources for DAA previous year papers?",
    subject: "Design & Analysis of Algorithms",
    difficulty: "medium" as const,
    votes: 156,
    answers: 8,
    verified: true,
    tags: ["pyqs", "daa", "resources"],
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    title: "Explain the hostel allotment process for 2nd year students",
    subject: "Campus Life",
    difficulty: "easy" as const,
    votes: 234,
    answers: 12,
    verified: true,
    tags: ["hostel", "allotment", "rules"],
    createdAt: "2024-01-08",
  },
  {
    id: "4",
    title: "How to prepare for the OS viva based on last semester's pattern?",
    subject: "Operating Systems",
    difficulty: "medium" as const,
    votes: 112,
    answers: 6,
    verified: true,
    tags: ["viva", "os", "preparation"],
    createdAt: "2024-01-05",
  },
];

export const mockContributors = [
  {
    id: "1",
    name: "Arjun Sharma",
    avatar: "",
    score: 2450,
    contributions: 89,
    verified: 45,
    rank: 1,
    badges: ["Expert", "Maintainer"],
    batch: "2022",
    branch: "CSE",
  },
  {
    id: "2",
    name: "Priya Patel",
    avatar: "",
    score: 2120,
    contributions: 72,
    verified: 38,
    rank: 2,
    badges: ["Contributor"],
    batch: "2023",
    branch: "ECE",
  },
  {
    id: "3",
    name: "Rahul Verma",
    avatar: "",
    score: 1890,
    contributions: 65,
    verified: 32,
    rank: 3,
    badges: ["Contributor"],
    batch: "2022",
    branch: "CSE",
  },
];
