import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-primary-foreground shadow-soft hover:shadow-medium transform hover:scale-105",
        destructive:
          "bg-gradient-to-r from-error to-red-600 hover:from-red-600 hover:to-red-700 text-destructive-foreground shadow-soft hover:shadow-medium transform hover:scale-105",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-medium",
        secondary:
          "bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-secondary-foreground shadow-soft hover:shadow-medium transform hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-accent-foreground shadow-soft hover:shadow-medium transform hover:scale-105",
        neutral: "bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 hover:from-neutral-200 hover:to-neutral-300 dark:hover:from-neutral-700 dark:hover:to-neutral-600 text-neutral-foreground shadow-soft hover:shadow-medium transform hover:scale-105",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-3",
        lg: "h-14 rounded-2xl px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
