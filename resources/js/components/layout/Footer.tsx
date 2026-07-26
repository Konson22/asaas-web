import { Link } from '@inertiajs/react'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
import { footerColumns } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="bg-primary-darker text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div className="flex flex-col gap-4">
          <Logo variant="dark" />
          <p className="max-w-sm text-sm text-white/60">
            Asas Vantage is a modern ERP, POS, and business management platform connecting
            sales, inventory, accounting, procurement, HR, and CRM in one system — cloud,
            offline, or hybrid.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-primary-light"
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

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Asas Vantage. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/50 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/50 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
