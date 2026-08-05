import { Cloud } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/sections/home/CtaSection'
import { ProductOverview } from '@/sections/product/ProductOverview'
import { ProductAudiences } from '@/sections/product/ProductAudiences'
import { ProductBenefits } from '@/sections/product/ProductBenefits'
import { ProductCapabilities } from '@/sections/product/ProductCapabilities'
import { ProductFeatures } from '@/sections/product/ProductFeatures'
import { ProductSubscriptionPlans } from '@/sections/product/ProductSubscriptionPlans'
import { ProductDeploymentOptions } from '@/sections/product/ProductDeploymentOptions'
import { ProductRequirements } from '@/sections/product/ProductRequirements'
import { ProductImplementation } from '@/sections/product/ProductImplementation'
import { ProductAddons } from '@/sections/product/ProductAddons'
import { RelatedProducts } from '@/sections/product/RelatedProducts'
import { useRegisterableApplications } from '@/hooks/useRegisterableApplications'
import { getProductRegisterUrl } from '@/lib/platform'
import { getProductVisual } from '@/lib/productVisuals'
import type { ProductDetail as ProductDetailType } from '@/types/catalog'

const capabilityLabels: Record<string, string> = {
  cloud: 'Cloud',
  desktop: 'Desktop',
  offline: 'Offline',
  cloud_sync: 'Cloud Sync',
  local_server: 'Local Server',
}

export default function ProductDetailPage({ product }: { product: ProductDetailType }) {
  const registerableApplications = useRegisterableApplications()
  const canRegister = registerableApplications.includes(product.code)
  const visual = getProductVisual(product.code)

  const showTrialCta =
    Boolean(product.trial_days) &&
    product.status !== 'coming_soon' &&
    !(product.starting_price.is_custom && product.deployment_options.length === 1)

  const primaryLabel = product.primary_cta_label || (showTrialCta ? 'Start Free Trial' : 'Request a Quote')
  const secondaryLabel = product.secondary_cta_label || 'Request a Quote'

  return (
    <>
      <PageTitle title={product.seo.title} />
      <PageHero eyebrow={product.category?.name ?? 'Products'} title={product.name} description={product.tagline ?? undefined}>
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.name }]}
        />

        <div className="flex flex-wrap items-center gap-2">
          {product.capability_badges.map((c) => (
            <Badge key={c} variant="inverted">
              {capabilityLabels[c] ?? c}
            </Badge>
          ))}
          {product.status === 'coming_soon' ? <Badge variant="inverted">Coming soon</Badge> : null}
        </div>

        <p className="text-lg font-semibold text-white">
          {product.starting_price.is_custom
            ? 'Custom pricing'
            : product.starting_price.amount !== null
              ? `Starting from ${product.starting_price.formatted}/month`
              : null}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          {showTrialCta && product.capability_badges.includes('cloud') && canRegister ? (
            <Button variant="cta" asChild>
              <a href={getProductRegisterUrl(product.code)}>
                <Cloud className="size-4" />
                {primaryLabel}
              </a>
            </Button>
          ) : (
            <Button variant="cta" asChild>
              <a href="/contact">{primaryLabel}</a>
            </Button>
          )}
          <Button variant="secondary" asChild>
            <a href="/contact">{secondaryLabel}</a>
          </Button>
        </div>

        {visual.image ? (
          <div className="mt-4 w-full max-w-2xl overflow-hidden rounded-card bg-white/5 p-4">
            <img src={visual.image} alt={`${product.name} preview`} className="aspect-[16/9] w-full object-contain" />
          </div>
        ) : null}
      </PageHero>

      <ProductOverview product={product} />
      <ProductAudiences product={product} />
      <ProductBenefits product={product} />
      <ProductCapabilities product={product} />
      <ProductFeatures product={product} />
      <ProductSubscriptionPlans product={product} />
      <ProductDeploymentOptions product={product} />
      <ProductRequirements product={product} />
      <ProductImplementation product={product} />
      <ProductAddons product={product} />
      <RelatedProducts product={product} />

      <CtaSection />
    </>
  )
}
