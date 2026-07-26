import '../css/app.css'

import { createInertiaApp, router } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import type { ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { route as routeFn } from 'ziggy-js'
import { MainLayout } from '@/layouts/MarketingLayout'

declare global {
  const route: typeof routeFn
}

const appName = import.meta.env.VITE_APP_NAME || 'Asas Vantage'

createInertiaApp({
  title: (title) => (title ? `${title} · ${appName}` : appName),
  resolve: async (name) => {
    const page = await resolvePageComponent(
      `./pages/${name}.tsx`,
      import.meta.glob('./pages/**/*.tsx'),
    )

    const pageModule = page as { default: { layout?: (page: ReactNode) => ReactNode } }
    pageModule.default.layout = (children) => <MainLayout>{children}</MainLayout>

    return page
  },
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(<App {...props} />)
  },
  progress: {
    color: '#005eeb',
  },
})

router.on('navigate', (event) => {
  const hash = new URL(event.detail.page.url, window.location.origin).hash

  if (hash) {
    const target = document.getElementById(hash.slice(1))
    if (target) {
      target.scrollIntoView()
      return
    }
  }

  window.scrollTo(0, 0)
})
