import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

const emphasized = ['Your workflows.', 'Your reports.', 'Your users.', 'Your branches.', 'Your processes.']

export function BrandStatementSection() {
  return (
    <section className="relative overflow-hidden bg-purple-electric py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lime">Built Around You</p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Nobody runs your business exactly like you do.
          </h2>
          <p className="max-w-2xl text-xl font-semibold text-white/85 sm:text-2xl">
            So why use software that expects you to?
          </p>
          <p className="max-w-xl text-base text-white/70">
            Start with a ready business application and adapt it around your workflows, users,
            branches, reports and operational requirements.
          </p>
        </Reveal>

        <Reveal className="flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 py-2">
          {emphasized.map((line) => (
            <span key={line} className="text-2xl font-bold text-white sm:text-3xl">
              {line}
            </span>
          ))}
        </Reveal>

        <Reveal className="flex flex-col items-center gap-6">
          <p className="text-lg font-semibold text-lime">Ready to use. Flexible to customize.</p>
          <Button variant="cta" size="lg" asChild>
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
