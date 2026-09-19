import {
  ShoppingCart,
  Pill,
  UtensilsCrossed,
  Warehouse,
  Briefcase,
  Boxes,
  GraduationCap,
  Package,
  type LucideIcon,
} from 'lucide-react'

/**
 * The central catalogue doesn't have uploaded product images/icons yet (Phase 1 only seeded
 * data, not files), so visuals stay local to the marketing site, keyed by the platform's
 * stable `code`. Products without a screenshot fall back to an icon card instead of a
 * mismatched photo.
 */
export type BrandTone = 'purple' | 'green' | 'orange'

interface ProductVisual {
  image?: string
  icon: LucideIcon
  tone: BrandTone
}

const visuals: Record<string, ProductVisual> = {
  'retail-pos': { image: '/images/products/POS.png', icon: ShoppingCart, tone: 'orange' },
  pharmacy: { image: '/images/products/pharmacy.png', icon: Pill, tone: 'green' },
  restaurant: { image: '/images/products/restaurant.png', icon: UtensilsCrossed, tone: 'orange' },
  inventory: { image: '/images/products/inventory.png', icon: Boxes, tone: 'purple' },
  services: { image: '/images/products/services.png', icon: Briefcase, tone: 'green' },
  distribution: { icon: Warehouse, tone: 'orange' },
  school: { icon: GraduationCap, tone: 'purple' },
}

const fallback: ProductVisual = { icon: Package, tone: 'purple' }

export function getProductVisual(code: string): ProductVisual {
  return visuals[code] ?? fallback
}

export function getModuleTone(code: string): BrandTone {
  return getProductVisual(code).tone
}

export function cycleBrandTone(index: number): BrandTone {
  const tones: BrandTone[] = ['purple', 'green', 'orange']
  return tones[index % tones.length]
}

export const moduleToneClasses: Record<BrandTone, string> = {
  purple: 'bg-primary/15 text-primary',
  green: 'bg-lime/12 text-lime',
  orange: 'bg-accent/15 text-accent',
}
