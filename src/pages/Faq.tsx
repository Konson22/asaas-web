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
        title="Frequently asked questions"
        description="Answers about offline mode, multi-branch, desktop and mobile apps, permissions, currencies, and more."
      />
      <Suspense fallback={<SectionFallback />}>
        <FaqSection />
      </Suspense>
      <CtaSection />
    </>
  )
}

