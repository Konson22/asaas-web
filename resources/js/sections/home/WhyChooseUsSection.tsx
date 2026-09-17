import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { Badge } from '@/components/ui/badge'
import { whyChooseUsFeatures } from '@/data/whyChooseUs'
import { cn } from '@/lib/utils'

export function WhyChooseUsSection() {
  const featured = whyChooseUsFeatures.slice(0, 2)
  const rest = whyChooseUsFeatures.slice(2)

  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="accent">Why businesses choose MileSoftware</Badge>
          <SectionHeading
            title={
              <>
                A strategic partner, not another rigid{' '}
                <span className="text-accent">ERP</span>
              </>
            }
            description="Five reasons businesses move to MileSoftware — and stay."
            className="gap-4"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {featured.map((feature, index) => {
            const isOffline = feature.id === 'uninterrupted'
            return (
              <Reveal key={feature.id} delay={index * 0.05}>
                <div className="flex gap-5">
                  <FeatureIcon icon={feature.icon} tone={isOffline ? 'lime' : 'purple'} />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-ink-muted">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {rest.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 0.05}>
              <div className={cn('flex h-full flex-col gap-4 p-6', index === 1 && 'rounded-card border border-border bg-surface')}>
                <FeatureIcon icon={feature.icon} tone={feature.id === 'scales' ? 'lime' : 'purple'} />
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-ink-muted">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
