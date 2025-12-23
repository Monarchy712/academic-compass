import { Search, MessageSquare, CheckCircle, GitMerge, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search First",
    description: "AI scans our knowledge base for existing verified answers to your question",
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Ask or Contribute",
    description: "If no answer exists, submit your question or provide an answer to help others",
    color: "primary",
  },
  {
    icon: CheckCircle,
    title: "Community Review",
    description: "Peers vote, suggest edits, and verify accuracy through collaborative review",
    color: "success",
  },
  {
    icon: GitMerge,
    title: "Maintainer Approval",
    description: "Subject experts review and merge verified content into the knowledge base",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Earn Recognition",
    description: "Your contributions are scored and displayed on your public profile",
    color: "primary",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A transparent, open-source workflow that ensures quality and rewards contribution.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-medium ${
                  step.color === "accent" ? "bg-accent/10" :
                  step.color === "primary" ? "gradient-primary" :
                  "bg-success/10"
                }`}>
                  <step.icon className={`w-7 h-7 ${
                    step.color === "accent" ? "text-accent" :
                    step.color === "primary" ? "text-primary-foreground" :
                    "text-success"
                  }`} />
                </div>
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 pt-2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
