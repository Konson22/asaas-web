import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { foundationFeatures } from '@/data/foundation'
import { cycleBrandTone } from '@/lib/productVisuals'
import { cn } from '@/lib/utils'

export function FoundationSection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Every Asas product runs on the same resilient stack"
          description="Cloud, desktop, mobile, and multi-branch — the same modern technology underneath every purpose-built solution."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {foundationFeatures.map((feature, index) => {
            const bordered = index % 2 === 0
            return (
              <Reveal key={feature.id} delay={index * 0.05}>
                <div
                  className={cn(
                    'flex h-full flex-col gap-4 p-6',
                    bordered && 'rounded-card border border-border bg-surface',
                  )}
                >
                  <FeatureIcon icon={feature.icon} tone={cycleBrandTone(index)} />
                  <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                  <p className="text-sm text-ink-muted">{feature.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
