import { lazy, Suspense } from 'react'
import { PageTitle } from '@/components/common/PageTitle'
import { HeroSection } from '@/sections/home/HeroSection'
import { FoundationSection } from '@/sections/home/FoundationSection'
import { WhyChooseUsSection } from '@/sections/home/WhyChooseUsSection'
import { DeploymentSection } from '@/sections/home/DeploymentSection'
import { CustomDevelopmentSection } from '@/sections/home/CustomDevelopmentSection'
import { ProfessionalServicesSection } from '@/sections/home/ProfessionalServicesSection'
import { CtaSection } from '@/sections/home/CtaSection'

const ProductShowcaseSection = lazy(() =>
  import('@/sections/home/ProductShowcaseSection').then((m) => ({ default: m.ProductShowcaseSection })),
)
const PowerfulFeaturesSection = lazy(() =>
  import('@/sections/home/PowerfulFeaturesSection').then((m) => ({ default: m.PowerfulFeaturesSection })),
)
const PricingSection = lazy(() =>
  import('@/sections/home/PricingSection').then((m) => ({ default: m.PricingSection })),
)
const FaqSection = lazy(() =>
  import('@/sections/home/FaqSection').then((m) => ({ default: m.FaqSection })),
)
const ProductComparisonSection = lazy(() =>
  import('@/sections/home/ProductComparisonSection').then((m) => ({ default: m.ProductComparisonSection })),
)

function SectionFallback() {
  return <div className="min-h-[400px] bg-background" aria-hidden="true" />
}

export default function HomePage() {
  return (
    <>
      <PageTitle title="Home" />
      <HeroSection />
      <FoundationSection />
      <Suspense fallback={<SectionFallback />}>
        <ProductShowcaseSection />
      </Suspense>
      <WhyChooseUsSection />
      <DeploymentSection />
      <Suspense fallback={<SectionFallback />}>
        <PowerfulFeaturesSection />
      </Suspense>
      <CustomDevelopmentSection />
      <Suspense fallback={<SectionFallback />}>
        <PricingSection />
      </Suspense>
      <ProfessionalServicesSection />
      <Suspense fallback={<SectionFallback />}>
        <FaqSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProductComparisonSection />
      </Suspense>
      <CtaSection />
    </>
  )
}

