import { Link } from '@inertiajs/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/sections/home/HeroSection'
import { WhatWeDoSection } from '@/sections/home/WhatWeDoSection'
import { ProfessionalsSection } from '@/sections/home/ProfessionalsSection'
import { StatsStripSection } from '@/sections/home/StatsStripSection'
import { HomeProductCardsSection } from '@/sections/home/HomeProductCardsSection'
import { WhyChooseUsSection } from '@/sections/home/WhyChooseUsSection'
import { CtaSection } from '@/sections/home/CtaSection'

// Homepage redesign (2026-09-19) — restructured to match the reference's exact section set:
// Hero / What We Do / Built Here.Supported Here. / More Than Software / Products /
// Why Choose MileSoftwares / Final CTA. The previous homepage additionally included
// HeroFeatureCards, BrandStatementSection, MediaBannerSection, OfflineCapabilitySection,
// DeploymentSection, HowItWorksSection, PricingSection and HomeContactSection — none deleted,
// just no longer part of the tightened homepage flow (Pricing already has its own full /pricing
// page; the others' real content can still be reused on other pages if needed).
export default function HomePage() {
  return (
    <>
      <PageTitle title="Home" />
      <HeroSection />
      <WhatWeDoSection />
      <ProfessionalsSection />
      <StatsStripSection />
      <HomeProductCardsSection />
      <WhyChooseUsSection />
      <CtaSection
        layout="banner"
        eyebrow="Ready To Transform Your Business?"
        title="Let's Build Something Amazing Together"
        description="Get in touch today and let's discuss how we can help you achieve your goals."
        actions={
          <>
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="onGradientOutline" size="lg" asChild>
              <Link href="/contact">
                <MessageCircle className="size-4" />
                Contact Us
              </Link>
            </Button>
          </>
        }
      />
    </>
  )
}
