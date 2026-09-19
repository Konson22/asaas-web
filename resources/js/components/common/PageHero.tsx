import type { ReactNode } from 'react'
import { Container } from '@/components/common/Container'
import { BrandBackdrop } from '@/components/common/BrandBackdrop'

interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  lead?: ReactNode
  children?: ReactNode
}

/** Compact banner used at the top of every inner page. Home uses HeroSection instead. */
export function PageHero({ eyebrow, title, description, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <BrandBackdrop withAccent />
      <Container className="relative flex flex-col items-start gap-4 py-16 lg:py-20">
        {lead}
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
            <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-3xl text-[clamp(1.85rem,3.4vw,2.75rem)] font-bold leading-tight tracking-tight text-ink">
          {title}
        </h1>
        {description ? <p className="max-w-xl text-sm text-ink-muted sm:text-base">{description}</p> : null}
        {children}
      </Container>
    </section>
  )
}
