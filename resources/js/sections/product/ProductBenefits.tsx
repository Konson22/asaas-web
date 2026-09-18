import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import type { ProductDetail } from '@/types/catalog'

export function ProductBenefits({ product }: { product: ProductDetail }) {
  if (product.benefits.length === 0) {
    return null
  }

  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading title="What you gain" description={`Business outcomes teams see with ${product.name}.`} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {product.benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.05}>
              <Card className="flex h-full flex-col gap-3 p-6">
                <CheckCircle2 className="size-6 text-primary" />
                <h3 className="font-semibold text-ink">{benefit.title}</h3>
                {benefit.description ? <p className="text-sm text-ink-muted">{benefit.description}</p> : null}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
