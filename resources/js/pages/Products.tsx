import { Link } from '@inertiajs/react'
import { ArrowRight, Cloud } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/sections/home/CtaSection'
import { products, type Product } from '@/data/products'
import { useRegisterableApplications } from '@/hooks/useRegisterableApplications'
import { getPlatformUrl } from '@/lib/platform'

const accessLabels: Record<Product['access'][number], string> = {
  cloud: 'Cloud',
  desktop: 'Desktop',
  mobile: 'iOS & Android',
}

export default function ProductsPage() {
  const registerableApplications = useRegisterableApplications()
  const registerable = new Set(registerableApplications)

  return (
    <>
      <PageTitle title="Products" />
      <PageHero
        eyebrow="Products"
        title="Every app in the Asas Vantage family"
        description="Pick a product to create your account — then set up your business and start a free trial. Every app stays connected to the same data."
      />

      <section className="bg-background py-24">
        <Container className="flex flex-col gap-8">
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon
              const canRegister = Boolean(
                product.applicationCode && registerable.has(product.applicationCode),
              )

              return (
                <Reveal key={product.id}>
                  <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
                    <Link
                      href={`/products/${product.id}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-background outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                      aria-label={`Learn more about ${product.name}`}
                    >
                      <img
                        src={product.image}
                        alt={`${product.name} product preview`}
                        className="size-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </Link>

                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div className="flex items-start gap-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </span>
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          {product.access.map((access) => (
                            <Badge key={access} variant="primary">
                              {accessLabels[access]}
                            </Badge>
                          ))}
                          {canRegister ? <Badge variant="primary">Free trial</Badge> : null}
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-bold text-ink">{product.name}</h2>
                        <p className="mt-1 text-sm font-semibold text-primary">{product.tagline}</p>
                      </div>

                      <p className="line-clamp-3 text-sm text-ink-muted">{product.description}</p>

                      <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
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

      <CtaSection />
    </>
  )
}
