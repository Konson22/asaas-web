export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Platform', href: '/platform' },
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
    title: 'Platform',
    links: [
      { label: 'Sales & POS', href: '/platform' },
      { label: 'Inventory', href: '/platform' },
      { label: 'Accounting', href: '/platform' },
      { label: 'Procurement', href: '/platform' },
      { label: 'CRM', href: '/platform' },
      { label: 'Workforce', href: '/platform' },
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
      { label: 'Products', href: '/products' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Sales', href: '/contact' },
      { label: 'Get started', href: '/products' },
    ],
  },
]
