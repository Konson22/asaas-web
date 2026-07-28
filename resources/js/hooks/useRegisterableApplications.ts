import { useEffect, useState } from 'react'
import { getPlatformApiUrl } from '@/lib/platform'

/**
 * Active product codes from the central platform marketing API.
 * Empty list means Coming soon for every cloud product (API failure or none active).
 */
export function useRegisterableApplications() {
  const [registerableApplications, setRegisterableApplications] = useState<string[]>([])

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    fetch(getPlatformApiUrl('/registerable-applications'), {
      method: 'GET',
      headers: { Accept: 'application/json' },
      credentials: 'omit',
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to load registerable applications')
        }

        return response.json() as Promise<{ applications?: string[] }>
      })
      .then((payload) => {
        if (!cancelled) {
          setRegisterableApplications(payload.applications ?? [])
        }
      })
      .catch((error: unknown) => {
        if (cancelled || (error instanceof DOMException && error.name === 'AbortError')) {
          return
        }

        if (!cancelled) {
          setRegisterableApplications([])
        }
      })

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [])

  return registerableApplications
}
