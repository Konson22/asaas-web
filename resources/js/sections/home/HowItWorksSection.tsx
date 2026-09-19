import { Container } from '@/components/common/Container'
import { BrandBackdrop } from '@/components/common/BrandBackdrop'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'

const steps = [
  { id: '01', title: 'Understand', description: 'We learn about your organization, operations and requirements.' },
  { id: '02', title: 'Choose', description: 'Select the application and modules that fit your needs.' },
  { id: '03', title: 'Configure', description: 'Configure the application around your organization.' },
  {
    id: '04',
    title: 'Customize',
    description: 'Implement supported workflow, reporting, branding and operational customizations.',
  },
  { id: '05', title: 'Train', description: 'Prepare administrators and users to work confidently with the application.' },
  { id: '06', title: 'Go Live', description: 'Deploy the application and provide ongoing support.' },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-20 relative overflow-hidden bg-band py-24 lg:py-28">
      <BrandBackdrop inverse withAccent />
      <Container className="relative flex flex-col gap-14">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-lime-bright">
            <span className="size-1.5 rounded-full bg-lime-bright" aria-hidden="true" />
            How It Works
          </p>
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-white">
            From Demo to Daily Operations.
          </h2>
        </Reveal>

        <Reveal>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((step, index) => (
              <Card key={step.id} className="flex flex-col gap-3 p-5">
                <span
                  className={
                    index === steps.length - 1
                      ? 'flex size-9 items-center justify-center rounded-full bg-lime text-sm font-bold text-white'
                      : index % 2 === 0
                        ? 'flex size-9 items-center justify-center rounded-full bg-lime/15 text-sm font-bold text-lime ring-1 ring-lime/30'
                        : 'flex size-9 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent ring-1 ring-accent/30'
                  }
                >
                  {step.id}
                </span>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-sm text-ink-muted">{step.description}</p>
              </Card>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
