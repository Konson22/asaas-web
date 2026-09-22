import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /** `light` is the full-color lockup for dark surfaces (footer). The artwork
   *  is on white, so it is shown as a rounded plate there.
   *  `dark` (default) is the same lockup for light surfaces (navbar, mobile nav). */
  variant?: 'light' | 'dark'
  /** Icon-only mark, no wordmark — for tight spaces. */
  mark?: boolean
}

export function Logo({ className, variant = 'dark', mark = false }: LogoProps) {
  const src = mark ? '/images/logo-icon.png' : '/images/app-logo.png'

  return (
    <img
      src={src}
      alt="Miles Global Softwares"
      className={cn(
        mark ? 'h-9 w-auto' : 'h-12 w-auto',
        variant === 'light' && !mark && 'rounded-lg bg-white',
        className,
      )}
    />
  )
}
