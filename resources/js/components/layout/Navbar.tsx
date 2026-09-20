import { useEffect, useRef, useState } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { ChevronDown, Menu, Search } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
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
      setScrolled(window.scrollY > 8)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setAppsOpen(false)
    setMobileOpen(false)
  }, [pathname])

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

  const appsActive = pathname.startsWith('/products')

  return (
    <>
      <TopBar />
      <header
        className={cn(
          'sticky top-0 z-40 border-b bg-nav/95 backdrop-blur transition-shadow duration-200',
          scrolled ? 'border-border shadow-[0_1px_0_0_rgb(10_37_64_/0.04),0_8px_24px_-16px_rgb(10_37_64_/0.15)]' : 'border-transparent',
        )}
      >
        <Container
          className={cn(
            'flex items-center justify-between transition-[padding] duration-200',
            scrolled ? 'py-2.5' : 'py-3.5',
          )}
        >
          <Link href="/" className="shrink-0" aria-label="MileSoftwares home">
            <Logo className={cn('w-auto transition-[height] duration-200', scrolled ? 'h-8' : 'h-9')} />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            <Link
              href="/"
              className={cn(
                'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                pathname === '/' ? 'text-ink' : 'text-ink-muted hover:text-ink',
              )}
              aria-current={pathname === '/' ? 'page' : undefined}
            >
              Home
              {pathname === '/' ? (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
              ) : null}
            </Link>

            <div className="relative" ref={appsRef}>
              <button
                type="button"
                onClick={() => setAppsOpen((prev) => !prev)}
                aria-expanded={appsOpen}
                aria-haspopup="menu"
                className={cn(
                  'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  appsOpen || appsActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
                )}
              >
                Products
                <ChevronDown className={cn('size-3.5 transition-transform duration-200', appsOpen && 'rotate-180')} />
                {appsActive ? (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                ) : null}
              </button>

              {appsOpen ? (
                <div
                  role="menu"
                  className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-border bg-white py-1.5 shadow-xl shadow-navy-deep/10"
                >
                  {products.length > 0 ? (
                    products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setAppsOpen(false)}
                        role="menuitem"
                        className={cn(
                          'block px-4 py-2.5 text-sm font-medium transition-colors',
                          pathname === `/products/${product.slug}`
                            ? 'bg-primary/5 text-ink'
                            : 'text-ink-muted hover:bg-primary/5 hover:text-ink',
                        )}
                      >
                        {product.name}
                      </Link>
                    ))
                  ) : (
                    <Link
                      href="/products"
                      onClick={() => setAppsOpen(false)}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-primary/5 hover:text-ink"
                    >
                      View all products
                    </Link>
                  )}
                  <div className="mt-1 border-t border-border pt-1">
                    <Link
                      href="/products"
                      onClick={() => setAppsOpen(false)}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
                    >
                      View all products →
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
                      'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive ? (
                      <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
                    ) : null}
                  </Comp>
                )
              })}

            <Link
              href="/contact"
              className={cn(
                'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                pathname === '/contact' ? 'text-ink' : 'text-ink-muted hover:text-ink',
              )}
              aria-current={pathname === '/contact' ? 'page' : undefined}
            >
              Contact
              {pathname === '/contact' ? (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary" />
              ) : null}
            </Link>
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            {/* No site search exists yet — this is a real destination (FAQ), not a dead
                button: closest thing to "search for an answer" this site currently has. */}
            <Link
              href="/faq"
              aria-label="Search help & FAQs"
              className="inline-flex size-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-primary/5 hover:text-ink"
            >
              <Search className="size-4" />
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <a href={getPlatformUrl('/login')}>Sign in</a>
            </Button>
            <Button variant="cta" size="sm" asChild className="ml-1">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-ink transition-colors hover:bg-primary/5"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </Container>

        <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
      </header>
    </>
  )
}
