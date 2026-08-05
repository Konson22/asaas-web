import { Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import type { CatalogImplementationItem, ProductDetail } from '@/types/catalog'

const typeLabels: Record<string, string> = {
  included: 'Included',
  client_responsibility: 'Client Provides',
  optional_service: 'Optional Services',
  not_included: 'Not Included',
  implementation_step: 'Implementation Steps',
  support: 'Support',
  training: 'Training',
}

function group(items: CatalogImplementationItem[]): Array<[string, CatalogImplementationItem[]]> {
  const map = new Map<string, CatalogImplementationItem[]>()
  for (const item of items) {
    const bucket = map.get(item.item_type) ?? []
    bucket.push(item)
    map.set(item.item_type, bucket)
  }
  return Array.from(map.entries())
}

export function ProductImplementation({ product }: { product: ProductDetail }) {
  if (product.implementation_items.length === 0) {
    return null
  }

  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading title="Implementation &amp; onboarding" description="What it takes to go live." align="left" />
        <div className="grid gap-6 sm:grid-cols-2">
          {group(product.implementation_items).map(([type, items], index) => (
            <Reveal key={type} delay={index * 0.05}>
              <div>
                <h3 className="text-sm font-semibold text-ink">{typeLabels[type] ?? type}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item.title} className="flex items-start gap-2 text-sm text-ink-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
