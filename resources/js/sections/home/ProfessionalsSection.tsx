import { Zap, Users, ShieldCheck, Headset } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { FeatureIcon } from '@/components/common/FeatureIcon'

const supportItems = [
  {
    id: 'fast',
    title: 'Fast Implementation',
    description: 'Get up and running quickly with minimal disruption.',
    icon: Zap,
    tone: 'purple' as const,
  },
  {
    id: 'friendly',
    title: 'User-Friendly Design',
    description: 'Simple and intuitive for your team.',
    icon: Users,
    tone: 'blue' as const,
  },
  {
    id: 'reliable',
    title: 'Reliable & Secure',
    description: 'Your data is safe with modern security standards.',
    icon: ShieldCheck,
    tone: 'purple' as const,
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description: "We're here to help, every step of the way.",
    icon: Headset,
    tone: 'blue' as const,
  },
]

export function ProfessionalsSection() {
  return (
    <section className="bg-surface py-20 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/12 blur-3xl" aria-hidden="true" />
            <div className="dot-grid pointer-events-none absolute -right-4 top-6 hidden h-28 w-28 text-primary/15 sm:block" aria-hidden="true" />
            <img
              src="/images/hero/desktop-transparent-bg.png"
              alt="MileSoftwares dashboard"
              className="relative w-full object-contain drop-shadow-[0_24px_48px_rgb(17_25_54_/0.1)]"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-4 bg-primary/50" aria-hidden="true" />
              Built For Your Business
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-tight text-ink">
              Built Here.
              <br />
              <span className="text-primary">Supported Here.</span>
            </h2>
            <p className="mt-4 max-w-md text-base text-ink-muted">
              Our software is designed to be practical, affordable and easy to use — with local
              support you can rely on.
            </p>
          </div>

          <ul className="flex flex-col gap-6">
            {supportItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <li className="flex gap-4">
                  <FeatureIcon icon={item.icon} tone={item.tone} className="size-10" />
                  <div>
                    <h3 className="text-base font-bold text-ink">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-muted">{item.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
