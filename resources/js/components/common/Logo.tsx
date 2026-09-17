import { cn } from '@/lib/utils'

interface LogoProps {
  /** Kept for call-site compatibility; the dark site always uses a white wordmark. */
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span className="inline-flex items-center">
      <img src="/images/logo-icon.png" alt="MileSoftware" className={cn('h-8 w-auto', className)} />
    </span>
  )
}
