/** Deployment capability keys as returned by the central platform's catalogue API (`capabilities`). */
export const CAPABILITY_ORDER = ['cloud', 'desktop', 'offline', 'cloud_sync', 'local_server'] as const

export type CapabilityKey = (typeof CAPABILITY_ORDER)[number]

export const CAPABILITY_LABELS: Record<CapabilityKey, string> = {
  cloud: 'Cloud',
  desktop: 'Desktop',
  offline: 'Offline',
  cloud_sync: 'Cloud Sync',
  local_server: 'Local Server',
}
