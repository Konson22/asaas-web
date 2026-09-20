import { useState } from 'react'
import { Link } from '@inertiajs/react'
import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { CatalogDeploymentOption, ProductDetail } from '@/types/catalog'

export function SubscriptionTierGrid({ product, cloud }: { product: ProductDetail; cloud: CatalogDeploymentOption }) {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-20 bg-background pb-24 pt-14">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          align="left"
          eyebrow="Step 2"
          title="Choose your tier"
          description={`Billed per business.${product.trial_days ? ` Start with a ${product.trial_days}-day free trial, cancel anytime.` : ''}`}
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
            Annual <span className="font-semibold text-primary">— 2 months free</span>
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {cloud.plans.map((plan, index) => {
            const price = annual ? plan.annual_price : plan.monthly_price

            return (
              <Reveal key={plan.name} delay={index * 0.05}>
                <Card
                  className={cn(
                    'flex h-full flex-col gap-5 p-7',
                    plan.is_recommended && 'border-primary/40 ring-1 ring-primary/20',
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-lg font-bold text-ink">{plan.name}</h4>
                    {plan.is_recommended ? (
                      <span className="rounded-full bg-primary px-2.5 py-1 text-[0.68rem] font-bold tracking-wide text-white uppercase">
                        Most chosen
                      </span>
                    ) : null}
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
                    {plan.limits.slice(0, 4).map((limit) => (
                      <li key={limit.key} className="flex items-start gap-2 text-sm text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {limit.label}: {limit.is_unlimited ? 'Unlimited' : `${limit.value ?? '—'}${limit.unit ? ` ${limit.unit}` : ''}`}
                      </li>
                    ))}
                  </ul>

                  <Button variant={plan.is_recommended ? 'cta' : 'outline'} asChild>
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
