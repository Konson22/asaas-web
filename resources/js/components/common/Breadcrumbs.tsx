import { Link } from '@inertiajs/react'
import { ChevronRight } from 'lucide-react'

export interface Breadcrumb {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {index > 0 ? <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" /> : null}
          {item.href ? (
            <Link href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-white">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
