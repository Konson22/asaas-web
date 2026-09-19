import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { Card } from '@/components/ui/card'
import { deploymentOptions } from '@/data/deployment'

export function DeploymentSection() {
  return (
    <section id="deployment" className="scroll-mt-20 bg-background py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Deployment"
          title="Choose How You Work."
          description="Supported applications can run in the cloud, offline on the desktop, or on a local server — fit the model to your connectivity, not the other way around."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {deploymentOptions.map((option, index) => (
            <Reveal key={option.id} delay={index * 0.05}>
              <Card className="flex h-full flex-col gap-4 p-6">
                <FeatureIcon icon={option.icon} tone={index === 0 ? 'purple' : index === 1 ? 'orange' : 'green'} />
                <h3 className="text-lg font-semibold text-ink">{option.title}</h3>
                <p className="text-sm text-ink-muted">{option.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
