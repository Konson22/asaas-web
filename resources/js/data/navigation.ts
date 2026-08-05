export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    // Static fallback only — Footer.tsx replaces this with the live catalogue once
    // `useProducts()` resolves. Kept in sync with the real product slugs so a briefly
    // unreachable API doesn't show broken links instead.
    title: 'Products',
    links: [
      { label: 'Asas Retail POS', href: '/products/asas-retail-pos' },
      { label: 'Asas Pharmacy', href: '/products/asas-pharmacy' },
      { label: 'Asas Inventory', href: '/products/asas-inventory' },
      { label: 'Asas Institute', href: '/products/asas-institute' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Retail & Commerce', href: '/industries' },
      { label: 'Wholesale & Distribution', href: '/industries' },
      { label: 'Pharmacy', href: '/industries' },
      { label: 'Restaurant & Hospitality', href: '/industries' },
      { label: 'Professional Services', href: '/industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'All products', href: '/products' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Sales', href: '/contact' },
      { label: 'Get started', href: '/products' },
    ],
  },
]
