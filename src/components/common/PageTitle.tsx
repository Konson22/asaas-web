import { useEffect } from 'react'

const appName = 'Asas Vantage'

export function PageTitle({ title }: { title?: string }) {
  useEffect(() => {
    document.title = title ? `${title} · ${appName}` : appName
  }, [title])

  return null
}
