import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { foundationFeatures } from '@/data/foundation'

export function FoundationSection() {
  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Every Asas product runs on the same resilient stack"
          description="Cloud, desktop, mobile, and multi-branch — the same modern technology underneath every purpose-built solution."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {foundationFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.id} delay={index * 0.05}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                  <p className="text-sm text-ink-muted">{feature.description}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
