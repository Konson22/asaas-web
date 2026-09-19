import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5 active:scale-[0.98]',
  {
    variants: {
      variant: {
        // Purple brand button — secondary strong action (e.g. "Explore All Products").
        primary:
          'bg-primary text-white shadow-[0_12px_24px_-12px_rgb(109_40_232_/0.7)] hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_18px_32px_-12px_rgb(109_40_232_/0.85)]',
        // Lime green — THE primary CTA everywhere ("Get a Free Demo", "Get Started").
        cta: 'bg-lime text-navy-deep shadow-[0_12px_24px_-12px_rgb(22_232_92_/0.55)] hover:-translate-y-0.5 hover:bg-lime-bright hover:shadow-[0_18px_32px_-12px_rgb(22_232_92_/0.6)]',
        accent: 'border border-lime/50 bg-white text-ink hover:border-lime hover:bg-lime/10',
        secondary: 'border border-border bg-white text-ink hover:border-primary/40 hover:bg-primary/5',
        onGradient: 'bg-lime text-navy-deep shadow-sm hover:bg-lime-bright',
        // Dark-section secondary (light border, white text) — "Explore Solutions", "Contact Us".
        onGradientOutline:
          'border border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10',
        bandGreen:
          'bg-lime text-navy-deep shadow-[0_12px_24px_-12px_rgb(22_232_92_/0.55)] hover:-translate-y-0.5 hover:bg-lime-bright',
        // Kept as its own variant name for existing callers (Products.tsx, BrandStatementSection)
        // but repurposed to the dark-section outline style, not a solid orange fill — orange
        // stays a small accent, never a major button/page color.
        bandOrange:
          'border border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10',
        outline: 'border border-border bg-white text-ink hover:border-primary/50 hover:bg-primary/5',
        ghost: 'text-ink-muted hover:bg-primary/5 hover:text-ink',
        link: 'rounded-none text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-[3.25rem] px-8 text-base',
        icon: 'h-10 w-10 hover:[&_svg]:translate-x-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- shadcn cva variant export
export { Button, buttonVariants }
export type { ButtonProps }
