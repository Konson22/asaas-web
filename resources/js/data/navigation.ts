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
    title: 'Products',
    links: [
      { label: 'Asas POS', href: '/products/pos' },
      { label: 'Asas Pharmacy', href: '/products/pharmacy' },
      { label: 'Asas Restaurant', href: '/products/restaurant' },
      { label: 'Asas Distribution', href: '/products/distribution' },
      { label: 'Asas Services', href: '/products/services' },
      { label: 'Asas Inventory', href: '/products/inventory' },
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
