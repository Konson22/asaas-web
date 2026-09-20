import type { ReactNode } from 'react'
import { Container } from '@/components/common/Container'
import { cn } from '@/lib/utils'

export interface PageHeroProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  /** Optional slot above the eyebrow — typically breadcrumbs. */
  lead?: ReactNode
  children?: ReactNode
  align?: 'left' | 'center'
  size?: 'default' | 'compact'
  /** Full-bleed backdrop. Swap per page when a dedicated asset exists. */
  image?: string
  className?: string
}

const DEFAULT_IMAGE = '/images/pricing-bg.png'

/** Compact inner-page banner. Home uses `HeroSection` instead. */
export function PageHero({
  eyebrow,
  title,
  description,
  lead,
  children,
  align = 'left',
  size = 'default',
  image = DEFAULT_IMAGE,
  className,
}: PageHeroProps) {
  const centered = align === 'center'

  return (
    <section className={cn('relative overflow-hidden bg-navy-deep', className)}>
      <img
        src={image}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover object-right select-none"
        aria-hidden="true"
      />
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          centered
            ? 'bg-navy-deep/70'
            : 'bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/25',
        )}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-16 top-[-6rem] h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -left-20 bottom-[-5rem] h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
      </div>

      <Container
        className={cn(
          'relative flex flex-col gap-4',
          size === 'compact' ? 'py-8 lg:py-9' : 'py-10 lg:py-12',
          centered ? 'items-center text-center' : 'items-start',
        )}
      >
        {lead}
        {eyebrow ? (
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-bright">
            <span className="h-px w-4 bg-blue-bright/60" aria-hidden="true" />
            {eyebrow}
          </span>
        ) : null}
        <h1
          className={cn(
            'font-bold leading-[1.12] tracking-tight text-white',
            size === 'compact'
              ? 'max-w-2xl text-[clamp(1.65rem,3vw,2.25rem)]'
              : 'max-w-3xl text-[clamp(1.9rem,3.8vw,2.85rem)]',
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              'text-sm leading-relaxed text-white/70 sm:text-base',
              size === 'compact' ? 'max-w-xl' : 'max-w-2xl',
            )}
          >
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
