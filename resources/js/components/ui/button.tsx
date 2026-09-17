import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5',
  {
    variants: {
      variant: {
        // Primary and cta are the same blue treatment — brief §8 has one CTA
        // color (blue); `cta` kept as an alias so call sites don't all need editing.
        primary: 'bg-primary text-white hover:bg-primary-dark',
        cta: 'bg-primary text-white hover:bg-primary-dark',
        secondary:
          'border border-primary/30 bg-transparent text-primary hover:border-primary/60 hover:bg-primary/5',
        // White bg / blue text — for a primary CTA sitting on the navy→blue
        // gradient bands, where a solid blue button would blend in (brief §14).
        onGradient: 'bg-white text-primary hover:bg-white/90',
        outline:
          'border border-border bg-transparent text-ink hover:border-primary/40 hover:bg-surface',
        ghost: 'text-ink-muted hover:bg-surface hover:text-ink',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-12 px-7 text-base',
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
