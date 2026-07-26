import type { ComponentType } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { DashboardMockup } from '@/assets/illustrations/DashboardMockup'
import { PosMockup } from '@/assets/illustrations/PosMockup'
import { products } from '@/data/products'

const mockupById: Record<string, ComponentType<{ className?: string }>> = {
  pos: PosMockup,
  pharmacy: DashboardMockup,
  restaurant: PosMockup,
  distribution: DashboardMockup,
  services: DashboardMockup,
  inventory: DashboardMockup,
}

export function ProductShowcaseSection() {
  return (
    <section className="scroll-mt-20 bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Purpose-Built Products"
          title="Choose the solution built for your exact operational reality"
          description="Stop paying for generic modules you don’t need. Every Asas product is engineered for a specific way of doing business."
        />

        <Reveal>
          <Tabs defaultValue={products[0].id}>
            <TabsList className="mx-auto flex w-fit flex-wrap">
              {products.map((product) => {
                const Icon = product.icon
                return (
                  <TabsTrigger key={product.id} value={product.id} className="gap-2">
                    <Icon className="size-4" />
                    {product.name}
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {products.map((product) => {
              const Mockup = mockupById[product.id]
              return (
                <TabsContent key={product.id} value={product.id}>
                  <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-col gap-4">
                      <h3 className="text-2xl font-bold text-ink sm:text-3xl">{product.name}</h3>
                      <p className="text-base text-ink-muted">{product.tagline}.</p>
                      <ul className="flex flex-col gap-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mx-auto w-full max-w-sm">
                      <Mockup />
                    </div>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </Reveal>
      </Container>
    </section>
  )
}
