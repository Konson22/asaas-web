import { Users } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import type { ProductDetail } from '@/types/catalog'

export function ProductAudiences({ product }: { product: ProductDetail }) {
  if (product.audiences.length === 0) {
    return null
  }

  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={`Best suited for`} description={`Who ${product.name} was purpose-built for.`} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {product.audiences.map((audience, index) => (
            <Reveal key={audience.name} delay={index * 0.05}>
              <Card className="flex h-full items-start gap-3 p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="size-4" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{audience.name}</p>
                  {audience.description ? <p className="mt-1 text-sm text-ink-muted">{audience.description}</p> : null}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
