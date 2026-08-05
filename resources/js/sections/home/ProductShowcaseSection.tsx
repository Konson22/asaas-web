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
    <section className="scroll-mt-20 bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Choose the solution built for your exact operational reality"
          description="Stop paying for generic modules you don’t need. Every Asas product is engineered for a specific way of doing business."
        />

        <Reveal>
          <Tabs defaultValue={products[0].code}>
            <TabsList className="mx-auto flex w-fit flex-wrap">
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
                    <h3 className="text-2xl font-bold text-ink sm:text-3xl">{product.name}</h3>
                    {product.tagline ? <p className="text-base font-semibold text-primary">{product.tagline}</p> : null}
                    {product.short_description ? (
                      <p className="text-base text-ink-muted">{product.short_description}</p>
                    ) : null}
                  </div>
                  <div className="mx-auto w-full overflow-hidden rounded-card border border-border bg-background shadow-2xl">
                    {getProductVisual(product.code).image ? (
                      <img
                        src={getProductVisual(product.code).image}
                        alt={`${product.name} product preview`}
                        className="aspect-[4/3] w-full object-contain object-center"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] w-full items-center justify-center bg-primary/5 text-primary">
                        {(() => {
                          const Icon = getProductVisual(product.code).icon
                          return <Icon className="size-16" />
                        })()}
                      </div>
                    )}
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
