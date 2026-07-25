import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
import { Button } from '@/components/ui/button'
import { MobileNav } from './MobileNav'
import { navLinks } from '@/data/navigation'
import { getPlatformUrl } from '@/lib/platform'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link to="/" className="shrink-0" aria-label="Asas Vantage home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                  isActive ? 'text-primary' : 'text-ink-muted hover:text-ink',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-primary" />
                ) : null}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href={getPlatformUrl('/login')}>Sign in</a>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <Link to="/products">Get started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </Container>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </header>
  )
}
