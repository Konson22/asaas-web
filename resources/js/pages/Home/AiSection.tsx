import { Link } from '@inertiajs/react'
import {
  ArrowRight,
  CreditCard,
  GraduationCap,
  MapPin,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

const reasons = [
  { id: 'tailored', label: 'Tailored solutions for your business', icon: SlidersHorizontal },
  { id: 'modern', label: 'Modern technologies and best practices', icon: Sparkles },
  { id: 'training', label: 'Training and ongoing support', icon: GraduationCap },
  { id: 'payment', label: 'Flexible payment options', icon: CreditCard },
  { id: 'local', label: 'Local support in South Sudan', icon: MapPin },
]

export function AiSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-24">
      <Container className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
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

          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <Reveal key={reason.id} delay={index * 0.04} as="li">
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-2.5 py-2">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-3.5" />
                    </span>
                    <p className="text-xs font-semibold leading-snug text-ink">{reason.label}</p>
                  </div>
                </Reveal>
              )
            })}
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
          className="relative min-h-[22rem] w-full self-stretch  lg:min-h-0"
        >
          <img
            src="/images/laptop-work-finance.png"
            alt="Working on business analytics at a laptop"
            className="absolute inset-0 size-full object-cover object-center"
          />
        </Reveal>
      </Container>
    </section>
  )
}
