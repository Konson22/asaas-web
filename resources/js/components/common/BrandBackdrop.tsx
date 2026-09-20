import { cn } from '@/lib/utils'

interface BrandBackdropProps {
  className?: string
  /** Extra cyan orb — keep this rare so the accent stays selective. */
  withAccent?: boolean
  /** Use on dark CTA bands so the wash stays visible. */
  inverse?: boolean
}

/** Soft color washes used behind heroes and featured bands. */
export function BrandBackdrop({ className, withAccent = false, inverse = false }: BrandBackdropProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {inverse ? (
        <>
          <div className="absolute -top-32 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-white/12 blur-3xl" />
          <div className="absolute -bottom-28 left-[-6rem] h-80 w-80 rounded-full bg-primary/35 blur-3xl" />
          {withAccent ? (
            <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-lime/20 blur-3xl" />
          ) : null}
        </>
      ) : (
        <>
          <div className="absolute inset-0 ambient-glow" />
          <div className="absolute -top-32 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute -bottom-28 left-[-6rem] h-80 w-80 rounded-full bg-primary/8 blur-3xl" />
          {withAccent ? (
            <>
              <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-lime/10 blur-3xl" />
              <div className="absolute top-16 left-1/3 h-28 w-28 rounded-full bg-accent/10 blur-3xl" />
            </>
          ) : null}
        </>
      )}
    </div>
  )
}
