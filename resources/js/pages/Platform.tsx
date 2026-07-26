import { lazy, Suspense } from 'react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { ConnectedPlatformSection } from '@/sections/home/ConnectedPlatformSection'
import { PermissionsSection } from '@/sections/home/PermissionsSection'
import { ReportingSection } from '@/sections/home/ReportingSection'
import { CtaSection } from '@/sections/home/CtaSection'

const PlatformOverviewSection = lazy(() =>
  import('@/sections/home/PlatformOverviewSection').then((m) => ({ default: m.PlatformOverviewSection })),
)
const ProductShowcaseSection = lazy(() =>
  import('@/sections/home/ProductShowcaseSection').then((m) => ({ default: m.ProductShowcaseSection })),
)

function SectionFallback() {
  return <div className="min-h-[400px] bg-background" aria-hidden="true" />
}

export default function PlatformPage() {
  return (
    <>
      <PageTitle title="Platform" />
      <PageHero
        eyebrow="Platform"
        title="Every part of your business, connected"
        description="Sales, inventory, accounting, procurement, CRM, and workforce management working together in one system — with granular roles and permissions."
      />
      <Suspense fallback={<SectionFallback />}>
        <PlatformOverviewSection />
      </Suspense>
      <ConnectedPlatformSection />
      <PermissionsSection />
      <Suspense fallback={<SectionFallback />}>
        <ProductShowcaseSection />
      </Suspense>
      <ReportingSection />
      <CtaSection />
    </>
  )
}

