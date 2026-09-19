import { Wifi, WifiOff, Monitor, RefreshCw, Cloud } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { cn } from '@/lib/utils'

const flowSteps = [
  { id: 'online', label: 'Online', detail: 'Sales, stock, and records live in the cloud.', icon: Wifi, tone: 'blue' },
  { id: 'lost', label: 'Connection Lost', detail: 'The line drops. The counter does not.', icon: WifiOff, tone: 'navy' },
  {
    id: 'offline',
    label: 'Continue Offline',
    detail: 'Checkout, inventory, and records continue locally.',
    icon: Monitor,
    tone: 'blue',
  },
  { id: 'returns', label: 'Internet Returns', detail: 'Connectivity comes back on its own.', icon: Wifi, tone: 'navy' },
  { id: 'sync', label: 'Sync', detail: 'Local data reconciles with the cloud automatically.', icon: RefreshCw, tone: 'blue' },
  {
    id: 'updated',
    label: 'Cloud Updated',
    detail: 'Every branch sees the same current state.',
    icon: Cloud,
    tone: 'success',
  },
] as const

const toneClasses = {
  blue: 'border-primary bg-primary text-white',
  navy: 'border-border bg-elevated text-ink-muted',
  success: 'border-lime bg-lime text-white',
}

export function OfflineCapabilitySection() {
  return (
    <section id="offline" className="scroll-mt-24 relative overflow-hidden bg-background py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative flex flex-col gap-14">
        <SectionHeading
          eyebrow="Built for Real Connectivity"
          title="No Internet? Keep Working."
          description="Supported applications can continue operating locally when internet connectivity is unavailable, and synchronize with cloud services when connectivity returns."
        />

        <Reveal>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {flowSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <li key={step.id} className="relative flex flex-col items-center gap-4 text-center">
                  {index < flowSteps.length - 1 ? (
                    <span
                      className="pointer-events-none absolute left-[calc(50%+2.5rem)] top-10 hidden h-px w-[calc(100%-5rem)] bg-primary/25 xl:block"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div
                    className={cn(
                      'relative z-10 flex size-16 items-center justify-center rounded-full border-2',
                      toneClasses[step.tone],
                    )}
                  >
                    <Icon className="size-6" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                    {step.label}
                  </p>
                  <p className="max-w-[14rem] text-sm text-ink-muted">{step.detail}</p>
                </li>
              )
            })}
          </ol>
        </Reveal>

        <Reveal className="text-center">
          <p className="text-xl font-bold text-ink sm:text-2xl">
            Online when connected. Operational when offline.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
