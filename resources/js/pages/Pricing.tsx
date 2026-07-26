import { lazy, Suspense } from 'react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { CtaSection } from '@/sections/home/CtaSection'

const PricingSection = lazy(() =>
  import('@/sections/home/PricingSection').then((m) => ({ default: m.PricingSection })),
)
const FaqSection = lazy(() =>
  import('@/sections/home/FaqSection').then((m) => ({ default: m.FaqSection })),
)

function SectionFallback() {
  return <div className="min-h-[400px] bg-background" aria-hidden="true" />
}

export default function PricingPage() {
  return (
    <>
      <PageTitle title="Pricing" />
      <PageHero
        eyebrow="Pricing"
        title="Simple plans that scale with you"
        description="Start free and grow into the plan that fits — online subscription, manual approval, or an offline license."
      />
      <Suspense fallback={<SectionFallback />}>
        <PricingSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FaqSection />
      </Suspense>
      <CtaSection />
    </>
  )
}

