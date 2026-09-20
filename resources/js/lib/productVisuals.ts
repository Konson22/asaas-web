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
 * stable `code`. Every product renders as an icon card — the previous per-product PNGs were
 * AI-generated fake device mockups with the old "Asas Vantage" wordmark baked into the pixels
 * (wrong brand, garbled placeholder text), so they were retired rather than re-themed; the
 * `image` field stays on `ProductVisual` for when real product screenshots exist.
 *
 * `uicon` is the Flaticon UIcons (@flaticon/flaticon-uicons, regular/rounded style — see
 * app.css import) class used as the product mark on the homepage lineup
 * (HomeProductCardsSection) and anywhere else a product needs a large, named visual.
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
  'retail-pos': { icon: ShoppingCart, uicon: 'fi-rr-shopping-cart', tone: 'orange' },
  pharmacy: { icon: Pill, uicon: 'fi-rr-prescription-bottle-pill', tone: 'green' },
  restaurant: { icon: UtensilsCrossed, uicon: 'fi-rr-utensils', tone: 'orange' },
  inventory: { icon: Boxes, uicon: 'fi-rr-inventory-alt', tone: 'purple' },
  services: { icon: Briefcase, uicon: 'fi-rr-briefcase', tone: 'green' },
  distribution: { icon: Warehouse, uicon: 'fi-rr-warehouse-alt', tone: 'orange' },
  school: { icon: GraduationCap, uicon: 'fi-rr-graduation-cap', tone: 'purple' },
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
