import { Link } from '@inertiajs/react'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

const reasons = [
  'Tailored solutions for your business',
  'Modern technologies and best practices',
  'Training and ongoing support',
  'Flexible payment options',
  'Local support in South Sudan',
]

const proofStats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
]

export function AiSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Why Choose Us
            </span>
            <h2 className="max-w-md text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-ink">
              Your <span className="text-primary">Technology</span>
              <br />
              Partner for Growth
            </h2>
            <p className="max-w-md text-base text-ink-muted">
              We combine technical expertise, industry experience and a commitment to our clients’
              success. Our solutions are reliable, scalable and built around your business.
            </p>
          </div>

          <ul className="flex flex-col gap-3.5">
            {reasons.map((point, index) => (
              <Reveal key={point} delay={index * 0.04} as="li">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-sm font-medium text-ink sm:text-base">{point}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Button variant="cta" size="lg" asChild className="w-fit rounded-full px-7">
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal
          delay={0.08}
          className="overflow-hidden rounded-[2rem] shadow-[0_32px_64px_-28px_rgb(6_27_58_/0.45)] lg:rounded-none lg:shadow-[0_36px_70px_-26px_rgb(6_27_58_/0.55)] lg:[clip-path:polygon(11%_0%,100%_0%,100%_100%,0%_100%)]"
        >
          {/* Diagonal cut only kicks in at `lg` (side-by-side layout) — on a single stacked
              column the slant would eat into the full-width panel's own content instead of
              reading as an accent against the text column beside it. */}
          <div className="relative isolate min-h-[28rem] overflow-hidden rounded-[2rem] [clip-path:inset(0_round_2rem)] sm:min-h-[32rem] lg:min-h-[36rem] lg:rounded-none lg:[clip-path:polygon(11%_0%,100%_0%,100%_100%,0%_100%)]">
            <img
              src="/images/laptop-work-finance.jpg"
              alt="Working on business analytics at a laptop"
              className="absolute inset-0 size-full rounded-[2rem] object-cover object-center lg:rounded-none"
            />
            <div
              className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/15 lg:rounded-none lg:bg-gradient-to-tr lg:from-navy-deep lg:via-navy-deep/75 lg:to-navy-deep/25"
              aria-hidden="true"
            />

            <div className="relative flex min-h-[28rem] flex-col justify-end gap-8 p-8 sm:min-h-[32rem] sm:p-10 lg:min-h-[36rem]">
              <blockquote className="max-w-sm">
                <span className="block font-serif text-5xl leading-none text-cyan" aria-hidden="true">
                  “
                </span>
                <p className="-mt-4 text-lg font-semibold leading-snug text-white sm:text-xl">
                  We don&apos;t just build software, we build long-term partnerships.
                </p>
              </blockquote>

              <dl className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <dt className="text-lg font-bold text-cyan sm:text-2xl">{stat.value}</dt>
                    <dd className="text-[0.7rem] font-medium leading-snug text-white/70 sm:text-xs">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
