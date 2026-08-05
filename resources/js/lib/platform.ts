const platformUrl = (import.meta.env.VITE_PLATFORM_URL as string | undefined)?.replace(/\/$/, '')
  || 'http://platform.asaas.local'

/** Apps that own their own registration (no central SSO /get-started). */
const directRegisterBases: Record<string, string> = {
  pharmacy: (import.meta.env.VITE_PHARMA_URL as string | undefined)?.replace(/\/$/, '')
    || 'https://pharma.asaasvantage.com',
}

export function getPlatformUrl(path = ''): string {
  if (!path) {
    return platformUrl
  }

  return `${platformUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function getPlatformApiUrl(path: string): string {
  return getPlatformUrl(`/api/v1/marketing${path.startsWith('/') ? path : `/${path}`}`)
}

/** Register / trial CTA for a product code. Pharmacy goes to the pharma app directly. */
export function getProductRegisterUrl(code: string): string {
  const base = directRegisterBases[code]
  if (base) {
    return `${base}/register`
  }

  return getPlatformUrl(`/get-started/${code}`)
}
