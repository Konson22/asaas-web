import { useEffect, useState } from 'react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { useProducts } from '@/hooks/useProducts'
import { useProduct } from '@/hooks/useProduct'
import { ProductSubscriptionPlans } from '@/sections/product/ProductSubscriptionPlans'
import { ProductDeploymentOptions } from '@/sections/product/ProductDeploymentOptions'

function initialSlugFromUrl(): string | null {
  if (typeof window === 'undefined') return null
  return new URLSearchParams(window.location.search).get('product')
}

export function CatalogPricingSection() {
  const { products, loading: productsLoading } = useProducts()
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlugFromUrl())

  // Default to the first featured active product once the list loads, unless a
  // ?product= slug was already supplied in the URL.
  useEffect(() => {
    if (selectedSlug || products.length === 0) return
    const featured = products.find((p) => p.is_featured) ?? products[0]
    setSelectedSlug(featured.slug)
  }, [products, selectedSlug])

  const { product, loading: productLoading } = useProduct(selectedSlug)

  function selectProduct(slug: string) {
    setSelectedSlug(slug)
    const url = new URL(window.location.href)
    url.searchParams.set('product', slug)
    window.history.replaceState({}, '', url)
  }

  return (
    <>
      <section className="bg-background pt-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading title="Select your product" description="Pricing and deployment options are specific to each product." />

          {productsLoading ? (
            <div className="mx-auto h-11 w-full max-w-xl animate-pulse rounded-full bg-surface" aria-hidden="true" />
          ) : products.length === 0 ? (
            <p className="text-center text-ink-muted">Pricing is temporarily unavailable. Please try again shortly.</p>
          ) : (
            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Select a product">
              {products.map((p) => (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => selectProduct(p.slug)}
                  aria-pressed={p.slug === selectedSlug}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    p.slug === selectedSlug ? 'bg-primary text-white' : 'border border-border text-ink-muted hover:text-ink'
                  }`}
                >
                  {p.short_name || p.name}
                </button>
              ))}
            </div>
          )}

          {productLoading ? (
            <div className="grid gap-6 pb-24 lg:grid-cols-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-80 animate-pulse rounded-card bg-surface" />
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      {!productLoading && product ? (
        <>
          <ProductSubscriptionPlans product={product} />
          <ProductDeploymentOptions product={product} />
        </>
      ) : null}
    </>
  )
}
