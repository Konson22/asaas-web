const platformUrl = (import.meta.env.VITE_PLATFORM_URL as string | undefined)?.replace(/\/$/, '')
  || 'https://app.asaasvantage.com'

export function getPlatformUrl(path = ''): string {
  if (!path) {
    return platformUrl
  }

  return `${platformUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function getPlatformApiUrl(path: string): string {
  return getPlatformUrl(`/api/v1/marketing${path.startsWith('/') ? path : `/${path}`}`)
}
