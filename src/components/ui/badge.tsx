import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
  {
    variants: {
      variant: {
        primary: 'bg-primary/10 text-primary',
        accent: 'bg-accent/15 text-accent-dark',
        outline: 'border border-border text-ink-muted',
        inverted: 'bg-white/10 text-white',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />
}

// eslint-disable-next-line react-refresh/only-export-components -- shadcn cva variant export
export { Badge, badgeVariants }
