import { lazy, Suspense, useEffect, useState } from 'react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { CtaSection } from '@/sections/home/CtaSection'
import { ProductSwitcher } from '@/sections/pricing/ProductSwitcher'
import { CatalogPricingSection } from '@/sections/pricing/CatalogPricingSection'
import { PricingFaqSection } from '@/sections/pricing/PricingFaqSection'
import { useProducts } from '@/hooks/useProducts'
import { useProduct } from '@/hooks/useProduct'

const FaqSection = lazy(() =>
  import('@/sections/home/FaqSection').then((m) => ({ default: m.FaqSection })),
)

function SectionFallback() {
  return <div className="min-h-[400px] bg-background" aria-hidden="true" />
}

function initialSlugFromUrl(): string | null {
  if (typeof window === 'undefined') return null
  return new URLSearchParams(window.location.search).get('product')
}

const TRIAL_PILLS = ['90-day free trial', 'No card required', 'Cancel anytime']

export default function PricingPage() {
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
      <PageTitle title="Asas Pricing and Deployment Options" />
      <PageHero
        eyebrow="Pricing"
        image="/images/pages-hero/pricing-hero.png"

        title={
          <>
            Flexible pricing for <span className="text-cyan">every business</span>
          </>
        }
        description="Subscribe to the cloud edition, or buy a license and run it on your own hardware — including sites with no reliable internet."
      >
        <div className="mt-2 flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {TRIAL_PILLS.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
              >
                <span className="size-1.5 rounded-full bg-cyan" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
          <ProductSwitcher products={products} loading={productsLoading} selectedSlug={selectedSlug} onSelect={selectProduct} />
        </div>
      </PageHero>

      <CatalogPricingSection product={product} loading={productLoading} hasProducts={products.length > 0} />

      <PricingFaqSection />

      <Suspense fallback={<SectionFallback />}>
        <FaqSection />
      </Suspense>
      <CtaSection />
    </>
  )
}
