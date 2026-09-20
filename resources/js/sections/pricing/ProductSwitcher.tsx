import { getProductVisual } from '@/lib/productVisuals'
import type { ProductSummary } from '@/types/catalog'

interface ProductSwitcherProps {
  products: ProductSummary[]
  loading: boolean
  selectedSlug: string | null
  onSelect: (slug: string) => void
}

/** On-dark product tabs shown inside the pricing hero. Icons come from the same
 *  per-code visual map used on the product grid, so a product reads the same way
 *  everywhere on the site. */
export function ProductSwitcher({ products, loading, selectedSlug, onSelect }: ProductSwitcherProps) {
  if (loading) {
    return (
      <div className="flex flex-wrap gap-2" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-10 w-28 animate-pulse rounded-xl bg-white/10" />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Select a product">
      {products.map((product) => {
        const { icon: Icon } = getProductVisual(product.code)
        const active = product.slug === selectedSlug

        return (
          <button
            key={product.slug}
            type="button"
            onClick={() => onSelect(product.slug)}
            aria-pressed={active}
            className={`flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-colors ${
              active
                ? 'border-white bg-white text-navy-deep'
                : 'border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon className="size-4 shrink-0" />
            {product.short_name || product.name}
          </button>
        )
      })}
    </div>
  )
}
