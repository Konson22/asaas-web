import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import type { ProductDetail } from '@/types/catalog'

export function ProductAddons({ product }: { product: ProductDetail }) {
  if (product.addons.length === 0) {
    return null
  }

  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading title="Add-ons" description="Extend your plan as your business grows." align="left" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.addons.map((addon, index) => (
            <Reveal key={addon.name} delay={index * 0.03}>
              <Card className="flex h-full flex-col gap-2 p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-ink">{addon.name}</h3>
                  <span className="shrink-0 text-sm font-semibold text-primary">
                    {addon.is_starting_price ? 'From ' : ''}
                    {addon.formatted_price}
                  </span>
                </div>
                {addon.description ? <p className="text-sm text-ink-muted">{addon.description}</p> : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
