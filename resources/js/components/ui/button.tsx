import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5 active:scale-[0.98]',
  {
    variants: {
      variant: {
        // Solid brand blue — secondary strong action (e.g. "Explore All Products").
        primary:
          'bg-primary text-white shadow-[0_10px_20px_-12px_rgb(18_104_243_/0.55)] hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_14px_28px_-12px_rgb(18_104_243_/0.6)]',
        // Blue → cyan gradient — THE primary CTA everywhere ("Get Started", "Talk to Us").
        cta: 'bg-gradient-to-r from-primary to-blue-bright text-white shadow-[0_10px_20px_-12px_rgb(18_104_243_/0.5)] hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgb(18_104_243_/0.55)]',
        accent: 'border border-cyan/40 bg-white text-ink hover:border-cyan hover:bg-cyan/10',
        secondary: 'border border-border bg-white text-ink hover:border-primary/40 hover:bg-primary/5',
        onGradient: 'bg-white text-primary shadow-sm hover:bg-white/90',
        // Dark-section secondary (light border, white text) — "Explore Solutions", "Contact Us".
        onGradientOutline:
          'border border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10',
        // Same treatment as `cta` — kept as its own variant name for existing callers (Products.tsx)
        // so every primary action on the site reads as one consistent blue-to-cyan gradient.
        bandGreen:
          'bg-gradient-to-r from-primary to-blue-bright text-white shadow-[0_10px_20px_-12px_rgb(18_104_243_/0.5)] hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgb(18_104_243_/0.55)]',
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
