import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useProducts } from '@/hooks/useProducts'
import { getProductVisual, cycleBrandTone, moduleToneClasses } from '@/lib/productVisuals'

export function HomeProductCardsSection() {
  const { products, loading, error } = useProducts()

  if (loading || error || products.length === 0) {
    return null
  }

  return (
    <section className="bg-surface py-20 lg:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-4 bg-primary/50" aria-hidden="true" />
            Our Products
          </span>
          <h2 className="max-w-xl text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-ink">
            Choose the product <span className="text-primary">built for your business</span>
          </h2>
          <p className="max-w-md text-base text-ink-muted">
            Powerful solutions for different industries and business sizes.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product, index) => {
            const visual = getProductVisual(product.code)
            const Icon = visual.icon
            const tone = cycleBrandTone(index)

            return (
              <Reveal key={product.slug} delay={index * 0.04}>
                <Link href={`/products/${product.slug}`} className="block h-full">
                  <Card className="flex h-full flex-col gap-3 p-6 text-left">
                    <span className={`flex size-11 items-center justify-center rounded-xl ${moduleToneClasses[tone]}`}>
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-base font-bold text-ink">{product.name}</h3>
                    <p className="text-sm text-ink-muted">
                      {product.tagline ?? 'Purpose-built for the way you operate.'}
                    </p>
                  </Card>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="flex justify-center">
          <Button variant="primary" size="lg" asChild>
            <Link href="/products">
              Explore All Products
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
