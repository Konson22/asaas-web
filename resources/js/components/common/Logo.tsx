import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** 'light' (default) for white/light-blue surfaces — navy-on-white lockup.
   *  'dark' for navy surfaces (e.g. the footer) — white-on-navy lockup. */
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
