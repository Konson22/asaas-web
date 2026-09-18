import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

const emphasized = ['Your workflows.', 'Your reports.', 'Your users.', 'Your branches.', 'Your processes.']

export function BrandStatementSection() {
  return (
    <section className="relative overflow-hidden bg-surface-purple py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-gradient opacity-15 blur-3xl" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
            Built Around You
          </p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Nobody runs your business <span className="text-brand-gradient">exactly like you do.</span>
          </h2>
          <p className="max-w-2xl text-xl font-semibold text-ink sm:text-2xl">
            So why use software that expects you to?
          </p>
          <p className="max-w-xl text-base text-ink-muted">
            Start with a ready business application and adapt it around your workflows, users,
            branches, reports and operational requirements.
          </p>
        </Reveal>

        <Reveal className="flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 py-2">
          {emphasized.map((line, index) => (
            <span
              key={line}
              className={index === 0 ? 'text-2xl font-bold text-brand-gradient sm:text-3xl' : 'text-2xl font-bold text-ink sm:text-3xl'}
            >
              {line}
            </span>
          ))}
        </Reveal>

        <Reveal className="flex flex-col items-center gap-6">
          <p className="text-lg font-semibold text-ink">
            Ready to use. <span className="text-primary">Flexible to customize.</span>
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/products">
              Find Your App
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
