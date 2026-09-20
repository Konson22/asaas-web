import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DeploymentTopology } from '@/components/pricing/DeploymentTopology'
import { formatDeploymentPrice, maintenanceNote, topologyForSlug } from '@/lib/pricingPath'
import type { CatalogDeploymentOption } from '@/types/catalog'

export function DeploymentPathGrid({ ownOptions }: { ownOptions: CatalogDeploymentOption[] }) {
  return (
    <section className="bg-background pb-24 pt-14">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          align="left"
          eyebrow="Step 2"
          title="Choose your deployment"
          description="One payment, yours to keep. An optional annual maintenance fee after the first year covers updates, security fixes, and support."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {ownOptions.map((option, index) => {
            const price = formatDeploymentPrice(option)

            return (
              <Reveal key={option.slug} delay={index * 0.05}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <DeploymentTopology topology={topologyForSlug(option.slug)} className="h-14 w-full" />

                  <h4 className="text-lg font-bold text-ink">{option.name}</h4>
                  {price ? <p className="text-xl font-bold text-primary">{price}</p> : null}
                  {option.short_description ? <p className="text-sm text-ink-muted">{option.short_description}</p> : null}

                  {option.included_items.length > 0 ? (
                    <ul className="flex flex-col gap-1.5">
                      {option.included_items.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {option.client_provides_items.length > 0 ? (
                    <div className="rounded-lg bg-elevated p-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Client provides</p>
                      <p className="mt-1.5 text-sm text-ink-muted">{option.client_provides_items.join(', ')}.</p>
                    </div>
                  ) : null}

                  <p className="mt-auto border-t border-dashed border-border pt-3 text-xs text-ink-subtle">
                    <span className="font-semibold text-ink-muted">Maintenance:</span> {maintenanceNote(option)}
                  </p>

                  <Button variant="outline" asChild>
                    <a href="/contact">{option.billing_model === 'custom' ? 'Request an Enterprise Quote' : 'Request a Quote'}</a>
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
