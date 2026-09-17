import { Wifi, WifiOff, Monitor, RefreshCw } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { cn } from '@/lib/utils'

const flowSteps = [
  {
    id: 'connected',
    label: 'Connected',
    detail: 'Sales, stock, and records live in the cloud.',
    icon: Wifi,
    tone: 'lime',
  },
  {
    id: 'lost',
    label: 'Internet Lost',
    detail: 'The line drops. The counter does not.',
    icon: WifiOff,
    tone: 'navy',
  },
  {
    id: 'working',
    label: 'Keep Working',
    detail: 'Checkout, inventory, and accounts continue locally.',
    icon: Monitor,
    tone: 'lime',
  },
  {
    id: 'sync',
    label: 'Sync',
    detail: 'Desktop data reconciles with the cloud automatically.',
    icon: RefreshCw,
    tone: 'purple',
  },
] as const

const toneClasses = {
  lime: 'border-accent bg-accent text-background',
  navy: 'border-white/15 bg-background text-ink-muted',
  purple: 'border-primary bg-primary text-white',
}

export function OfflineCapabilitySection() {
  return (
    <section id="offline" className="scroll-mt-24 relative overflow-hidden bg-surface py-24">
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full border border-primary/20" />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Works Offline"
          title={
            <>
              No Internet? <span className="text-accent">Keep Working.</span>
            </>
          }
          description="Unstable connectivity is the operating environment. MileSoftware is built so a dropped connection never drops a sale."
        />

        <Reveal>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {flowSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <li key={step.id} className="relative flex flex-col items-center gap-4 text-center">
                  {index < flowSteps.length - 1 ? (
                    <span
                      className="pointer-events-none absolute left-[calc(50%+2.5rem)] top-10 hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-primary/50 to-accent/30 lg:block"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div
                    className={cn(
                      'relative z-10 flex size-20 items-center justify-center rounded-full border-2',
                      toneClasses[step.tone],
                    )}
                  >
                    <Icon className="size-8" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {step.label}
                  </p>
                  <p className="max-w-[16rem] text-sm text-ink-muted">{step.detail}</p>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
