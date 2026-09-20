import { useState } from 'react'
import { Container } from '@/components/common/Container'
import { ProductPathFork, type PricingPath } from '@/sections/pricing/ProductPathFork'
import { SubscriptionTierGrid } from '@/sections/pricing/SubscriptionTierGrid'
import { DeploymentPathGrid } from '@/sections/pricing/DeploymentPathGrid'
import { DeploymentComparisonTable } from '@/sections/pricing/DeploymentComparisonTable'
import type { ProductDetail } from '@/types/catalog'

interface CatalogPricingSectionProps {
  product: ProductDetail | null
  loading: boolean
  hasProducts: boolean
}

/**
 * Orchestrates the pricing page's step-by-step body for whichever product is selected
 * in the hero: pick a path (subscribe vs. own a license), see that path's pricing, then
 * compare every deployment option side by side. Product selection itself lives in
 * `PricingPage`, since the hero's product switcher needs the same state.
 */
export function CatalogPricingSection({ product, loading, hasProducts }: CatalogPricingSectionProps) {
  const [path, setPath] = useState<PricingPath>('subscribe')

  if (!hasProducts && !loading) {
    return (
      <section className="bg-background py-24">
        <Container>
          <p className="text-center text-ink-muted">Pricing is temporarily unavailable. Please try again shortly.</p>
        </Container>
      </section>
    )
  }

  if (loading || !product) {
    return (
      <section className="bg-background py-24">
        <Container className="flex flex-col gap-6">
          <div className="mx-auto h-8 w-2/3 max-w-lg animate-pulse rounded-full bg-surface" />
          <div className="grid gap-6 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-80 animate-pulse rounded-card bg-surface" />
            ))}
          </div>
        </Container>
      </section>
    )
  }

  const cloud = product.deployment_options.find((d) => d.slug === 'cloud-web')
  const ownOptions = product.deployment_options.filter((d) => d.slug !== 'cloud-web')
  const canSubscribe = Boolean(cloud && cloud.plans.length > 0)
  const canOwn = ownOptions.length > 0
  const showFork = canSubscribe && canOwn
  const activePath: PricingPath = showFork ? path : canSubscribe ? 'subscribe' : 'own'

  return (
    <>
      {showFork ? <ProductPathFork cloud={cloud} ownOptions={ownOptions} path={path} onChange={setPath} /> : null}

      {activePath === 'subscribe' && canSubscribe ? <SubscriptionTierGrid product={product} cloud={cloud!} /> : null}
      {activePath === 'own' && canOwn ? <DeploymentPathGrid ownOptions={ownOptions} /> : null}

      {product.deployment_options.length > 1 ? (
        <DeploymentComparisonTable deploymentOptions={product.deployment_options} />
      ) : null}
    </>
  )
}
