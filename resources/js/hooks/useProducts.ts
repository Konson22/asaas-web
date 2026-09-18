import { usePage } from '@inertiajs/react'
import type { ProductSummary } from '@/types/catalog'

type SharedCatalogueProps = {
  products?: ProductSummary[]
  catalogueError?: boolean
}

/**
 * Public product catalogue from central-app, loaded server-side and shared on
 * every page. `loading` stays false because the payload is already in the page.
 */
export function useProducts() {
  const { products = [], catalogueError = false } = usePage<SharedCatalogueProps>().props

  return {
    products,
    loading: false,
    error: catalogueError,
  }
}
