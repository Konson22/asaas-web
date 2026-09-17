import type { ReactNode } from 'react'
import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'

interface CtaSectionProps {
  title?: ReactNode
  description?: string
  actions?: ReactNode
  /** Homepage full-bleed bar vs the default centered band used on inner pages. */
  layout?: 'default' | 'banner'
}

export function CtaSection({
  title = 'Ready to Modernize Your Business?',
  description = 'Whether you need a standardized, out-of-the-box solution or a fully customized enterprise system, MileSoftware provides the power and flexibility to match your ambition.',
  actions,
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
    <section id="cta" className="scroll-mt-20 relative overflow-hidden bg-purple-electric py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full border border-white/10" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <SectionHeading tone="dark" title={title} description={description} />
        <div className="flex flex-col gap-3 sm:flex-row">
          {actions ?? (
            <>
              <Button variant="cta" size="lg" asChild>
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </>
          )}
        </div>
      </Container>
    </section>
  )
}
