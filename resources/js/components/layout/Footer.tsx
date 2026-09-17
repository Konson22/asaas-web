import { Link } from '@inertiajs/react'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
import { footerColumns } from '@/data/navigation'
import { socialLinks } from '@/data/social'
import { useProducts } from '@/hooks/useProducts'

export function Footer() {
  const { products } = useProducts()

  const columns = footerColumns.map((column) =>
    column.title === 'Products' && products.length > 0
      ? { ...column, links: products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })) }
      : column,
  )

  return (
    <footer className="bg-background text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm text-ink-muted">
            MileSoftware is a modern ERP, POS, and business management platform connecting
            sales, inventory, accounting, procurement, HR, and CRM in one system — cloud,
            offline, or hybrid.
          </p>
          <div className="mt-2 flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="text-ink-muted transition-colors hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-ink-muted/70">
            © {new Date().getFullYear()} MileSoftware. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-ink-muted/70 transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-ink-muted/70 transition-colors hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
