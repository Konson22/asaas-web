import { Sparkles } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import type { ProductDetail } from '@/types/catalog'

export function ProductCapabilities({ product }: { product: ProductDetail }) {
  if (product.capabilities.length === 0) {
    return null
  }

  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading title="Built-in capabilities" description="Core platform capabilities included with this product." />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product.capabilities.map((capability, index) => (
            <Reveal key={capability.name} delay={index * 0.04}>
              <Card className="flex h-full flex-col items-center gap-3 p-6 text-center">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="text-sm font-semibold text-ink">{capability.name}</h3>
                {capability.description ? <p className="text-xs text-ink-muted">{capability.description}</p> : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
