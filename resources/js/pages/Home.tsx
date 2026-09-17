import { PageTitle } from '@/components/common/PageTitle'
import { HeroSection } from '@/sections/home/HeroSection'
import { HeroFeatureCards } from '@/sections/home/HeroFeatureCards'
import { ProfessionalsSection } from '@/sections/home/ProfessionalsSection'
import { BrandStatementSection } from '@/sections/home/BrandStatementSection'
import { HomeProductCardsSection } from '@/sections/home/HomeProductCardsSection'
import { StatsStripSection } from '@/sections/home/StatsStripSection'
import { MediaBannerSection } from '@/sections/home/MediaBannerSection'
import { OfflineCapabilitySection } from '@/sections/home/OfflineCapabilitySection'
import { DeploymentSection } from '@/sections/home/DeploymentSection'
import { HowItWorksSection } from '@/sections/home/HowItWorksSection'
import { PricingSection } from '@/sections/home/PricingSection'
import { HomeContactSection } from '@/sections/home/HomeContactSection'
import { CtaSection } from '@/sections/home/CtaSection'

export default function HomePage() {
  return (
    <>
      <PageTitle title="Home" />
      <HeroSection />
      <HeroFeatureCards />
      <ProfessionalsSection />
      <BrandStatementSection />
      <HomeProductCardsSection />
      <StatsStripSection />
      <MediaBannerSection />
      <OfflineCapabilitySection />
      <DeploymentSection />
      <HowItWorksSection />
      <PricingSection />
      <HomeContactSection />
      <CtaSection />
    </>
  )
}
