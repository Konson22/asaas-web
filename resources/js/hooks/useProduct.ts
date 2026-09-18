import { useEffect, useState } from 'react'
import type { ProductDetail } from '@/types/catalog'

/**
 * Full product detail from the website's same-origin catalogue proxy (which
 * reads central-app, with cache). Used for client-driven product switching
 * on the Pricing page — Product Detail itself is fetched in PageController.
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

    fetch(`/api/catalog/products/${slug}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
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
