import { Store, Warehouse, Pill, UtensilsCrossed, Briefcase, type LucideIcon } from 'lucide-react'

export interface Industry {
  id: string
  name: string
  icon: LucideIcon
  description: string
  features: string[]
  ctaLabel: string
}

export const industries: Industry[] = [
  {
    id: 'retail',
    name: 'Retail & Commerce',
    icon: Store,
    description:
      'Run checkout, loyalty, and multi-branch stock from a single point of sale built for high-volume retail.',
    features: ['Barcode & QR checkout', 'Loyalty & gift cards', 'Multi-branch pricing'],
    ctaLabel: 'Explore Retail POS',
  },
  {
    id: 'wholesale',
    name: 'Wholesale & Distribution',
    icon: Warehouse,
    description:
      'Manage bulk pricing, credit terms, and multi-warehouse fulfillment for distributors and B2B sellers.',
    features: ['Tiered & bulk pricing', 'Credit limits & terms', 'Route & delivery tracking'],
    ctaLabel: 'Explore Distribution',
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: Pill,
    description:
      'Track batch numbers and expiry dates, manage prescriptions, and stay compliant across every branch.',
    features: ['Batch & expiry tracking', 'Prescription records', 'Controlled-substance logs'],
    ctaLabel: 'Explore Pharmacy',
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Hospitality',
    icon: UtensilsCrossed,
    description:
      'Table orders, kitchen display, and delivery all sync automatically with inventory and accounting.',
    features: ['Table & kitchen display', 'Recipe-based stock deduction', 'Delivery integrations'],
    ctaLabel: 'Explore Restaurant POS',
  },
  {
    id: 'services',
    name: 'Professional Services',
    icon: Briefcase,
    description:
      'Bill by project or retainer, track time, and manage client accounts without spreadsheets.',
    features: ['Project & retainer billing', 'Time tracking', 'Client account statements'],
    ctaLabel: 'Explore Services',
  },
]
