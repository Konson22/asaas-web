import { Link } from '@inertiajs/react'
import { ArrowRight, Cloud } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/sections/home/CtaSection'
import { useProducts } from '@/hooks/useProducts'
import { useRegisterableApplications } from '@/hooks/useRegisterableApplications'
import { getPlatformUrl } from '@/lib/platform'
import { getProductVisual } from '@/lib/productVisuals'

export default function ProductsPage() {
  const { products, loading, error } = useProducts()
  const registerableApplications = useRegisterableApplications()
  const registerable = new Set(registerableApplications)

  // Pharma leads the catalogue on this page; everything else keeps its normal order.
  const orderedProducts = [...products].sort((a, b) => {
    if (a.code === 'pharmacy') return -1
    if (b.code === 'pharmacy') return 1
    return 0
  })

  return (
    <>
      <PageTitle title="Products" />
      <PageHero
        eyebrow="Products"
        title="Choose the product built for your business"
        description="Each Asas Vantage product is purpose-built for a specific industry. Pick one to start a free trial — or learn more before you decide."
        size="compact"
      />

      <section id="products" className="scroll-mt-20 bg-background py-24">
        <Container>
          {loading ? (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-96 animate-pulse rounded-card bg-surface" />
              ))}
            </div>
          ) : error ? (
            <p className="text-center text-ink-muted">
              We couldn&apos;t load the product catalogue right now. Please try again shortly.
            </p>
          ) : products.length === 0 ? (
            <p className="text-center text-ink-muted">No products found.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {orderedProducts.map((product) => {
                const canRegister = registerable.has(product.code)
                const visual = getProductVisual(product.code)
                const Icon = visual.icon
                const isCloud = product.capabilities.includes('cloud')

                return (
                  <Reveal key={product.slug}>
                    <Card className="flex h-full flex-col overflow-hidden border-0 bg-white shadow-none">
                      <Link
                        href={`/products/${product.slug}`}
                        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-white outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        aria-label={`Learn more about ${product.name}`}
                      >
                        {visual.image ? (
                          <img
                            src={visual.image}
                            alt={`${product.name} product preview`}
                            className="size-full object-contain p-2 transition-transform duration-300 hover:scale-[1.02]"
                            loading="lazy"
                          />
                        ) : (
                          <span className="flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Icon className="size-9" />
                          </span>
                        )}
                      </Link>

                      <div className="flex flex-1 flex-col gap-4 p-6">
                        <div>
                          <h2 className="text-xl font-bold text-ink">{product.name}</h2>
                        </div>

                        <p className="text-sm text-ink-muted">{product.short_description}</p>

                        <p className="text-sm font-semibold text-ink">
                          {product.starting_price.is_custom
                            ? 'Custom pricing'
                            : product.starting_price.amount !== null
                              ? `Starting from ${product.starting_price.formatted}/mo`
                              : null}
                        </p>

                        <div className="mt-auto flex flex-col gap-3 pt-1 sm:flex-row">
                          <Button variant="outline" asChild className="flex-1">
                            <Link href={`/products/${product.slug}`}>
                              Learn more
                              <ArrowRight className="size-4" />
                            </Link>
                          </Button>
                          {isCloud && canRegister ? (
                            <Button variant="primary" asChild className="flex-1">
                              <a href={getPlatformUrl(`/get-started/${product.code}`)}>
                                <Cloud className="size-4" />
                                Get started
                              </a>
                            </Button>
                          ) : isCloud ? (
                            <Button variant="outline" disabled className="flex-1">
                              <Cloud className="size-4" />
                              Coming soon
                            </Button>
                          ) : null}
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                )
              })}
            </div>
          )}
        </Container>
      </section>

      <CtaSection
        title="Not sure which product fits?"
        description="Tell us how you run your business and we’ll recommend the right Asas Vantage product — or walk you through a live demo."
        actions={
          <>
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">Request a demo</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact sales</Link>
            </Button>
          </>
        }
      />
    </>
  )
}
