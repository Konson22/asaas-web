import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getProductVisual } from '@/lib/productVisuals'
import type { ProductDetail } from '@/types/catalog'

export function RelatedProducts({ product }: { product: ProductDetail }) {
  if (product.related_products.length === 0) {
    return null
  }

  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading title="You might also need" align="left" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.related_products.map((related, index) => {
            const visual = getProductVisual(related.code)
            const Icon = visual.icon

            return (
              <Reveal key={related.slug} delay={index * 0.05}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{related.name}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{related.tagline}</p>
                  </div>
                  <Button variant="outline" asChild className="mt-auto">
                    <Link href={`/products/${related.slug}`}>
                      Learn more
                      <ArrowRight className="size-4" />
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
