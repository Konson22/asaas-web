import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { BrandBackdrop } from '@/components/common/BrandBackdrop'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

const emphasized = ['Your workflows.', 'Your reports.', 'Your users.', 'Your branches.', 'Your processes.']

export function BrandStatementSection() {
  return (
    <section className="relative overflow-hidden bg-band py-24 lg:py-32">
      <BrandBackdrop inverse withAccent />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-lime-bright">
            <span className="size-1.5 rounded-full bg-lime-bright" aria-hidden="true" />
            Built Around You
          </p>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white">
            Nobody runs your business exactly like you do.
          </h2>
          <p className="max-w-2xl text-xl font-semibold text-orange-bright sm:text-2xl">
            So why use software that expects you to?
          </p>
          <p className="max-w-xl text-base text-white/75">
            Start with a ready business application and adapt it around your workflows, users,
            branches, reports and operational requirements.
          </p>
        </Reveal>

        <Reveal className="flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-2 py-2">
          {emphasized.map((line, index) => (
            <span
              key={line}
              className={
                index === 0
                  ? 'text-2xl font-bold text-lime-bright sm:text-3xl'
                  : index === 2
                    ? 'text-2xl font-bold text-orange-bright sm:text-3xl'
                    : 'text-2xl font-bold text-white sm:text-3xl'
              }
            >
              {line}
            </span>
          ))}
        </Reveal>

        <Reveal className="flex flex-col items-center gap-6">
          <p className="text-lg font-semibold text-white">
            Ready to use. <span className="text-lime-bright">Flexible to customize.</span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="bandGreen" size="lg" asChild>
              <Link href="/products">
                Find Your App
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="bandOrange" size="lg" asChild>
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
