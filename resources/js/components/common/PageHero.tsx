import type { ReactNode } from 'react'
import { Container } from '@/components/common/Container'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  children?: ReactNode
  /** Vertical padding size. Defaults to the standard subpage hero height. */
  size?: 'default' | 'compact'
}

/** Hero banner used at the top of every subpage. Tracks the active theme. */
export function PageHero({ eyebrow, title, description, children, size = 'default' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-primary/20" />
      <Container
        className={cn(
          'relative flex flex-col items-start gap-5',
          size === 'compact' ? 'py-10 lg:py-12' : 'py-20 lg:py-24',
        )}
      >
        {eyebrow ? (
          <span className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? <p className="max-w-2xl text-lg text-ink-muted">{description}</p> : null}
        {children}
      </Container>
    </section>
  )
}
