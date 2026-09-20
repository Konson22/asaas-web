import { PageTitle } from '@/components/common/PageTitle'
import { HeroSection } from './HeroSection'
import { WhatWeDoSection } from './WhatWeDoSection'
import { ProfessionalsSection } from './ProfessionalsSection'
import { StatsStripSection } from './StatsStripSection'
import { HomeProductCardsSection } from './HomeProductCardsSection'
import { AiSection } from './AiSection'
import { WhyChooseUsSection } from './WhyChooseUsSection'
import { CtaBannerSection } from './CtaBannerSection'

export default function HomePage() {
  return (
    <>
      <PageTitle title="Home" />
      <HeroSection />
      <WhatWeDoSection />
      <ProfessionalsSection />
      <StatsStripSection />
      <HomeProductCardsSection />
      <AiSection />
      <WhyChooseUsSection />
      <CtaBannerSection />
    </>
  )
}
