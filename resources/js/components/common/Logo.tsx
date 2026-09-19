import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** `light` is the lockup for dark surfaces. `dark` is for light surfaces. */
  variant?: 'light' | 'dark'
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  return (
    <img
      src={variant === 'light' ? '/images/light-logo-on-dark.png' : '/images/light-logo.png'}
      alt="MileSoftwares"
      className={cn('h-8 w-auto', className)}
    />
  )
}
