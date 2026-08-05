import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { featureGroups } from '@/data/features'

export function PowerfulFeaturesSection() {
  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Capabilities that go beyond checkout"
          description="AI, business intelligence, hardware support, and integrations — built into every Asas Vantage product."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {featureGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <Reveal key={group.id} delay={index * 0.05}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{group.description}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-ink-muted">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  {group.note ? (
                    <p className="text-xs italic text-ink-muted/80">{group.note}</p>
                  ) : null}
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
