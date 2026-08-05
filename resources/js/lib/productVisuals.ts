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
interface ProductVisual {
  image?: string
  icon: LucideIcon
}

const visuals: Record<string, ProductVisual> = {
  'retail-pos': { image: '/images/products/POS.png', icon: ShoppingCart },
  pharmacy: { image: '/images/products/pharmacy.png', icon: Pill },
  restaurant: { image: '/images/products/restaurant.png', icon: UtensilsCrossed },
  inventory: { image: '/images/products/inventory.png', icon: Boxes },
  services: { image: '/images/products/services.png', icon: Briefcase },
  distribution: { icon: Warehouse },
  school: { icon: GraduationCap },
}

export function getProductVisual(code: string): ProductVisual {
  return visuals[code] ?? { icon: Package }
}
