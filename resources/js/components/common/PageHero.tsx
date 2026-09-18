import type { ReactNode } from 'react'
import { Container } from '@/components/common/Container'
import { BrandBackdrop } from '@/components/common/BrandBackdrop'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  children?: ReactNode
  /** Vertical padding size. Defaults to the standard subpage hero height. */
  size?: 'default' | 'compact'
}

/** Hero banner used at the top of every subpage. */
export function PageHero({ eyebrow, title, description, children, size = 'default' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <BrandBackdrop withAccent />
      <Container
        className={cn(
          'relative flex flex-col items-start gap-5',
          size === 'compact' ? 'py-10 lg:py-12' : 'py-20 lg:py-24',
        )}
      >
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
            <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? <p className="max-w-2xl text-lg text-ink-muted">{description}</p> : null}
        {children}
      </Container>
    </section>
  )
}
