import { Link, useLocation } from 'react-router-dom'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/common/Logo'
import { navLinks } from '@/data/navigation'
import { getPlatformUrl } from '@/lib/platform'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const { pathname } = useLocation()

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
                to={link.href}
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

        <div className="mt-auto flex flex-col gap-3">
          <Button variant="outline" asChild onClick={() => onOpenChange(false)}>
            <a href={getPlatformUrl('/login')}>Sign in</a>
          </Button>
          <Button variant="primary" asChild onClick={() => onOpenChange(false)}>
            <Link to="/products">Get started</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
