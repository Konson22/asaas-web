import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { useProducts } from '@/hooks/useProducts'
import { getProductVisual } from '@/lib/productVisuals'
import type { ProductSummary } from '@/types/catalog'

export function HomeProductCardsSection() {
  const { products, loading, error } = useProducts()

  if (loading || error || products.length === 0) {
    return null
  }

  return (
    <section id="products" className="scroll-mt-20 bg-surface py-20 lg:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-xl flex-col gap-3">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-4 bg-primary/50" aria-hidden="true" />
              Our Products
            </span>
            <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink">
              Choose the product
              <br />
              <span className="text-primary">built for your business</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-muted lg:text-right">
            Purpose-built systems for pharmacies, schools, retail, restaurants, and the teams
            that run them — cloud, desktop, or both.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.04} className="h-full">
              <CatalogProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="sm" asChild>
            <Link href="/products">
              View All Products
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

function CatalogProductCard({ product }: { product: ProductSummary }) {
  const visual = getProductVisual(product.code)
  const image = product.image || visual.image
  const price = startingPriceLabel(product)
  const summary = product.short_description ?? product.tagline ?? 'Purpose-built for the way you operate.'

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-card outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-elevated/60 focus-visible:ring-2 focus-visible:ring-primary"
    >
      {image ? (
        <div className="aspect-[3/2] overflow-hidden bg-surface">
          <img
            src={image}
            alt=""
            className="size-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-col gap-2">
          {product.category ? (
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary">
              {product.category}
            </p>
          ) : null}
          <h3 className="text-lg font-bold leading-snug text-ink">{product.name}</h3>
          <p className="text-sm leading-relaxed text-ink-muted">{summary}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          {price ? <p className="text-sm font-semibold text-ink">{price}</p> : <span />}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Learn more
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function startingPriceLabel(product: ProductSummary): string | null {
  const { starting_price: price } = product

  if (price.is_custom) {
    return 'Custom pricing'
  }

  if (price.formatted) {
    return `From ${price.formatted}/mo`
  }

  return null
}
