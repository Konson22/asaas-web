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
          title="Choose the infrastructure that fits your operational reality"
          description="Cloud, desktop, hybrid, or mobile — deploy MileSoftware the way that fits your infrastructure and connectivity."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deploymentOptions.map((option, index) => {
            const bordered = index === 0 || index === 3
            const content = (
              <>
                <FeatureIcon icon={option.icon} tone={index % 2 === 0 ? 'lime' : 'purple'} />
                <h3 className="text-lg font-semibold text-white">{option.title}</h3>
                <p className="text-sm text-ink-muted">{option.description}</p>
              </>
            )

            return (
              <Reveal key={option.id} delay={index * 0.05}>
                {bordered ? (
                  <Card className="flex h-full flex-col gap-4 p-6">{content}</Card>
                ) : (
                  <div className="flex h-full flex-col gap-4 p-6">{content}</div>
                )}
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
