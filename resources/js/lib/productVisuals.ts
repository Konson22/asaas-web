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
 * The central catalogue doesn't ship product artwork, so visuals stay local to the marketing
 * site, keyed by the platform's stable `code`. `image` is the collage shown on product cards.
 *
 * `uicon` is the Flaticon UIcons (@flaticon/flaticon-uicons, regular/rounded style — see
 * app.css import) class used wherever a product needs a compact named mark.
 * Free-tier Flaticon UIcons require attribution, which lives in the Footer credit line
 * rather than per icon.
 *
 * `BrandTone` keeps its legacy 'purple' | 'green' | 'orange' names from the pre-2026-09-20
 * identity (renaming would ripple through every consumer below for a label only) — they now
 * resolve to the blue palette via app.css: purple → Primary Blue, green → Cyan, orange →
 * Bright Blue, so cycling through the three still reads as three distinct brand blues.
 */
export type BrandTone = 'purple' | 'green' | 'orange'

interface ProductVisual {
  image?: string
  icon: LucideIcon
  uicon: string
  tone: BrandTone
}

const visuals: Record<string, ProductVisual> = {
  'retail-pos': { image: '/images/products/POS.png', icon: ShoppingCart, uicon: 'fi-rr-shopping-cart', tone: 'orange' },
  pharmacy: { image: '/images/products/pharmacy.png', icon: Pill, uicon: 'fi-rr-prescription-bottle-pill', tone: 'green' },
  restaurant: { image: '/images/products/restaurant.png', icon: UtensilsCrossed, uicon: 'fi-rr-utensils', tone: 'orange' },
  inventory: { image: '/images/products/inventory.png', icon: Boxes, uicon: 'fi-rr-inventory-alt', tone: 'purple' },
  services: { image: '/images/products/services.png', icon: Briefcase, uicon: 'fi-rr-briefcase', tone: 'green' },
  distribution: { image: '/images/products/distribution.png', icon: Warehouse, uicon: 'fi-rr-warehouse-alt', tone: 'orange' },
  school: { image: '/images/products/school.png', icon: GraduationCap, uicon: 'fi-rr-graduation-cap', tone: 'purple' },
}

const fallback: ProductVisual = { icon: Package, uicon: 'fi-rr-package', tone: 'purple' }

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
