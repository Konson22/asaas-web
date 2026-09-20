import type { CatalogDeploymentOption } from '@/types/catalog'

/**
 * Shared price math for the pricing page's "subscribe or own it" fork and its two
 * step-two panes. Deliberately separate from `ProductDeploymentOptions`' own pricing
 * logic (product detail pages) so the two surfaces can evolve independently.
 */

export type Topology = 'cloud' | 'single' | 'sync' | 'server' | 'enterprise'

const SLUG_TOPOLOGY: Record<string, Topology> = {
  'cloud-web': 'cloud',
  'offline-single-pc': 'single',
  'desktop-cloud-sync': 'sync',
  'offline-local-server': 'server',
  enterprise: 'enterprise',
}

export function topologyForSlug(slug: string): Topology {
  return SLUG_TOPOLOGY[slug] ?? 'single'
}

export function cheapestCloudMonthly(cloud: CatalogDeploymentOption | undefined): { amount: number; currency: string } | null {
  if (!cloud) return null

  const priced = cloud.plans.filter((plan) => !plan.is_custom_price && plan.monthly_price !== null)
  if (priced.length === 0) return null

  const cheapest = priced.reduce((min, plan) => (plan.monthly_price! < min.monthly_price! ? plan : min))
  return { amount: cheapest.monthly_price!, currency: cheapest.currency }
}

export function cheapestOneTime(ownOptions: CatalogDeploymentOption[]): { amount: number; currency: string } | null {
  const priced = ownOptions
    .map((option) => option.plans[0])
    .filter((plan): plan is NonNullable<typeof plan> => Boolean(plan) && !plan!.is_custom_price && plan!.one_time_price !== null)

  if (priced.length === 0) return null

  const cheapest = priced.reduce((min, plan) => (plan.one_time_price! < min.one_time_price! ? plan : min))
  return { amount: cheapest.one_time_price!, currency: cheapest.currency }
}

/** First plan attached to a deployment option carries its price — mirrors the same
 *  convention `ProductDeploymentOptions` uses on product detail pages. */
export function formatDeploymentPrice(option: CatalogDeploymentOption): string | null {
  const plan = option.plans[0]
  if (!plan) return null
  if (plan.is_custom_price) return 'Custom pricing'

  const amount = plan.one_time_price ?? plan.monthly_price
  if (amount === null) return null

  const prefix = plan.is_starting_price ? 'from ' : ''
  const suffix = plan.one_time_price !== null ? ' one-time' : '/mo'
  return `${prefix}${plan.currency} ${amount}${suffix}`
}

export function maintenanceNote(option: CatalogDeploymentOption): string {
  const percentage = option.plans[0]?.maintenance_percentage
  if (percentage === null || percentage === undefined) {
    return 'Maintenance terms set per contract.'
  }
  return `${percentage}% of license value per year after year one.`
}
