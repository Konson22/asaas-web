import { useEffect, useState } from 'react'
import { getPlatformApiUrl } from '@/lib/platform'
import type { ProductSummary } from '@/types/catalog'

/**
 * Public product catalogue from the central platform. Empty list + `loading: false`
 * means the API is unreachable or no products are active — callers should show an
 * empty state rather than treat it as "still loading".
 */
export function useProducts() {
  const [products, setProducts] = useState<ProductSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    fetch(getPlatformApiUrl('/products'), {
      method: 'GET',
      headers: { Accept: 'application/json' },
      credentials: 'omit',
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to load products')
        }

        return response.json() as Promise<{ products?: ProductSummary[] }>
      })
      .then((payload) => {
        if (!cancelled) {
          setProducts(payload.products ?? [])
          setLoading(false)
        }
      })
      .catch((err: unknown) => {
        if (cancelled || (err instanceof DOMException && err.name === 'AbortError')) {
          return
        }

        setProducts([])
        setError(true)
        setLoading(false)
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [])

  return { products, loading, error }
}
