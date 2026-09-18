import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import type { ProductDetail } from '@/types/catalog'

export function ProductFeatures({ product }: { product: ProductDetail }) {
  if (product.highlighted_features.length === 0 && product.feature_groups.length === 0) {
    return null
  }

  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-16">
        {product.highlighted_features.length > 0 ? (
          <div className="flex flex-col gap-10">
            <SectionHeading title="Highlighted features" description={`What makes ${product.name} stand out.`} />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {product.highlighted_features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-surface px-4 py-3 text-sm text-ink"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">{feature.name}</p>
                    {feature.description ? <p className="mt-0.5 text-xs text-ink-muted">{feature.description}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {product.feature_groups.length > 0 ? (
          <Reveal className="flex flex-col gap-8">
            <SectionHeading title="All features" description="Every feature, grouped by area." />
            <Accordion type="single" collapsible defaultValue={product.feature_groups[0]?.name} className="mx-auto w-full max-w-3xl">
              {product.feature_groups.map((group) => (
                <AccordionItem key={group.name} value={group.name}>
                  <AccordionTrigger>
                    {group.name}
                    <span className="ml-2 text-sm font-normal text-ink-muted">({group.features.length})</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {group.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-2 text-sm text-ink-muted">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          {feature.name}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        ) : null}
      </Container>
    </section>
  )
}
