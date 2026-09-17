import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useProducts } from '@/hooks/useProducts'
import { getProductVisual } from '@/lib/productVisuals'

export function ProductShowcaseSection() {
  const { products, loading, error } = useProducts()

  // Nothing curated to show yet — skip the section rather than render an empty shell.
  if (loading || error || products.length === 0) {
    return null
  }

  return (
    <section className="scroll-mt-20 relative overflow-hidden bg-navy-deep py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full border border-white/10" />
      <Container className="relative flex flex-col gap-12">
        <SectionHeading
          tone="dark"
          title={
            <>
              Choose the solution built for your{' '}
              <span className="text-primary">exact</span> operational reality
            </>
          }
          description="Stop paying for generic modules you don’t need. Every Asas product is engineered for a specific way of doing business."
        />

        <Reveal>
          <Tabs defaultValue={products[0].code}>
            <TabsList className="mx-auto flex w-fit flex-wrap border-white/10 bg-background/40">
              {products.map((product) => {
                const Icon = getProductVisual(product.code).icon
                return (
                  <TabsTrigger key={product.code} value={product.code} className="gap-2">
                    <Icon className="size-4" />
                    {product.short_name ?? product.name}
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {products.map((product) => (
              <TabsContent key={product.code} value={product.code}>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-white sm:text-3xl">{product.name}</h3>
                    {product.tagline ? <p className="text-base font-semibold text-primary">{product.tagline}</p> : null}
                    {product.short_description ? (
                      <p className="text-base text-ink-muted">{product.short_description}</p>
                    ) : null}
                  </div>
                  <div className="relative mx-auto w-full">
                    <div className="pointer-events-none absolute inset-4 rounded-2xl bg-primary/40 blur-3xl" />
                    <div className="relative overflow-hidden rounded-card border border-white/10 bg-background">
                      {getProductVisual(product.code).image ? (
                        <img
                          src={getProductVisual(product.code).image}
                          alt={`${product.name} product preview`}
                          className="aspect-[4/3] w-full object-contain object-center"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex aspect-[4/3] w-full items-center justify-center bg-primary/10 text-primary">
                          {(() => {
                            const Icon = getProductVisual(product.code).icon
                            return <Icon className="size-16" />
                          })()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </Container>
    </section>
  )
}
