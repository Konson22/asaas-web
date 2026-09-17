import { useEffect, useRef, useState } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { ChevronDown, Menu } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/button'
import { MobileNav } from './MobileNav'
import { TopBar } from './TopBar'
import { navLinks } from '@/data/navigation'
import { useProducts } from '@/hooks/useProducts'
import { getPlatformUrl } from '@/lib/platform'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [appsOpen, setAppsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { url } = usePage()
  const pathname = url.split('?')[0].split('#')[0]
  const { products } = useProducts()
  const appsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!appsOpen) return

    function onClick(event: MouseEvent) {
      if (appsRef.current && !appsRef.current.contains(event.target as Node)) {
        setAppsOpen(false)
      }
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setAppsOpen(false)
    }

    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [appsOpen])

  return (
    <div className="sticky top-0 z-40">
      <TopBar />
      <header
        className={cn(
          'border-b bg-background transition-shadow duration-300',
          scrolled ? 'border-border shadow-md shadow-black/[0.03] dark:shadow-black/20' : 'border-border/60',
        )}
      >
        <Container className="flex items-center justify-between py-3">
          <Link href="/" className="shrink-0" aria-label="MileSoftwares home">
            <Logo className="h-8" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div className="relative" ref={appsRef}>
              <button
                type="button"
                onClick={() => setAppsOpen((prev) => !prev)}
                aria-expanded={appsOpen}
                className={cn(
                  'flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                  appsOpen ? 'text-accent' : 'text-ink-muted hover:text-ink',
                )}
              >
                Apps
                <ChevronDown className={cn('size-3.5 transition-transform', appsOpen && 'rotate-180')} />
              </button>

              {appsOpen ? (
                <div className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-border bg-surface py-2">
                  {products.length > 0 ? (
                    products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setAppsOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-secondary hover:text-accent"
                      >
                        {product.name}
                      </Link>
                    ))
                  ) : (
                    <Link
                      href="/products"
                      onClick={() => setAppsOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface-secondary hover:text-accent"
                    >
                      View all apps
                    </Link>
                  )}
                  <div className="mt-1 border-t border-border pt-1">
                    <Link
                      href="/products"
                      onClick={() => setAppsOpen(false)}
                      className="block px-4 py-2.5 text-sm font-semibold text-accent"
                    >
                      View all apps →
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>

            {navLinks
              .filter((link) => link.label !== 'Home')
              .map((link) => {
                const isHash = link.href.includes('#')
                const isActive = !isHash && pathname === link.href
                const Comp = isHash ? 'a' : Link

                return (
                  <Comp
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                      isActive ? 'text-accent' : 'text-ink-muted hover:text-ink',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Comp>
                )
              })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="text-ink-muted hover:text-ink" asChild>
              <a href={getPlatformUrl('/login')}>Sign in</a>
            </Button>
            <Button variant="cta" size="sm" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-ink"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </Container>

        <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
      </header>
    </div>
  )
}
