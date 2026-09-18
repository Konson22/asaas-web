import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  /** Use "dark" on navy-gradient CTA bands. */
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
            'inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide',
            tone === 'dark' ? 'text-white/90' : 'text-primary',
          )}
        >
          <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'max-w-2xl text-3xl font-bold sm:text-4xl',
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
