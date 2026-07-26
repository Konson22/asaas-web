import { cn } from '@/lib/utils'

const series = [
  { label: 'Revenue', color: 'bg-primary', values: [55, 70, 60, 85, 75, 95] },
  { label: 'Profit', color: 'bg-accent', values: [30, 35, 32, 45, 40, 52] },
  { label: 'Expenses', color: 'bg-ink-muted', values: [25, 28, 27, 30, 29, 33] },
  { label: 'Inventory', color: 'bg-primary-darker', values: [40, 42, 38, 46, 44, 48] },
]

interface ReportChartProps {
  className?: string
}

/** Abstract multi-series bar chart using only the brand palette — no rainbow charts. */
export function ReportChart({ className }: ReportChartProps) {
  return (
    <div className={cn('rounded-card border border-border bg-surface p-6', className)}>
      <div className="mb-6 flex flex-wrap items-center gap-5">
        {series.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className={cn('size-2.5 rounded-full', s.color)} />
            <span className="text-sm font-medium text-ink-muted">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="flex h-48 items-end gap-4">
        {series[0].values.map((_, monthIndex) => (
          <div key={monthIndex} className="flex flex-1 items-end gap-1">
            {series.map((s) => (
              <div
                key={s.label}
                className={cn('flex-1 rounded-t-sm', s.color)}
                style={{ height: `${s.values[monthIndex]}%` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
