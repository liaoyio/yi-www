import React from 'react'

import { cn } from '@lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

// 1. add tailwindcss colors

/* tailwind.config.js theme.extend
colors: {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: {
      DEFAULT: "hsl(var(--primary))",
      foreground: "hsl(var(--primary-foreground))",
    },
    secondary: {
      DEFAULT: "hsl(var(--secondary))",
      foreground: "hsl(var(--secondary-foreground))",
    },
    destructive: {
      DEFAULT: "hsl(var(--destructive))",
      foreground: "hsl(var(--destructive-foreground))",
    },
    accent: {
      DEFAULT: "hsl(var(--accent))",
      foreground: "hsl(var(--accent-foreground))",
    }
}
*/

// 2. add tailwindcss variants
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <>
        <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
        <style global jsx>{`
          :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 3.9%;

            --border: 0 0% 89.8%;
            --input: 0 0% 89.8%;

            --primary: 0 0% 9%;
            --primary-foreground: 0 0% 98%;

            --secondary: 0 0% 96.1%;
            --secondary-foreground: 0 0% 9%;

            --accent: 0 0% 96.1%;
            --accent-foreground: 0 0% 9%;

            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;

            --ring: 0 0% 63.9%;

            --radius: 0.5rem;
          }

          .dark {
            --background: 0 0% 3.9%;
            --foreground: 0 0% 98%;

            --border: 0 0% 14.9%;
            --input: 0 0% 14.9%;

            --primary: 0 0% 98%;
            --primary-foreground: 0 0% 9%;

            --secondary: 0 0% 14.9%;
            --secondary-foreground: 0 0% 98%;

            --accent: 0 0% 14.9%;
            --accent-foreground: 0 0% 98%;

            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 85.7% 97.3%;

            --ring: 0 0% 14.9%;
          }
        `}</style>
      </>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
