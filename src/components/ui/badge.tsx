import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full whitespace-nowrap px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80",
        outline: "border border-input bg-background hover:bg-muted",
        muted: "bg-muted text-muted-foreground hover:bg-muted/80",
        info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800",
        date: "bg-muted text-sky-400",
        success:
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800",
        warning:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800",
        error: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        custom1:
          "bg-[#E6F2FF] text-[#16203C] dark:bg-[#16203C] dark:text-[#E6F2FF] hover:bg-[#C9E3FF] dark:hover:bg-[#233052]",
        custom2:
          "bg-[#F0E6FF] text-[#3C1650] dark:bg-[#3C1650] dark:text-[#F0E6FF] hover:bg-[#E0CCFF] dark:hover:bg-[#522173]",
        low: "bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800",
        medium:
          "bg-yellow-50 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200 hover:bg-yellow-100 dark:hover:bg-yellow-800",
        high: "bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-200 hover:bg-red-100 dark:hover:bg-red-800",
        urgent:
          "bg-purple-50 text-purple-600 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-800",
        completed: "border border-input bg-background hover:bg-green-100 border-green-600",
        inProgress: "border border-input bg-background hover:bg-yellow-100 border-yellow-400",
        pending: "border border-input bg-background hover:bg-red-100 border-red-600",
      },
      size: {
        default: "h-6 px-2.5 py-0.5",
        sm: "h-5 px-2 py-0.5 text-xs",
        lg: "h-7 px-3 py-0.5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
