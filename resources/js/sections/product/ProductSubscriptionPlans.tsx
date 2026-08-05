import { useState } from 'react'
import { Link } from '@inertiajs/react'
import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { ProductDetail } from '@/types/catalog'

export function ProductSubscriptionPlans({ product }: { product: ProductDetail }) {
  const [annual, setAnnual] = useState(false)
  const cloud = product.deployment_options.find((d) => d.slug === 'cloud-web')

  if (!cloud || cloud.plans.length === 0) {
    return null
  }

  return (
    <section id="pricing" className="scroll-mt-20 bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Cloud subscription plans"
          description={product.trial_days ? `Start with a ${product.trial_days}-day free trial. Cancel anytime.` : undefined}
        />

        <div className="flex items-center justify-center gap-3">
          <span className={cn('text-sm font-medium', !annual && 'text-ink', annual && 'text-ink-muted')}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 rounded-full bg-border transition-colors data-[on=true]:bg-primary"
            data-on={annual}
          >
            <span
              className={cn(
                'absolute top-1 left-1 size-5 rounded-full bg-white shadow transition-transform',
                annual && 'translate-x-5',
              )}
            />
          </button>
          <span className={cn('text-sm font-medium', annual && 'text-ink', !annual && 'text-ink-muted')}>
            Annual <span className="text-primary">— 2 months free</span>
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {cloud.plans.map((plan, index) => {
            const price = annual ? plan.annual_price : plan.monthly_price
            const mainLimits = plan.limits.filter((l) => ['users', 'branches', 'storage_gb'].includes(l.key)).slice(0, 4)

            return (
              <Reveal key={plan.name} delay={index * 0.05}>
                <Card
                  className={cn(
                    'flex h-full flex-col gap-5 p-7',
                    plan.is_recommended && 'border-primary shadow-lg ring-1 ring-primary',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                    {plan.is_recommended ? <Badge variant="primary">Recommended</Badge> : null}
                  </div>

                  <div>
                    {plan.is_custom_price || price === null ? (
                      <span className="text-2xl font-bold text-ink">Custom pricing</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold text-ink">
                          {plan.currency} {price}
                        </span>
                        <span className="ml-1 text-sm text-ink-muted">/{annual ? 'yr' : 'mo'}</span>
                      </>
                    )}
                  </div>

                  {plan.description ? <p className="text-sm text-ink-muted">{plan.description}</p> : null}

                  <ul className="flex flex-1 flex-col gap-2.5">
                    {mainLimits.map((limit) => (
                      <li key={limit.key} className="flex items-start gap-2 text-sm text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {limit.label}: {limit.is_unlimited ? 'Unlimited' : `${limit.value ?? '—'}${limit.unit ? ` ${limit.unit}` : ''}`}
                      </li>
                    ))}
                  </ul>

                  <Button variant={plan.is_recommended ? 'primary' : 'outline'} asChild>
                    <Link href="/contact">
                      {plan.is_custom_price ? 'Contact Sales' : product.trial_days ? 'Start Free Trial' : 'Get Started'}
                    </Link>
                  </Button>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
