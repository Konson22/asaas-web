import { lazy, Suspense } from 'react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { CtaSection } from '@/sections/home/CtaSection'
import { CatalogPricingSection } from '@/sections/pricing/CatalogPricingSection'

const FaqSection = lazy(() =>
  import('@/sections/home/FaqSection').then((m) => ({ default: m.FaqSection })),
)

function SectionFallback() {
  return <div className="min-h-[400px] bg-background" aria-hidden="true" />
}

export default function PricingPage() {
  return (
    <>
      <PageTitle title="Asas Pricing and Deployment Options" />
      <PageHero
        eyebrow="Pricing"
        title="Flexible pricing for every business"
        description="Choose cloud subscriptions, offline desktop licences, local-server deployment, or desktop applications with cloud synchronization. Asas pricing is designed for businesses of different sizes, industries, and connectivity environments."
      />
      <CatalogPricingSection />
      <Suspense fallback={<SectionFallback />}>
        <FaqSection />
      </Suspense>
      <CtaSection />
    </>
  )
}

