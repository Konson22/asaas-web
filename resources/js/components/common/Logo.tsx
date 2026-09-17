import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  /**
   * Force a specific lockup regardless of the active site theme — for a surface
   * that doesn't track the theme toggle (e.g. the footer, which stays near-black
   * in both themes). Omit to follow the active theme automatically.
   */
  forceTheme?: 'light' | 'dark'
}

/**
 * Both logo files are opaque (no transparency, solid background baked in), so each
 * only reads cleanly against a surface that matches its own background — the
 * light lockup on a white/light surface, the dark lockup on a near-black one.
 * With no override, CSS picks the right file for the active theme (`.dark` on
 * <html>, set before first paint — see app.blade.php) so it's correct with no flash.
 */
export function Logo({ className, forceTheme }: LogoProps) {
  if (forceTheme) {
    return (
      <img
        src={forceTheme === 'dark' ? '/images/dark-logo.png' : '/images/light-logo.png'}
        alt="MileSoftwares"
        className={cn('h-8 w-auto', className)}
      />
    )
  }

  return (
    <span className="inline-flex items-center">
      <img
        src="/images/light-logo.png"
        alt="MileSoftwares"
        className={cn('h-8 w-auto dark:hidden', className)}
      />
      <img
        src="/images/dark-logo.png"
        alt="MileSoftwares"
        className={cn('hidden h-8 w-auto dark:block', className)}
      />
    </span>
  )
}
