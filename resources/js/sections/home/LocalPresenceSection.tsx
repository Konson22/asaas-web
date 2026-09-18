import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { localPresenceFeatures } from '@/data/localPresence'

export function LocalPresenceSection() {
  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title={
            <>
              Built here. <span className="text-primary">Supported here.</span>
            </>
          }
          description="MileSoftware isn't a regional product with South Sudan added to a country list. It's built by a team that works where you work."
        />

        <div className="grid gap-10 sm:grid-cols-3">
          {localPresenceFeatures.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 0.05}>
              <div className="flex h-full flex-col gap-4">
                <FeatureIcon
                  icon={feature.icon}
                  tone={feature.id === 'ssp-native' ? 'blue' : feature.id === 'local-support' ? 'green' : 'blue'}
                />
                <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="text-sm text-ink-muted">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
