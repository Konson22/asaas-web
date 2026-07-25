import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { pricingPlans } from '@/data/pricing'
import { cn } from '@/lib/utils'

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-surface py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent pricing based on how you choose to deploy"
          description="Start free, upgrade as you grow, or move to an offline license when you need it."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.05}>
              <Card
                className={cn(
                  'flex h-full flex-col gap-6 p-8',
                  plan.highlighted && 'border-primary shadow-lg ring-1 ring-primary',
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
                  {plan.highlighted ? <Badge variant="primary">Most Popular</Badge> : null}
                </div>
                <div>
                  <span className="text-3xl font-bold text-ink">{plan.price}</span>
                  {plan.period ? (
                    <span className="ml-1 text-sm text-ink-muted">{plan.period}</span>
                  ) : null}
                </div>
                <p className="text-sm text-ink-muted">{plan.bestFor}</p>
                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.highlighted ? 'primary' : 'outline'} asChild>
                  <Link to="/contact">{plan.ctaLabel}</Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
