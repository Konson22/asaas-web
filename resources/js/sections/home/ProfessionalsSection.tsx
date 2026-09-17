import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'

const numberedItems = [
  {
    id: '01',
    title: 'Built around your business',
    description:
      'Every solution is engineered for its industry. We don’t force your unique workflows into a rigid, generic ERP.',
  },
  {
    id: '02',
    title: 'Works online and offline',
    description:
      'Keep serving customers without a connection. When the network returns, desktop data synchronizes automatically.',
  },
  {
    id: '03',
    title: 'Ready to grow with you',
    description:
      'Start with a single branch and expand to hundreds. Add users, locations, and products without migrating systems.',
  },
]

export function ProfessionalsSection() {
  return (
    <section className="bg-surface py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute inset-6 rounded-2xl bg-primary/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-card border border-border bg-background p-6">
              <img
                src="/images/hero/desktop-transparent-bg.png"
                alt="MileSoftware dashboard"
                className="w-full object-contain"
              />
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">We’re professionals</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Built here. <span className="text-accent">Supported here.</span>
            </h2>
            <p className="mt-4 text-base text-ink-muted">
              MileSoftware isn’t a regional product with South Sudan added to a country list. It’s
              built by a team that works where you work.
            </p>
          </div>

          <ol className="flex flex-col gap-6">
            {numberedItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <li className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
