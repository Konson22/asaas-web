import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { useProducts } from '@/hooks/useProducts'
import { getProductVisual, moduleToneClasses } from '@/lib/productVisuals'
import { CAPABILITY_LABELS, CAPABILITY_ORDER, type CapabilityKey } from '@/lib/capabilities'
import { cn } from '@/lib/utils'
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
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-4 bg-primary/50" aria-hidden="true" />
              Our Products
            </span>
            <h2 className="max-w-lg text-[clamp(1.75rem,3.6vw,2.5rem)] font-bold leading-tight tracking-tight text-ink">
              Choose the product <span className="text-primary">built for your business</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:max-w-sm lg:items-end">
            <p className="text-base text-ink-muted lg:text-right">
              Purpose-built systems for pharmacies, schools, retail, restaurants, and the teams
              that run them — cloud, desktop, or both.
            </p>
            <Button variant="outline" size="sm" asChild className="shrink-0">
              <Link href="/products">
                View All Products
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.04} className="h-full">
              <CatalogProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CatalogProductCard({ product }: { product: ProductSummary }) {
  const visual = getProductVisual(product.code)
  const capabilities = listedCapabilities(product)
  const price = startingPriceLabel(product)
  const summary = product.tagline ?? product.short_description ?? 'Purpose-built for the way you operate.'

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col gap-5 rounded-card border border-border bg-card p-6 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-elevated/60 focus-visible:ring-2 focus-visible:ring-primary"
    >
      <span
        className={cn(
          'flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105',
          moduleToneClasses[visual.tone],
        )}
      >
        <i className={cn(visual.uicon, 'fi text-2xl')} aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-2">
        {product.category ? (
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary">
            {product.category}
          </p>
        ) : null}
        <h3 className="text-lg font-bold leading-snug text-ink">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-ink-muted">{summary}</p>
      </div>

      {capabilities.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5">
          {capabilities.map((key) => (
            <li
              key={key}
              className="rounded-full bg-surface-strong px-2.5 py-1 text-xs font-semibold text-ink-muted"
            >
              {CAPABILITY_LABELS[key]}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex items-center justify-between gap-3 pt-1">
        {price ? <p className="text-sm font-semibold text-ink">{price}</p> : <span />}
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
          Learn more
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

function listedCapabilities(product: ProductSummary): CapabilityKey[] {
  return product.capabilities.filter((capability): capability is CapabilityKey =>
    (CAPABILITY_ORDER as readonly string[]).includes(capability),
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
