import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { cn } from '@/lib/utils'
import { cheapestCloudMonthly, cheapestOneTime } from '@/lib/pricingPath'
import type { CatalogDeploymentOption } from '@/types/catalog'

export type PricingPath = 'subscribe' | 'own'

interface ProductPathForkProps {
  cloud: CatalogDeploymentOption | undefined
  ownOptions: CatalogDeploymentOption[]
  path: PricingPath
  onChange: (path: PricingPath) => void
}

/**
 * The page's real organizing question: every Asaas product ships two ways — a hosted
 * subscription, or a one-time license the client runs on their own hardware, offline
 * if needed. This fork picks between them; everything below reacts to the choice.
 */
export function ProductPathFork({ cloud, ownOptions, path, onChange }: ProductPathForkProps) {
  const subscribeFrom = cheapestCloudMonthly(cloud)
  const ownFrom = cheapestOneTime(ownOptions)

  return (
    <section className="bg-background pt-20">
      <Container className="flex flex-col gap-8">
        <SectionHeading
          align="left"
          eyebrow="Step 1"
          title="How do you want to run it?"
          description="Pick whichever matches your connectivity and budget today — you can move to the other path later."
        />

        <div className="grid gap-3.5 sm:grid-cols-2" role="group" aria-label="Subscribe or own a license">
          <button
            type="button"
            onClick={() => onChange('subscribe')}
            aria-pressed={path === 'subscribe'}
            className={cn(
              'flex flex-col gap-1.5 rounded-2xl border p-6 text-left transition-colors',
              path === 'subscribe' ? 'border-primary bg-surface shadow-sm' : 'border-border bg-card hover:border-primary/40',
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-lg font-bold text-ink">Subscribe</span>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.68rem] font-bold tracking-wide text-primary uppercase">
                Cloud Web
              </span>
            </div>
            <p className="text-sm text-ink-muted">Hosted, updated, and backed up for you. Pay monthly or annually, cancel anytime.</p>
            {subscribeFrom ? (
              <p className="mt-1 text-sm text-ink-subtle">
                from <span className="font-semibold text-ink">{subscribeFrom.currency} {subscribeFrom.amount}</span>/mo
              </p>
            ) : null}
          </button>

          <button
            type="button"
            onClick={() => onChange('own')}
            aria-pressed={path === 'own'}
            className={cn(
              'flex flex-col gap-1.5 rounded-2xl border p-6 text-left transition-colors',
              path === 'own' ? 'border-primary bg-surface shadow-sm' : 'border-border bg-card hover:border-primary/40',
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-lg font-bold text-ink">Own it outright</span>
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.68rem] font-bold tracking-wide text-primary uppercase">
                Licensed
              </span>
            </div>
            <p className="text-sm text-ink-muted">One payment, installed on your hardware. Works fully offline if you need it to.</p>
            {ownFrom ? (
              <p className="mt-1 text-sm text-ink-subtle">
                from <span className="font-semibold text-ink">{ownFrom.currency} {ownFrom.amount}</span> one-time
              </p>
            ) : null}
          </button>
        </div>
      </Container>
    </section>
  )
}
