import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Trust level badges
        verified: "border-transparent bg-trust-verified text-success-foreground",
        community: "border-transparent bg-trust-community text-accent-foreground",
        pending: "border-transparent bg-trust-pending text-warning-foreground",
        // Contribution badges
        contributor: "border-accent/30 bg-accent/10 text-accent",
        maintainer: "border-primary/30 bg-primary/10 text-primary",
        expert: "gradient-primary text-primary-foreground border-0",
        // Subject badges
        subject: "border-muted bg-muted text-muted-foreground hover:bg-muted/80",
        // Difficulty levels
        easy: "border-success/30 bg-success/10 text-success",
        medium: "border-warning/30 bg-warning/10 text-warning",
        hard: "border-destructive/30 bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
