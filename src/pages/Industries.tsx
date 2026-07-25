import { lazy, Suspense } from 'react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { DeploymentSection } from '@/sections/home/DeploymentSection'
import { CtaSection } from '@/sections/home/CtaSection'

const IndustrySolutionsSection = lazy(() =>
  import('@/sections/home/IndustrySolutionsSection').then((m) => ({ default: m.IndustrySolutionsSection })),
)

function SectionFallback() {
  return <div className="min-h-[400px] bg-background" aria-hidden="true" />
}

export default function IndustriesPage() {
  return (
    <>
      <PageTitle title="Industries" />
      <PageHero
        eyebrow="Industries"
        title="Built for the way your industry works"
        description="From retail counters to pharmacy compliance and restaurant floors — Asas Vantage adapts to your workflows, not the other way around."
      />
      <Suspense fallback={<SectionFallback />}>
        <IndustrySolutionsSection />
      </Suspense>
      <DeploymentSection />
      <CtaSection />
    </>
  )
}

