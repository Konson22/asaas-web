export type ComparisonValue = true | false | 'optional'

export interface ComparisonRow {
  id: string
  feature: string
  values: Record<'pos' | 'pharmacy' | 'restaurant' | 'distribution' | 'services', ComparisonValue>
}

export const comparisonRows: ComparisonRow[] = [
  {
    id: 'cloud-deployment',
    feature: 'Cloud Deployment',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: true, services: true },
  },
  {
    id: 'desktop-deployment',
    feature: 'Desktop Deployment',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: true, services: true },
  },
  {
    id: 'hybrid-sync',
    feature: 'Hybrid Sync',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: true, services: true },
  },
  {
    id: 'mobile-app',
    feature: 'Mobile App',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: 'optional', services: true },
  },
  {
    id: 'multi-branch',
    feature: 'Multi-Branch',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: true, services: true },
  },
  {
    id: 'inventory-mgmt',
    feature: 'Inventory Mgmt',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: true, services: 'optional' },
  },
  {
    id: 'accounting-integration',
    feature: 'Accounting Integration',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: true, services: true },
  },
  {
    id: 'ai-features',
    feature: 'AI Features',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: true, services: true },
  },
  {
    id: 'full-customization',
    feature: 'Full Customization',
    values: { pos: true, pharmacy: true, restaurant: true, distribution: true, services: true },
  },
]
