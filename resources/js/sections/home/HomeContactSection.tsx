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
    <section className="bg-background py-24">
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
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Get started</p>
            <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
              From checkout to a running <span className="text-accent">business</span>
            </h2>
          </div>
          <ol className="flex flex-col gap-6">
            {promises.map((item) => (
              <li key={item.id} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
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
