import type { ReactNode } from 'react'
import { Link } from '@inertiajs/react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'

interface CtaSectionProps {
  title?: string
  description?: string
  actions?: ReactNode
}

export function CtaSection({
  title = 'Ready to Modernize Your Business?',
  description = 'Whether you need a standardized, out-of-the-box solution or a fully customized enterprise system, Asas Vantage provides the power and flexibility to match your ambition.',
  actions,
}: CtaSectionProps) {
  return (
    <section id="cta" className="scroll-mt-20 relative overflow-hidden bg-primary-darker py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <SectionHeading tone="dark" title={title} description={description} />
        <div className="flex flex-col gap-3 sm:flex-row">
          {actions ?? (
            <>
              <Button variant="cta" size="lg" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Request a Demo</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </>
          )}
        </div>
      </Container>
    </section>
  )
}
