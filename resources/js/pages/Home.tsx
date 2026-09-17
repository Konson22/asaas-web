import { PageTitle } from '@/components/common/PageTitle'
import { HeroSection } from '@/sections/home/HeroSection'
import { HeroFeatureCards } from '@/sections/home/HeroFeatureCards'
import { ProfessionalsSection } from '@/sections/home/ProfessionalsSection'
import { PricingSection } from '@/sections/home/PricingSection'
import { OfflineCapabilitySection } from '@/sections/home/OfflineCapabilitySection'
import { HomeContactSection } from '@/sections/home/HomeContactSection'
import { MediaBannerSection } from '@/sections/home/MediaBannerSection'
import { StatsStripSection } from '@/sections/home/StatsStripSection'
import { CtaSection } from '@/sections/home/CtaSection'
import { HomeProductCardsSection } from '@/sections/home/HomeProductCardsSection'

export default function HomePage() {
  return (
    <>
      <PageTitle title="Home" />
      <HeroSection />
      <HeroFeatureCards />
      <ProfessionalsSection />
      <PricingSection />
      <OfflineCapabilitySection />
      <HomeContactSection />
      <MediaBannerSection />
      <StatsStripSection />
      <CtaSection
        layout="banner"
        title={
          <>
            Ready to run your business without waiting on the{' '}
            <span className="text-accent">network</span>?
          </>
        }
      />
      <HomeProductCardsSection />
    </>
  )
}
