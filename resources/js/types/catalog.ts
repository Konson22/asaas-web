/** Shapes returned by the central platform's public catalogue API (`/api/v1/marketing/products*`). */

export interface StartingPrice {
  amount: number | null
  currency: string
  formatted: string | null
  is_custom: boolean
}

export interface ProductSummary {
  slug: string
  code: string
  name: string
  short_name: string | null
  tagline: string | null
  short_description: string | null
  category: string | null
  icon: string | null
  status: string
  is_featured: boolean
  trial_days: number | null
  capabilities: string[]
  starting_price: StartingPrice
}

export interface CatalogAudience {
  name: string
  description: string | null
  icon: string | null
}

export interface CatalogBenefit {
  title: string
  description: string | null
  icon: string | null
}

export interface CatalogCapability {
  name: string
  icon: string | null
  description: string | null
}

export interface CatalogFeature {
  name: string
  icon: string | null
  description: string | null
  is_core: boolean
}

export interface CatalogFeatureGroup {
  name: string
  features: CatalogFeature[]
}

export interface CatalogRequirement {
  type: string
  title: string
  description: string | null
  minimum_value: string | null
  recommended_value: string | null
}

export interface CatalogPlanLimit {
  key: string
  label: string
  value: number | null
  is_unlimited: boolean
  unit: string | null
}

export interface CatalogPlan {
  name: string
  description: string | null
  plan_type: string | null
  currency: string
  monthly_price: number | null
  annual_price: number | null
  one_time_price: number | null
  setup_fee: number | null
  maintenance_percentage: number | null
  is_custom_price: boolean
  is_starting_price: boolean
  is_recommended: boolean
  trial_days: number | null
  limits: CatalogPlanLimit[]
}

export interface CatalogDeploymentOption {
  slug: string
  name: string
  short_description: string | null
  full_description: string | null
  billing_model: string
  requires_internet: boolean
  supports_offline: boolean
  supports_cloud_sync: boolean
  supports_multi_user: boolean
  supports_local_network: boolean
  client_provides_hardware: boolean
  hardware_included: boolean
  is_featured: boolean
  notes: string | null
  included_items: string[]
  client_provides_items: string[]
  not_included_items: string[]
  optional_items: string[]
  requirements: CatalogRequirement[]
  plans: CatalogPlan[]
}

export interface CatalogImplementationItem {
  title: string
  description: string | null
  item_type: string
  is_included: boolean
  is_required: boolean
}

export interface CatalogAddon {
  name: string
  description: string | null
  billing_type: string
  currency: string
  price: number | null
  is_starting_price: boolean
  formatted_price: string
}

export interface ProductDetail {
  slug: string
  code: string
  name: string
  short_name: string | null
  tagline: string | null
  short_description: string | null
  full_description: string | null
  overview_title: string | null
  overview_description: string | null
  problem_statement: string | null
  solution_statement: string | null
  primary_cta_label: string | null
  secondary_cta_label: string | null
  trial_days: number | null
  status: string
  capability_badges: string[]
  category: { name: string; slug: string } | null
  seo: { title: string; description: string | null }
  starting_price: StartingPrice
  audiences: CatalogAudience[]
  benefits: CatalogBenefit[]
  capabilities: CatalogCapability[]
  highlighted_features: CatalogFeature[]
  feature_groups: CatalogFeatureGroup[]
  deployment_options: CatalogDeploymentOption[]
  requirements: CatalogRequirement[]
  implementation_items: CatalogImplementationItem[]
  addons: CatalogAddon[]
  related_products: ProductSummary[]
}
