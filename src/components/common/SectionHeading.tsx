import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  /** Use "dark" on dark-navy sections (Hero, CTA). */
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
            'text-sm font-semibold uppercase tracking-wide',
            tone === 'dark' ? 'text-primary-light' : 'text-primary',
          )}
        >
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
            tone === 'dark' ? 'text-white/70' : 'text-ink-muted',
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
