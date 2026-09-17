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
    <section id="how-it-works" className="scroll-mt-20 relative overflow-hidden bg-purple-electric py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <Container className="relative flex flex-col gap-14">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lime">How It Works</p>
          <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            From Demo to Daily Operations.
          </h2>
        </Reveal>

        <Reveal>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((step) => (
              <li key={step.id} className="flex flex-col gap-2 border-t-2 border-lime/40 pt-4">
                <span className="text-sm font-bold text-lime">{step.id}</span>
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
