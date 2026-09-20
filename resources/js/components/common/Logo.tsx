import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** `light` is the reversed-white lockup for dark surfaces (footer, CTA bands).
   *  `dark` (default) is the full-color lockup for light surfaces (navbar, mobile nav). */
  variant?: 'light' | 'dark'
  /** Icon-only mark, no wordmark — for tight spaces (collapsed nav, favicons-adjacent UI). */
  mark?: boolean
}

export function Logo({ className, variant = 'dark', mark = false }: LogoProps) {
  const src = mark
    ? variant === 'light'
      ? '/images/milesoftwares-mark-white.png'
      : '/images/milesoftwares-mark.png'
    : variant === 'light'
      ? '/images/milesoftwares-logo-white.png'
      : '/images/milesoftwares-logo.png'

  return (
    <img
      src={src}
      alt="MileSoftwares"
      className={cn(mark ? 'h-9 w-auto' : 'h-8 w-auto', className)}
    />
  )
}
