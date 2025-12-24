import { 
  Phone, 
  Mail, 
  MapPin, 
  Building2, 
  GraduationCap,
  Shield,
  Users,
  BookOpen,
  Home,
  Briefcase,
  ChevronRight,
  Search
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ContactInfo {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  office?: string;
  category: "administration" | "academic" | "hostel" | "student-affairs" | "department";
}

const directoryContacts: ContactInfo[] = [
  // Administration
  {
    id: "1",
    name: "Prof. (Dr.) O.P. Vyas",
    designation: "Director",
    department: "Administration",
    email: "director@iiitn.ac.in",
    phone: "+91-7104-237001",
    office: "Administrative Block, Room 101",
    category: "administration"
  },
  {
    id: "2",
    name: "Prof. (Dr.) Nisheeth Joshi",
    designation: "Registrar",
    department: "Administration",
    email: "registrar@iiitn.ac.in",
    phone: "+91-7104-237002",
    office: "Administrative Block, Room 102",
    category: "administration"
  },
  {
    id: "3",
    name: "Mr. Rajesh Kumar",
    designation: "Administrative Officer",
    department: "Administration",
    email: "ao@iiitn.ac.in",
    phone: "+91-7104-237003",
    office: "Administrative Block, Room 105",
    category: "administration"
  },
  // Academic
  {
    id: "4",
    name: "Prof. (Dr.) Anurag Shrivastava",
    designation: "Dean (Academics)",
    department: "Academic Affairs",
    email: "dean.academics@iiitn.ac.in",
    phone: "+91-7104-237010",
    office: "Academic Block, Room 201",
    category: "academic"
  },
  {
    id: "5",
    name: "Dr. Priya Sharma",
    designation: "Deputy Registrar (Academics)",
    department: "Academic Affairs",
    email: "dr.academics@iiitn.ac.in",
    phone: "+91-7104-237011",
    office: "Academic Block, Room 202",
    category: "academic"
  },
  {
    id: "6",
    name: "Mr. Sunil Patil",
    designation: "Examination Controller",
    department: "Examination Cell",
    email: "exam@iiitn.ac.in",
    phone: "+91-7104-237015",
    office: "Academic Block, Room 105",
    category: "academic"
  },
  // Student Affairs
  {
    id: "7",
    name: "Prof. (Dr.) Manish Shrivastava",
    designation: "Dean (Student Welfare)",
    department: "Student Affairs",
    email: "dsw@iiitn.ac.in",
    phone: "+91-7104-237020",
    office: "Student Activity Center, Room 101",
    category: "student-affairs"
  },
  {
    id: "8",
    name: "Dr. Rekha Verma",
    designation: "Faculty Advisor (Clubs)",
    department: "Student Affairs",
    email: "clubs@iiitn.ac.in",
    phone: "+91-7104-237021",
    office: "SAC, Room 103",
    category: "student-affairs"
  },
  {
    id: "9",
    name: "Mr. Amit Deshmukh",
    designation: "Sports Officer",
    department: "Sports Cell",
    email: "sports@iiitn.ac.in",
    phone: "+91-7104-237025",
    office: "Sports Complex",
    category: "student-affairs"
  },
  // Hostel
  {
    id: "10",
    name: "Dr. Sandeep Mehta",
    designation: "Chief Warden",
    department: "Hostel Administration",
    email: "chiefwarden@iiitn.ac.in",
    phone: "+91-7104-237030",
    office: "Hostel Office, Ground Floor",
    category: "hostel"
  },
  {
    id: "11",
    name: "Dr. Priyanka Jain",
    designation: "Warden (Boys Hostel)",
    department: "Hostel Administration",
    email: "warden.boys@iiitn.ac.in",
    phone: "+91-7104-237031",
    office: "Boys Hostel, Warden Residence",
    category: "hostel"
  },
  {
    id: "12",
    name: "Dr. Neha Gupta",
    designation: "Warden (Girls Hostel)",
    department: "Hostel Administration",
    email: "warden.girls@iiitn.ac.in",
    phone: "+91-7104-237032",
    office: "Girls Hostel, Warden Residence",
    category: "hostel"
  },
  {
    id: "13",
    name: "Mr. Vinod Thakur",
    designation: "Mess Manager",
    department: "Hostel Mess",
    email: "mess@iiitn.ac.in",
    phone: "+91-7104-237035",
    office: "Central Mess Building",
    category: "hostel"
  },
  // Department Heads
  {
    id: "14",
    name: "Prof. (Dr.) Rajeev Tripathi",
    designation: "HOD - Computer Science",
    department: "CSE Department",
    email: "hod.cse@iiitn.ac.in",
    phone: "+91-7104-237040",
    office: "CSE Building, Room 301",
    category: "department"
  },
  {
    id: "15",
    name: "Prof. (Dr.) Amit Kumar Singh",
    designation: "HOD - Electronics",
    department: "ECE Department",
    email: "hod.ece@iiitn.ac.in",
    phone: "+91-7104-237041",
    office: "ECE Building, Room 301",
    category: "department"
  },
  {
    id: "16",
    name: "Dr. Pooja Rathi",
    designation: "Faculty Coordinator (Placements)",
    department: "Training & Placement Cell",
    email: "placements@iiitn.ac.in",
    phone: "+91-7104-237050",
    office: "T&P Block, Room 101",
    category: "department"
  },
  {
    id: "17",
    name: "Mr. Rahul Joshi",
    designation: "Placement Officer",
    department: "Training & Placement Cell",
    email: "tpo@iiitn.ac.in",
    phone: "+91-7104-237051",
    office: "T&P Block, Room 102",
    category: "department"
  },
];

const categoryConfig = {
  "administration": { 
    label: "Administration", 
    icon: Building2, 
    color: "bg-primary/10 text-primary" 
  },
  "academic": { 
    label: "Academic Affairs", 
    icon: GraduationCap, 
    color: "bg-accent/10 text-accent" 
  },
  "student-affairs": { 
    label: "Student Affairs", 
    icon: Users, 
    color: "bg-success/10 text-success" 
  },
  "hostel": { 
    label: "Hostel", 
    icon: Home, 
    color: "bg-warning/10 text-warning" 
  },
  "department": { 
    label: "Departments", 
    icon: Briefcase, 
    color: "bg-muted-foreground/10 text-muted-foreground" 
  },
};

export default function CollegeDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredContacts = directoryContacts.filter((contact) => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || contact.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = Object.entries(categoryConfig);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span>Dashboard</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">College Directory</span>
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              IIIT Nagpur Directory
            </h1>
            <p className="text-muted-foreground">
              Contact information for all college authorities, departments, and administrative offices.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by name, designation, or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                All Contacts
              </button>
              {categories.map(([key, config]) => {
                const Icon = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                      selectedCategory === key 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts.map((contact) => {
              const categoryInfo = categoryConfig[contact.category];
              const CategoryIcon = categoryInfo.icon;
              
              return (
                <Card key={contact.id} variant="interactive" className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{contact.name}</CardTitle>
                        <CardDescription className="font-medium text-foreground/80">
                          {contact.designation}
                        </CardDescription>
                      </div>
                      <Badge className={categoryInfo.color}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {categoryInfo.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{contact.department}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-accent" />
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-accent hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-success" />
                      <a 
                        href={`tel:${contact.phone}`} 
                        className="text-foreground hover:text-accent"
                      >
                        {contact.phone}
                      </a>
                    </div>
                    
                    {contact.office && (
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{contact.office}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No contacts found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}

          {/* Emergency Contacts */}
          <Card className="mt-12 border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Shield className="w-5 h-5" />
                Emergency Contacts
              </CardTitle>
              <CardDescription>
                For urgent matters and emergencies on campus
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-background border">
                  <h4 className="font-semibold text-foreground mb-1">Security Office</h4>
                  <p className="text-sm text-muted-foreground mb-2">24/7 Campus Security</p>
                  <a href="tel:+917104237099" className="text-accent font-medium">
                    +91-7104-237099
                  </a>
                </div>
                <div className="p-4 rounded-lg bg-background border">
                  <h4 className="font-semibold text-foreground mb-1">Medical Emergency</h4>
                  <p className="text-sm text-muted-foreground mb-2">Campus Health Center</p>
                  <a href="tel:+917104237098" className="text-accent font-medium">
                    +91-7104-237098
                  </a>
                </div>
                <div className="p-4 rounded-lg bg-background border">
                  <h4 className="font-semibold text-foreground mb-1">Anti-Ragging Cell</h4>
                  <p className="text-sm text-muted-foreground mb-2">Confidential Helpline</p>
                  <a href="tel:+917104237097" className="text-accent font-medium">
                    +91-7104-237097
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
