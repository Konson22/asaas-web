import type { ReactNode } from 'react'
import { Link } from '@inertiajs/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'

const productLine = ['Pharmacy', 'School', 'Inventory', 'Restaurant', 'M&E']

interface CtaSectionProps {
  eyebrow?: string
  title?: ReactNode
  subheading?: ReactNode
  description?: string
  actions?: ReactNode
  showProductLine?: boolean
  /** Homepage full-bleed bar vs the default centered band used on inner pages. */
  layout?: 'default' | 'banner'
}

export function CtaSection({
  eyebrow = 'Ready to Get Started?',
  title = 'Your Business Already Has a Way of Working.',
  subheading = 'Your software should fit it.',
  description = 'Choose the application that matches your organization and let us configure it around the way you operate.',
  actions,
  showProductLine = true,
  layout = 'default',
}: CtaSectionProps) {
  if (layout === 'banner') {
    return (
      <section id="cta" className="scroll-mt-20 relative overflow-hidden bg-purple-electric">
        <div className="pointer-events-none absolute inset-0 grid-pattern" />
        <div className="relative clip-cta-diagonal">
          <Container className="flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center sm:py-20">
            <h2 className="max-w-xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            {actions ?? (
              <Button variant="cta" size="lg" asChild>
                <Link href="/contact">
                  Request a Demo
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
          </Container>
        </div>
      </section>
    )
  }

  return (
    <section id="cta" className="scroll-mt-20 relative overflow-hidden bg-purple-electric py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lime">{eyebrow}</p>
        <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h2>
        {subheading ? (
          <p className="max-w-xl text-xl font-semibold text-white/85 sm:text-2xl">{subheading}</p>
        ) : null}
        {description ? <p className="max-w-xl text-base text-white/70">{description}</p> : null}
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          {actions ?? (
            <>
              <Button variant="cta" size="lg" asChild>
                <Link href="/products">
                  Explore Our Apps
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  <MessageCircle className="size-4" />
                  Request a Demo
                </Link>
              </Button>
            </>
          )}
        </div>
        {showProductLine ? (
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 pt-4 text-sm font-medium text-white/70">
            {productLine.map((item, index) => (
              <span key={item} className="flex items-center gap-2">
                {index > 0 ? <span className="text-lime">•</span> : null}
                {item}
              </span>
            ))}
          </p>
        ) : null}
      </Container>
    </section>
  )
}
