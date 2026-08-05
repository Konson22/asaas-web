import { Link, usePage } from '@inertiajs/react'
import { Mail, Phone } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'
import { navLinks } from '@/data/navigation'
import { contactInfo, socialLinks } from '@/data/social'
import { getPlatformUrl } from '@/lib/platform'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const { url } = usePage()
  const pathname = url.split('?')[0]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent side="right" className="flex flex-col gap-8 p-6">
        <DialogTitle asChild>
          <Logo />
        </DialogTitle>

        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => onOpenChange(false)}
                className={cn(
                  'rounded-lg px-3 py-3 text-base font-semibold transition-colors',
                  isActive ? 'bg-primary/10 text-primary' : 'text-ink hover:bg-background',
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-5">
          <div className="flex flex-col gap-2 border-t border-border pt-5">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
            >
              <Mail className="size-4" aria-hidden="true" />
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink"
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
                    className="text-ink-muted hover:text-ink"
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
            <Button variant="primary" asChild onClick={() => onOpenChange(false)}>
              <Link href="/products">Get started</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
