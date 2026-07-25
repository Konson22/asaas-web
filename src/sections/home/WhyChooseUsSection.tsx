import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Badge } from '@/components/ui/badge'
import { whyChooseUsFeatures } from '@/data/whyChooseUs'

export function WhyChooseUsSection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="accent">Why businesses choose Asas Vantage</Badge>
          <SectionHeading
            title="A strategic partner, not another rigid ERP"
            description="Five reasons businesses move to Asas Vantage — and stay."
            className="gap-4"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.id} delay={index * 0.05}>
                <div className="flex h-full flex-col gap-4 rounded-card border border-border bg-surface p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent/15">
                    <Icon className="size-5 text-accent-dark" />
                  </div>
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
