export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  // "Products" isn't listed here — Navbar renders it as a special live-catalogue dropdown
  // (see appsOpen/appsRef in Navbar.tsx) right after Home, matching the reference's
  // Home / Products / Solutions / Pricing / Resources / About order.
  { label: 'Solutions', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/faq' },
  { label: 'About', href: '/about' },
]

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    // Static fallback only — Footer.tsx and the navbar's Apps dropdown replace this
    // with the live catalogue once `useProducts()` resolves. Kept in sync with the
    // real product slugs so a briefly unreachable API doesn't show broken links.
    title: 'Apps',
    links: [
      { label: 'Asas Retail POS', href: '/products/asas-retail-pos' },
      { label: 'Asas Pharmacy', href: '/products/asas-pharmacy' },
      { label: 'Asas Inventory', href: '/products/asas-inventory' },
      { label: 'Asas Institute', href: '/products/asas-institute' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Deployment', href: '/#deployment' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Request Demo', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms-of-service' },
    ],
  },
]
