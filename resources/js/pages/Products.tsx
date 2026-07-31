import { Link } from '@inertiajs/react'
import { ArrowRight, Cloud } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/sections/home/CtaSection'
import { products } from '@/data/products'
import { useRegisterableApplications } from '@/hooks/useRegisterableApplications'
import { getPlatformUrl } from '@/lib/platform'

export default function ProductsPage() {
  const registerableApplications = useRegisterableApplications()
  const registerable = new Set(registerableApplications)

  return (
    <>
      <PageTitle title="Products" />
      <PageHero
        eyebrow="Products"
        title="Choose the product built for your business"
        description="Each Asas Vantage product is purpose-built for a specific industry. Pick one to start a free trial — or learn more before you decide."
      />

      <section id="products" className="scroll-mt-20 bg-background py-24">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const canRegister = Boolean(
                product.applicationCode && registerable.has(product.applicationCode),
              )

              return (
                <Reveal key={product.id}>
                  <Card className="flex h-full flex-col overflow-hidden border-0 bg-white shadow-none">
                    <Link
                      href={`/products/${product.id}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-white outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                      aria-label={`Learn more about ${product.name}`}
                    >
                      <img
                        src={product.image}
                        alt={`${product.name} product preview`}
                        className="size-full object-contain p-2 transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col gap-5 p-6">
                      <div>
                        <h2 className="text-xl font-bold text-ink">{product.name}</h2>
                        <p className="mt-1 text-sm font-semibold text-primary">{product.tagline}</p>
                      </div>

                      <ul className="flex flex-col gap-2">
                        {product.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="text-sm text-ink-muted">
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex flex-col gap-3 pt-1 sm:flex-row">
                        <Button variant="outline" asChild className="flex-1">
                          <Link href={`/products/${product.id}`}>
                            Learn more
                            <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                        {product.access.includes('cloud') && product.applicationCode && canRegister ? (
                          <Button variant="primary" asChild className="flex-1">
                            <a href={getPlatformUrl(`/get-started/${product.applicationCode}`)}>
                              <Cloud className="size-4" />
                              Get started
                            </a>
                          </Button>
                        ) : product.access.includes('cloud') ? (
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
