import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** 'light' (default) for white surfaces — dark lockup.
   *  'dark' for purple-gradient bands if a reversed lockup is needed. */
  variant?: 'light' | 'dark'
}

export function Logo({ className, variant = 'light' }: LogoProps) {
  return (
    <img
      src={variant === 'dark' ? '/images/dark-logo.png' : '/images/light-logo.png'}
      alt="MileSoftwares"
      className={cn('h-8 w-auto', className)}
    />
  )
}
