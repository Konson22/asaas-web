import { cn } from '@/lib/utils'

interface DashboardMockupProps {
  className?: string
}

/**
 * Abstract, hand-built illustration of the ERP dashboard — not a real
 * screenshot. Stands in until real product screenshots are available.
 */
export function DashboardMockup({ className }: DashboardMockupProps) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-card border border-white/10 bg-white shadow-2xl',
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-background px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <div className="ml-3 h-2 w-32 rounded-full bg-border" />
      </div>

      <div className="grid grid-cols-[64px_1fr]">
        <div className="flex flex-col gap-3 border-r border-border bg-background px-3 py-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={cn('h-8 rounded-lg', i === 1 ? 'bg-primary/15' : 'bg-white')}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Revenue', color: 'bg-primary' },
              { label: 'Profit', color: 'bg-accent' },
              { label: 'Expenses', color: 'bg-ink-muted' },
              { label: 'Inventory', color: 'bg-primary-darker' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border p-3">
                <span className={cn('block h-1.5 w-8 rounded-full', stat.color)} />
                <div className="mt-3 h-2 w-12 rounded-full bg-border" />
                <div className="mt-2 h-3 w-16 rounded-full bg-ink/10" />
              </div>
            ))}
          </div>

          <div className="flex h-28 items-end gap-2 rounded-lg border border-border p-4">
            {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-primary/70"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-border p-3">
                <div className="size-8 shrink-0 rounded-full bg-primary/10" />
                <div className="flex-1">
                  <div className="h-2 w-24 rounded-full bg-ink/10" />
                  <div className="mt-1.5 h-2 w-16 rounded-full bg-border" />
                </div>
                <div className="h-2 w-10 rounded-full bg-accent/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
