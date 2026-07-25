import { cn } from '@/lib/utils'

interface MobileMockupProps {
  className?: string
}

export function MobileMockup({ className }: MobileMockupProps) {
  return (
    <div
      className={cn(
        'aspect-[9/18] w-full max-w-[220px] overflow-hidden rounded-[28px] border-4 border-primary-darker bg-white shadow-2xl',
        className,
      )}
    >
      <div className="flex h-full flex-col gap-3 p-3">
        <div className="mx-auto h-1.5 w-12 rounded-full bg-border" />
        <div className="rounded-xl bg-primary p-3">
          <div className="h-2 w-16 rounded-full bg-white/50" />
          <div className="mt-2 h-4 w-24 rounded-full bg-white" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-border p-2">
              <div className="size-4 rounded bg-accent/40" />
              <div className="mt-2 h-1.5 w-10 rounded-full bg-border" />
            </div>
          ))}
        </div>
        <div className="mt-auto flex justify-around rounded-xl border border-border p-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="size-4 rounded-full bg-ink/10" />
          ))}
        </div>
      </div>
    </div>
  )
}
