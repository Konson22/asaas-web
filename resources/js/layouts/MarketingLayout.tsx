import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="flex min-h-svh flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
