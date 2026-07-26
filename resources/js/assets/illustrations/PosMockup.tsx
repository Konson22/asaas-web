import { cn } from '@/lib/utils'

interface PosMockupProps {
  className?: string
}

export function PosMockup({ className }: PosMockupProps) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-card border border-white/10 bg-white shadow-2xl',
        className,
      )}
    >
      <div className="border-b border-border bg-background px-4 py-3">
        <div className="h-2 w-20 rounded-full bg-border" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="size-7 rounded-md bg-primary/10" />
              <div className="h-2 w-20 rounded-full bg-ink/10" />
            </div>
            <div className="h-2 w-8 rounded-full bg-border" />
          </div>
        ))}
        <div className="mt-2 flex items-center justify-between rounded-lg bg-primary-darker px-4 py-3">
          <span className="h-2 w-14 rounded-full bg-white/30" />
          <span className="h-3 w-16 rounded-full bg-accent" />
        </div>
      </div>
    </div>
  )
}
