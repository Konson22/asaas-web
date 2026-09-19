import { Cloud } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
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
import type { ProductDetail as ProductDetailType } from '@/types/catalog'

export default function ProductDetailPage({ product }: { product: ProductDetailType }) {
  const registerableApplications = useRegisterableApplications()
  const canRegister = registerableApplications.includes(product.code)

  const showTrialCta =
    Boolean(product.trial_days) &&
    product.status !== 'coming_soon' &&
    !(product.starting_price.is_custom && product.deployment_options.length === 1)

  const primaryLabel = product.primary_cta_label || (showTrialCta ? 'Start Free Trial' : 'Request a Quote')
  const secondaryLabel = product.secondary_cta_label || 'Request a Quote'

  return (
    <>
      <PageTitle title={product.seo.title} />
      <PageHero
        lead={
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }, { label: product.name }]}
          />
        }
        eyebrow={product.category?.name ?? 'Products'}
        title={product.name}
        description={product.tagline ?? undefined}
      >
        <div className="mt-1 flex flex-col gap-2 sm:flex-row">
          {showTrialCta && product.capability_badges.includes('cloud') && canRegister ? (
            <Button variant="cta" size="sm" asChild>
              <a href={getProductRegisterUrl(product.code)}>
                <Cloud className="size-4" />
                {primaryLabel}
              </a>
            </Button>
          ) : (
            <Button variant="cta" size="sm" asChild>
              <a href="/contact">{primaryLabel}</a>
            </Button>
          )}
          <Button variant="secondary" size="sm" asChild>
            <a href="/contact">{secondaryLabel}</a>
          </Button>
        </div>
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
