import { Link, usePage } from '@inertiajs/react'
import { Mail, Phone } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'
import { navLinks } from '@/data/navigation'
import { contactInfo, socialLinks } from '@/data/social'
import { useProducts } from '@/hooks/useProducts'
import { getPlatformUrl } from '@/lib/platform'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const { url } = usePage()
  const pathname = url.split('?')[0].split('#')[0]
  const { products } = useProducts()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent side="right" className="flex flex-col gap-6 overflow-y-auto bg-background p-6">
        <DialogTitle asChild>
          <Logo />
        </DialogTitle>

        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => {
            const isHash = link.href.includes('#')
            const isActive = isHash ? false : pathname === link.href
            const Comp = isHash ? 'a' : Link

            return (
              <Comp
                key={link.href}
                href={link.href}
                onClick={() => onOpenChange(false)}
                className={cn(
                  'rounded-lg px-3 py-3 text-base font-semibold transition-colors',
                  isActive ? 'bg-surface-purple text-primary' : 'text-ink hover:bg-surface',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Comp>
            )
          })}

          <div className="mt-2 flex flex-col gap-1 border-t border-border pt-3">
            <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-muted">Apps</p>
            {products.length > 0 ? (
              products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={() => onOpenChange(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {product.name}
                </Link>
              ))
            ) : (
              <Link
                href="/products"
                onClick={() => onOpenChange(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:bg-surface hover:text-ink"
              >
                View all apps
              </Link>
            )}
          </div>
        </nav>

        <div className="mt-auto flex flex-col gap-5">
          <div className="flex flex-col gap-2 border-t border-border pt-5">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary"
            >
              <Mail className="size-4" aria-hidden="true" />
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-sm text-ink-muted hover:text-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              {contactInfo.phone}
            </a>

            <div className="mt-1 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="text-ink-muted hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="outline" asChild onClick={() => onOpenChange(false)}>
              <a href={getPlatformUrl('/login')}>Sign in</a>
            </Button>
            <Button variant="cta" asChild onClick={() => onOpenChange(false)}>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
