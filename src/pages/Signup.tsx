import { useState } from "react";
import { Brain, Mail, ArrowRight, Eye, EyeOff, Building, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { institutions, departments, semesters } from "@/lib/data";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [institution, setInstitution] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Handle signup
      console.log("Signup:", { email, password, institution, department, semester });
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      
      <main className="flex items-center justify-center min-h-screen pt-16 px-4 py-8">
        <Card variant="elevated" className="w-full max-w-md animate-scale-in">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-medium">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription>
              {step === 1 ? "Sign up with your college email" : "Select your academic details"}
            </CardDescription>
            
            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className={`w-8 h-1 rounded-full ${step >= 1 ? "gradient-primary" : "bg-muted"}`} />
              <div className={`w-8 h-1 rounded-full ${step >= 2 ? "gradient-primary" : "bg-muted"}`} />
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email">College Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@university.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Use your official college email for verification
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label>Institution</Label>
                    <Select value={institution} onValueChange={setInstitution}>
                      <SelectTrigger>
                        <Building className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Select your institution" />
                      </SelectTrigger>
                      <SelectContent>
                        {institutions.map((inst) => (
                          <SelectItem key={inst.id} value={inst.id}>
                            {inst.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Department</Label>
                    <Select value={department} onValueChange={setDepartment}>
                      <SelectTrigger>
                        <GraduationCap className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Select your department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.id} value={dept.id}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Current Semester</Label>
                    <Select value={semester} onValueChange={setSemester}>
                      <SelectTrigger>
                        <BookOpen className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Select your semester" />
                      </SelectTrigger>
                      <SelectContent>
                        {semesters.map((sem) => (
                          <SelectItem key={sem.id} value={sem.id}>
                            {sem.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <div className="flex gap-3">
                {step > 1 && (
                  <Button variant="outline" type="button" onClick={() => setStep(step - 1)} className="flex-1">
                    Back
                  </Button>
                )}
                <Button variant="hero" className="flex-1" type="submit">
                  {step === 1 ? "Continue" : "Create Account"}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-accent hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
