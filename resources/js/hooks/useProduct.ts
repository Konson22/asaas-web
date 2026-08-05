import { useEffect, useState } from 'react'
import { getPlatformApiUrl } from '@/lib/platform'
import type { ProductDetail } from '@/types/catalog'

/**
 * Full product detail from the central platform, refetched whenever `slug` changes.
 * Used for client-driven product switching (e.g. the Pricing page selector) — the
 * Product Detail page itself fetches server-side in PageController for 404/SEO.
 */
export function useProduct(slug: string | null) {
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [loading, setLoading] = useState(Boolean(slug))
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!slug) {
      setProduct(null)
      setLoading(false)
      setError(false)
      return
    }

    let cancelled = false
    const controller = new AbortController()
    setLoading(true)
    setError(false)

    fetch(getPlatformApiUrl(`/products/${slug}`), {
      method: 'GET',
      headers: { Accept: 'application/json' },
      credentials: 'omit',
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to load product')
        }

        return response.json() as Promise<{ product?: ProductDetail }>
      })
      .then((payload) => {
        if (!cancelled) {
          setProduct(payload.product ?? null)
          setLoading(false)
        }
      })
      .catch((err: unknown) => {
        if (cancelled || (err instanceof DOMException && err.name === 'AbortError')) {
          return
        }

        setProduct(null)
        setError(true)
        setLoading(false)
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [slug])

  return { product, loading, error }
}
