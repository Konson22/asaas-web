import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useProducts } from '@/hooks/useProducts'
import { getProductVisual } from '@/lib/productVisuals'

export function HomeProductCardsSection() {
  const { products, loading, error } = useProducts()

  if (loading || error || products.length === 0) {
    return null
  }

  const featured = [...products]
    .sort((a, b) => Number(b.is_featured) - Number(a.is_featured))
    .slice(0, 3)

  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Choose the product built for your business"
          description="Each MileSoftware product is purpose-built for a specific way of operating."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((product, index) => {
            const visual = getProductVisual(product.code)
            const Icon = visual.icon

            return (
              <Reveal key={product.slug} delay={index * 0.05}>
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="flex aspect-[16/10] items-center justify-center bg-background p-4">
                    {visual.image ? (
                      <img
                        src={visual.image}
                        alt={`${product.name} preview`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="size-7" />
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-bold text-ink">{product.name}</h3>
                    {product.tagline ? <p className="text-sm text-ink-muted">{product.tagline}</p> : null}
                    <Button variant="outline" asChild className="mt-auto">
                      <Link href={`/products/${product.slug}`}>
                        Learn more
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
