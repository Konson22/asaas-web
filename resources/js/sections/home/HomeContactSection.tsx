import { Container } from '@/components/common/Container'
import { InquiryForm } from '@/components/common/InquiryForm'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/common/Reveal'

const promises = [
  {
    id: '01',
    title: 'Start a free trial',
    description: 'Pick a product and run it on your own counter, pharmacy, or warehouse.',
  },
  {
    id: '02',
    title: 'See it work offline',
    description: 'We’ll walk through a sale with the network dropped, then synced.',
  },
  {
    id: '03',
    title: 'Talk to a local team',
    description: 'Support based in South Sudan — not a regional call center.',
  },
]

export function HomeContactSection() {
  return (
    <section className="bg-surface py-24 lg:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <Card className="p-8">
            <InquiryForm
              heading="Let's get you live"
              description="Tell us about your business and we’ll set up a trial or demo."
            />
          </Card>
        </Reveal>

        <div className="flex flex-col gap-8 lg:pt-4">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-lime">
              <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
              Get started
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-ink">
              From checkout to a running business
            </h2>
          </div>
          <ol className="flex flex-col gap-6">
            {promises.map((item) => (
              <li key={item.id} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary ring-1 ring-primary/25">
                  {item.id}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
