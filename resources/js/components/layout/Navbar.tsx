import { useEffect, useState } from 'react'
import { Link, usePage } from '@inertiajs/react'
import { Menu } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
import { Button } from '@/components/ui/button'
import { MobileNav } from './MobileNav'
import { TopBar } from './TopBar'
import { navLinks } from '@/data/navigation'
import { getPlatformUrl } from '@/lib/platform'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { url } = usePage()
  const pathname = url.split('?')[0].split('#')[0]

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-0 z-40">
      <TopBar />
      <header
        className={cn(
          'border-b bg-white transition-shadow duration-300',
          scrolled ? 'border-black/10 shadow-md' : 'border-black/5 shadow-sm',
        )}
      >
        <Container className="flex items-center justify-between py-1">
          <Link href="/" className="shrink-0" aria-label="MileSoftware home">
            <Logo className="h-11" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isHash = link.href.includes('#')
              const isActive = !isHash && pathname === link.href
              const Comp = isHash ? 'a' : Link

              return (
                <Comp
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                    isActive ? 'text-primary' : 'text-primary-darker hover:text-primary',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-[7px] h-0.5 rounded-full bg-accent" />
                  ) : null}
                </Comp>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-darker hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href={getPlatformUrl('/login')}>Sign in</a>
            </Button>
            <Button variant="cta" size="sm" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-primary-darker lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </Container>

        <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
      </header>
    </div>
  )
}
