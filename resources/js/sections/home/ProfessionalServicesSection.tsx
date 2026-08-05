import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { professionalServices } from '@/data/professionalServices'

export function ProfessionalServicesSection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="The expertise to make your implementation succeed"
          description="Beyond software, we provide the hands-on support that gets you live and keeps you running."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {professionalServices.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="text-sm text-ink-muted">{service.description}</p>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
