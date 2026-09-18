import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-0.5',
  {
    variants: {
      variant: {
        primary: 'bg-brand-gradient text-white hover:opacity-90',
        cta: 'bg-brand-gradient text-white hover:opacity-90',
        accent: 'bg-lime text-primary hover:bg-lime/90',
        secondary: 'bg-surface-purple text-primary hover:bg-primary/10',
        onGradient: 'bg-white text-primary hover:bg-white/90',
        onGradientOutline:
          'border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10',
        outline: 'border border-primary bg-white text-primary hover:bg-surface-purple',
        ghost: 'text-ink-muted hover:bg-primary/5 hover:text-ink',
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
