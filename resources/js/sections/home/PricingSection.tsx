import { Link } from '@inertiajs/react'
import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { pricingPlans } from '@/data/pricing'
import { cn } from '@/lib/utils'

const homepagePlanOrder = ['desktop', 'cloud', 'hybrid'] as const

export function PricingSection() {
  const plans = homepagePlanOrder
    .map((id) => pricingPlans.find((plan) => plan.id === id))
    .filter((plan): plan is NonNullable<typeof plan> => Boolean(plan))

  return (
    <section id="pricing" className="scroll-mt-20 bg-background py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          title="Choose the plan that fits how you deploy"
          description="Start free, upgrade as you grow, or move to an offline license when you need it."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:items-end">
          {plans.map((plan, index) => {
            const highlighted = plan.id === 'cloud'

            return (
              <Reveal key={plan.id} delay={index * 0.05}>
                <Card
                  className={cn(
                    'flex h-full flex-col gap-6 p-8',
                    highlighted &&
                      'border-accent/40 bg-primary-dark lg:min-h-[32rem] lg:-translate-y-4 lg:py-10',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    {highlighted ? <Badge variant="accent">Most Popular</Badge> : null}
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    {plan.period ? (
                      <span className="ml-1 text-sm text-ink-muted">{plan.period}</span>
                    ) : null}
                  </div>
                  <p className="text-sm text-ink-muted">{plan.bestFor}</p>
                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={highlighted ? 'cta' : 'outline'} asChild>
                    <Link href="/contact">{plan.ctaLabel}</Link>
                  </Button>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <p className="text-center text-sm text-ink-muted">
          Need enterprise scale?{' '}
          <Link href="/contact" className="font-semibold text-accent hover:underline">
            Contact sales
          </Link>
        </p>
      </Container>
    </section>
  )
}
