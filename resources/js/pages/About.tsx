import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CtaSection } from '@/sections/home/CtaSection'

const principles = [
  {
    title: 'Ready, not custom-built',
    body: 'Every application starts as working software — not a blank slate. You configure and customize the parts that need to match how your organization actually operates.',
  },
  {
    title: 'Built around real operations',
    body: 'Workflows, users, branches, and reports are configured to fit your organization, instead of asking your organization to change how it works to fit the software.',
  },
  {
    title: 'Connectivity on your terms',
    body: 'For organizations with limited or unreliable internet, supported applications can run offline or on a local server, syncing with the cloud when connectivity allows.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <PageHero
        eyebrow="About MileSoftwares"
        title="Software designed around real operations."
        description="Configurable applications for pharmacies, schools, inventory, restaurants, and M&E."
      />

      <section className="bg-background py-20 lg:py-24">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-muted">
            Instead of expecting every organization to operate the same way, MileSoftwares
            applications are configured around different workflows, users, branches, and
            reporting requirements — replacing fragmented manual processes with practical
            digital systems.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-20 lg:py-24">
        <Container className="flex flex-col gap-10">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-lime">
              <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
              How we work
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">What MileSoftwares believes</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <Card key={principle.title} className="flex flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold text-ink">{principle.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{principle.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <Container className="flex flex-col items-start gap-4">
          <p className="max-w-2xl text-base text-ink-muted">
            MileSoftwares is a product of Miles Global Technologies.
          </p>
          <Button variant="outline" asChild>
            <Link href="/products">
              Explore our apps
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Container>
      </section>

      <CtaSection layout="banner" />
    </>
  )
}
