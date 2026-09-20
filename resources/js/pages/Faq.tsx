import { lazy, Suspense } from 'react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { CtaSection } from '@/sections/home/CtaSection'

const FaqSection = lazy(() =>
  import('@/sections/home/FaqSection').then((m) => ({ default: m.FaqSection })),
)

function SectionFallback() {
  return <div className="min-h-[400px] bg-background" aria-hidden="true" />
}

export default function FaqPage() {
  return (
    <>
      <PageTitle title="FAQ" />
      <PageHero
        eyebrow="FAQ"
          image="/images/pages-hero/faq-hero.png"
        title={
          <>
            Frequently asked <span className="text-cyan">questions</span>
          </>
        }
        description="Offline mode, multi-branch, desktop and mobile, permissions, and more."
      />
      <Suspense fallback={<SectionFallback />}>
        <FaqSection />
      </Suspense>
      <CtaSection />
    </>
  )
}

