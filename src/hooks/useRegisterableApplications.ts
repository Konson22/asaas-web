import { useEffect, useState } from 'react'
import { getPlatformApiUrl } from '@/lib/platform'

export function useRegisterableApplications() {
  const [registerableApplications, setRegisterableApplications] = useState<string[]>([])

  useEffect(() => {
    let cancelled = false

    fetch(getPlatformApiUrl('/registerable-applications'))
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
      .catch(() => {
        if (!cancelled) {
          setRegisterableApplications([])
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return registerableApplications
}
