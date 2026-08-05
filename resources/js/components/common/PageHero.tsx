import type { ReactNode } from 'react'
import { Container } from '@/components/common/Container'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
  /** Vertical padding size. Defaults to the standard subpage hero height. */
  size?: 'default' | 'compact'
}

/** Dark-navy hero used at the top of every subpage. */
export function PageHero({ eyebrow, title, description, children, size = 'default' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-darker">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #3A8FFF 0%, transparent 70%)' }}
      />
      <Container
        className={cn(
          'relative flex flex-col items-start gap-5',
          size === 'compact' ? 'py-10 lg:py-12' : 'py-20 lg:py-24',
        )}
      >
        {eyebrow ? (
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-light">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
          {title}
        </h1>
        {description ? <p className="max-w-2xl text-lg text-white/70">{description}</p> : null}
        {children}
      </Container>
    </section>
  )
}
