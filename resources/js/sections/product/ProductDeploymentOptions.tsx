import { Check, Minus, X } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { CatalogDeploymentOption, ProductDetail } from '@/types/catalog'

const comparisonRows: Array<{ label: string; key: keyof CatalogDeploymentOption }> = [
  { label: 'Internet required', key: 'requires_internet' },
  { label: 'Works offline', key: 'supports_offline' },
  { label: 'Cloud synchronization', key: 'supports_cloud_sync' },
  { label: 'Multi-user', key: 'supports_multi_user' },
  { label: 'Local network support', key: 'supports_local_network' },
  { label: 'Client provides hardware', key: 'client_provides_hardware' },
  { label: 'Hardware included', key: 'hardware_included' },
]

function BoolCell({ value }: { value: unknown }) {
  if (value === true) return <Check className="mx-auto size-4 text-primary" aria-label="Yes" />
  if (value === false) return <X className="mx-auto size-4 text-ink-muted/50" aria-label="No" />
  return <Minus className="mx-auto size-4 text-ink-muted/50" aria-label="Not applicable" />
}

function deploymentPrice(option: CatalogDeploymentOption): string | null {
  const plan = option.plans[0]
  if (!plan) return null
  if (plan.is_custom_price) return 'Custom pricing'
  const amount = plan.one_time_price ?? plan.monthly_price
  if (amount === null) return null
  return `${plan.is_starting_price ? 'Starting from ' : ''}${plan.currency} ${amount}${plan.one_time_price !== null ? '' : '/mo'}`
}

export function ProductDeploymentOptions({ product }: { product: ProductDetail }) {
  const otherOptions = product.deployment_options.filter((d) => d.slug !== 'cloud-web')

  if (otherOptions.length === 0) {
    return null
  }

  const hasPerpetualPricing = product.deployment_options.some((d) =>
    d.plans.some((p) => p.plan_type === 'perpetual' || p.maintenance_percentage !== null),
  )

  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading title="Offline &amp; deployment options" description="Choose the infrastructure that fits your connectivity." />

          <div className="grid gap-6 lg:grid-cols-3">
            {otherOptions.map((option, index) => {
              const price = deploymentPrice(option)

              return (
                <Reveal key={option.slug} delay={index * 0.05}>
                  <Card className="flex h-full flex-col gap-4 p-6">
                    <h3 className="text-lg font-bold text-ink">{option.name}</h3>
                    {price ? <p className="text-xl font-bold text-primary">{price}</p> : null}
                    {option.short_description ? <p className="text-sm text-ink-muted">{option.short_description}</p> : null}

                    {option.included_items.length > 0 ? (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Included</p>
                        <ul className="mt-2 flex flex-col gap-1.5">
                          {option.included_items.slice(0, 5).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ink">
                              <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {option.client_provides_items.length > 0 ? (
                      <div className="rounded-lg bg-surface p-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Client provides</p>
                        <p className="mt-1.5 text-sm text-ink-muted">{option.client_provides_items.join(', ')}.</p>
                        <p className="mt-1 text-xs font-medium text-destructive">Hardware and network equipment are not included.</p>
                      </div>
                    ) : null}

                    <Button variant="outline" asChild className="mt-auto">
                      <a href="/contact">{option.billing_model === 'custom' ? 'Request an Enterprise Quote' : 'Request a Quote'}</a>
                    </Button>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal className="flex flex-col gap-6">
          <SectionHeading title="Compare deployment options" align="left" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="border-b border-border py-3 pr-4 font-semibold text-ink">Capability</th>
                  {product.deployment_options.map((option) => (
                    <th key={option.slug} className="border-b border-border px-3 py-3 text-center font-semibold text-ink">
                      {option.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.key}>
                    <td className="border-b border-border py-3 pr-4 text-ink-muted">{row.label}</td>
                    {product.deployment_options.map((option) => (
                      <td key={option.slug} className="border-b border-border px-3 py-3 text-center">
                        <BoolCell value={option[row.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {hasPerpetualPricing ? (
          <Reveal>
            <Card className="border-primary/20 bg-primary/5 p-6">
              <p className="text-sm text-ink">
                The first year includes standard software updates and support. Annual maintenance after the first year is
                calculated at 20% of the original licence value unless otherwise stated. Maintenance covers software
                updates, security updates, bug fixes, remote support, and licence assistance — it does not cover custom
                development, on-site travel, hardware maintenance, or third-party charges.
              </p>
            </Card>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}
