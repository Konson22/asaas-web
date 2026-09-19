import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  /** Use "dark" on high-contrast CTA bands. */
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]',
            tone === 'dark' ? 'text-purple-bright' : 'text-primary',
          )}
        >
          <span className={cn('h-px w-4', tone === 'dark' ? 'bg-purple-bright/60' : 'bg-primary/50')} aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight tracking-tight',
          tone === 'dark' ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-base sm:text-lg',
            tone === 'dark' ? 'text-white/75' : 'text-ink-muted',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
