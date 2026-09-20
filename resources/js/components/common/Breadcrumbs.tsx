import { Link } from '@inertiajs/react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Breadcrumb {
  label: string
  href?: string
}

export function Breadcrumbs({
  items,
  tone = 'light',
}: {
  items: Breadcrumb[]
  /** Use "dark" when the trail sits on a navy PageHero. */
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex flex-wrap items-center gap-1.5 text-sm', dark ? 'text-white/55' : 'text-ink-muted')}
    >
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {index > 0 ? <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" /> : null}
          {item.href ? (
            <Link href={item.href} className={dark ? 'text-white/55 hover:text-white' : 'text-ink-muted hover:text-primary'}>
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className={dark ? 'text-white' : 'text-ink'}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
