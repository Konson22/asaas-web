import { usePage } from '@inertiajs/react'

/**
 * Active product codes from central-app, shared on every page so Get started
 * CTAs do not depend on a second browser call to the platform.
 */
export function useRegisterableApplications() {
  const { registerableApplications = [] } = usePage<{
    registerableApplications?: string[]
  }>().props

  return registerableApplications
}
