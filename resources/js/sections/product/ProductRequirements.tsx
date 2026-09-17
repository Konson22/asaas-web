import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import type { ProductDetail } from '@/types/catalog'

export function ProductRequirements({ product }: { product: ProductDetail }) {
  const requirements = [
    ...product.requirements,
    ...product.deployment_options.flatMap((d) => d.requirements),
  ]

  if (requirements.length === 0) {
    return null
  }

  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading title="Technical requirements" align="left" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((requirement, index) => (
            <Reveal key={`${requirement.type}-${requirement.title}`} delay={index * 0.03}>
              <Card className="h-full p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {requirement.type.replaceAll('_', ' ')}
                </p>
                <h3 className="mt-1 font-semibold text-ink">{requirement.title}</h3>
                {requirement.description ? <p className="mt-1 text-sm text-ink-muted">{requirement.description}</p> : null}
                {requirement.minimum_value || requirement.recommended_value ? (
                  <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    {requirement.minimum_value ? (
                      <div>
                        <dt className="text-xs text-ink-muted">Minimum</dt>
                        <dd className="font-medium text-ink">{requirement.minimum_value}</dd>
                      </div>
                    ) : null}
                    {requirement.recommended_value ? (
                      <div>
                        <dt className="text-xs text-ink-muted">Recommended</dt>
                        <dd className="font-medium text-ink">{requirement.recommended_value}</dd>
                      </div>
                    ) : null}
                  </dl>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
