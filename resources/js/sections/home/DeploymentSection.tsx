import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { deploymentOptions } from '@/data/deployment'

export function DeploymentSection() {
  return (
    <section id="deployment" className="scroll-mt-20 bg-background py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Choose the infrastructure that fits your operational reality"
          description="Cloud, desktop, hybrid, or mobile — deploy Asas Vantage the way that fits your infrastructure and connectivity."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deploymentOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Reveal key={option.id} delay={index * 0.05}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{option.title}</h3>
                  <p className="text-sm text-ink-muted">{option.description}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
