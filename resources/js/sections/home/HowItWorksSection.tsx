import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'

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
    <section id="how-it-works" className="scroll-mt-20 relative overflow-hidden bg-surface py-24">
      <Container className="relative flex flex-col gap-14">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
            How It Works
          </p>
          <h2 className="max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
            From Demo to <span className="text-brand-gradient">Daily Operations.</span>
          </h2>
        </Reveal>

        <Reveal>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((step, index) => (
              <li key={step.id} className="flex flex-col gap-3 rounded-card border border-border bg-background p-5">
                <span
                  className={
                    index === steps.length - 1
                      ? 'flex size-9 items-center justify-center rounded-full bg-lime text-sm font-bold text-ink'
                      : 'flex size-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white'
                  }
                >
                  {step.id}
                </span>
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="text-sm text-ink-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
