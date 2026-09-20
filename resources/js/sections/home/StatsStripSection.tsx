import { Link } from '@inertiajs/react'
import { Settings, BarChart3, Users2, Target, ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const benefits = [
  { id: 'adapt', label: 'Adapt to your workflow', icon: Settings, tone: 'blue' as const },
  { id: 'productivity', label: 'Increase productivity', icon: BarChart3, tone: 'purple' as const },
  { id: 'insights', label: 'Get real-time insights', icon: Users2, tone: 'purple' as const },
  { id: 'confidence', label: 'Grow with confidence', icon: Target, tone: 'green' as const },
]

export function StatsStripSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-glow absolute inset-0 opacity-60" />
        <div className="absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-16 bottom-[-6rem] h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
        <div className="dot-grid absolute left-10 top-10 h-24 w-24 text-white/10" />
      </div>

      <Container className="relative flex flex-col items-center gap-10 text-center">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-bright">
            <span className="h-px w-4 bg-blue-bright/60" aria-hidden="true" />
            More Than Software
          </span>
          <h2 className="max-w-xl text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-white">
            Nobody runs your business
            <br />
            <span className="text-cyan">exactly like you do.</span>
          </h2>
          <p className="max-w-lg text-base text-white/70">
            That&apos;s why we create flexible software solutions that adapt to your processes
            — not the other way around.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon
            const toneText = item.tone === 'green' ? 'text-lime' : item.tone === 'purple' ? 'text-purple-bright' : 'text-blue-accent'
            const toneBg = item.tone === 'green' ? 'bg-lime/15 ring-lime/30' : item.tone === 'purple' ? 'bg-primary/20 ring-purple-bright/30' : 'bg-blue-accent/15 ring-blue-accent/30'

            return (
              <Reveal key={item.id} delay={index * 0.05} className="flex flex-col items-center gap-3">
                <span className={cn('flex size-12 items-center justify-center rounded-full ring-1', toneBg, toneText)}>
                  <Icon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-white">{item.label}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15} className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button variant="cta" size="lg" asChild>
            <Link href="/contact">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="onGradientOutline" size="lg" asChild>
            <Link href="/contact">Talk to an Expert</Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
