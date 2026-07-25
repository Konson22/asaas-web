import { cn } from '@/lib/utils'

interface LogoProps {
  /** Use "dark" when placed on a dark-navy background (footer, CTA, hero). */
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'light', className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img src="/images/logo-icon.png" alt="" className="h-8 w-auto" />
      <span
        className={cn(
          'text-xl font-bold tracking-tight',
          variant === 'dark' ? 'text-white' : 'text-ink',
        )}
      >
        Asas Vantage
      </span>
    </span>
  )
}
