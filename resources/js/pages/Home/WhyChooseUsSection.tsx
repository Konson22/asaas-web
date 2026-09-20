import { Link } from '@inertiajs/react'
import { ArrowRight, Quote } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { whyChooseUsFeatures } from '@/data/whyChooseUs'

const badges = [
  { id: 'delivery', label: 'Proven Delivery' },
  { id: 'trust', label: 'Client Trust' },
  { id: 'expertise', label: 'Local Expertise' },
]

export function WhyChooseUsSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-4 bg-primary/50" aria-hidden="true" />
              Why MileSoftwares
            </span>
            <h2 className="max-w-md text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-ink">
              Your <span className="text-primary">Technology</span>
              <br />
              Partner for Growth
            </h2>
          </div>

          <ul className="flex flex-col gap-6">
            {whyChooseUsFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Reveal key={feature.id} delay={index * 0.04} as="li">
                  <div className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink">{feature.title}</h3>
                      <p className="mt-0.5 text-sm text-ink-muted">{feature.description}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </ul>

          <Button variant="primary" size="lg" asChild className="w-fit">
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-navy-deep p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-navy/60 blur-3xl" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
              <img
                src="/images/hero-image2.png"
                alt="MileSoftwares dashboard on desktop and mobile"
                className="mx-auto w-full max-w-sm object-contain"
              />
            </div>

            <Quote className="relative mt-8 size-7 text-cyan" aria-hidden="true" />
            <p className="relative mt-2 max-w-xs text-lg font-semibold text-white">
              We don&apos;t just build software, we build long-term partnerships.
            </p>

            <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {badges.map((badge) => (
                <p key={badge.id} className="text-sm font-bold text-cyan sm:text-base">
                  {badge.label}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
