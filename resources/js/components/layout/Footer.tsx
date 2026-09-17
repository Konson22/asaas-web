import { Link } from '@inertiajs/react'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
import { footerColumns } from '@/data/navigation'
import { socialLinks } from '@/data/social'
import { useProducts } from '@/hooks/useProducts'

export function Footer() {
  const { products } = useProducts()

  const columns = footerColumns.map((column) =>
    column.title === 'Apps' && products.length > 0
      ? { ...column, links: products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })) }
      : column,
  )

  return (
    // Footer stays near-black in both themes (brief §23), so it always uses the
    // dark-theme logo and fixed white/lime tones rather than the theme tokens.
    <footer className="bg-primary-darker text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr] lg:py-20">
        <div className="flex flex-col gap-4">
          <Logo variant="dark" />
          <p className="max-w-sm text-sm text-white/60">
            Ready business applications for pharmacies, schools, inventory operations,
            restaurants and Monitoring &amp; Evaluation — configured and customized around the
            way your organization works.
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
                  className="text-white/50 transition-colors hover:text-lime"
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
                      className="text-sm text-white/60 transition-colors hover:text-lime"
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
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MileSoftwares — A product of Miles Global Technologies.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/40 transition-colors hover:text-lime">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/40 transition-colors hover:text-lime">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
