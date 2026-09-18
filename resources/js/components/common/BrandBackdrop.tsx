import { cn } from '@/lib/utils'

interface BrandBackdropProps {
  className?: string
  /** Extra teal orb — keep this rare so the accent stays selective. */
  withAccent?: boolean
}

/** Soft navy (and optional teal) orbs used behind light heroes and featured bands. */
export function BrandBackdrop({ className, withAccent = false }: BrandBackdropProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute -top-28 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand-gradient opacity-20 blur-3xl" />
      <div className="absolute -bottom-24 left-[-5rem] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      {withAccent ? (
        <div className="absolute bottom-16 right-1/4 h-40 w-40 rounded-full bg-lime/25 blur-3xl" />
      ) : null}
    </div>
  )
}
