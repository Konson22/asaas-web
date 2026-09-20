import { Link } from '@inertiajs/react'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useProducts } from '@/hooks/useProducts'
import { getProductVisual, cycleBrandTone, moduleToneClasses } from '@/lib/productVisuals'
import { CAPABILITY_LABELS, CAPABILITY_ORDER, type CapabilityKey } from '@/lib/capabilities'
import { cn } from '@/lib/utils'

const FEATURED_COUNT = 3

// Real device-mockup photography (not per-product screenshots — the catalogue doesn't have
// those yet), cycled across the featured rows for visual variety rather than repeating one image.
const SHOWCASE_IMAGES = ['/images/dashboard-devices-bright.png', '/images/hero-image2.png']

export function HomeProductCardsSection() {
  const { products, loading, error } = useProducts()

  if (loading || error || products.length === 0) {
    return null
  }

  const featured = products.slice(0, FEATURED_COUNT)
  const rest = products.slice(FEATURED_COUNT)

  return (
    <section className="bg-surface py-20 lg:py-24">
      <Container className="flex flex-col gap-16">
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

        <div className="flex flex-col gap-16">
          {featured.map((product, index) => {
            const visual = getProductVisual(product.code)
            const reversed = index % 2 === 1
            const capabilities = product.capabilities.filter((c): c is CapabilityKey =>
              (CAPABILITY_ORDER as readonly string[]).includes(c),
            )

            return (
              <Reveal key={product.slug} delay={index * 0.05}>
                <div
                  className={cn(
                    'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
                    reversed && 'lg:[&>*:first-child]:order-2',
                  )}
                >
                  <div className="relative">
                    <div
                      className={cn(
                        'pointer-events-none absolute -inset-6 -z-10 rounded-full blur-3xl',
                        moduleToneClasses[visual.tone].split(' ')[0],
                      )}
                      aria-hidden="true"
                    />
                    <img
                      src={SHOWCASE_IMAGES[index % SHOWCASE_IMAGES.length]}
                      alt={`${product.name} on desktop and mobile`}
                      className="relative w-full object-contain drop-shadow-[0_24px_48px_rgb(10_37_64_/0.16)]"
                    />
                  </div>

                  <div className="flex flex-col gap-5">
                    <span className={cn('flex size-11 items-center justify-center rounded-xl', moduleToneClasses[visual.tone])}>
                      <visual.icon className="size-5" />
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{product.name}</h3>
                    <p className="max-w-md text-base text-ink-muted">
                      {product.short_description ?? product.tagline ?? 'Purpose-built for the way you operate.'}
                    </p>

                    {capabilities.length > 0 ? (
                      <ul className="flex flex-col gap-2">
                        {capabilities.slice(0, 4).map((key) => (
                          <li key={key} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                            <Check className="size-4 shrink-0 text-cyan" aria-hidden="true" />
                            {CAPABILITY_LABELS[key]}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <Button variant="outline" size="lg" asChild className="w-fit">
                      <Link href={`/products/${product.slug}`}>
                        Learn More
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {rest.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((product, index) => {
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
        ) : null}

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
