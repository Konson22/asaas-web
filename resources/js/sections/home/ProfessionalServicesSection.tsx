import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { professionalServices } from '@/data/professionalServices'

export function ProfessionalServicesSection() {
  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="The expertise to make your implementation succeed"
          description="Beyond software, we provide the hands-on support that gets you live and keeps you running."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {professionalServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <div className="flex h-full flex-col gap-4">
                <FeatureIcon icon={service.icon} tone={index === 0 ? 'lime' : index === 1 ? 'purple' : 'green'} />
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-ink-muted">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
