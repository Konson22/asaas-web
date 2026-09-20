import { Link } from '@inertiajs/react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
import { socialLinks, contactInfo } from '@/data/social'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Solutions', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

// Mirrors WhatWeDoSection's real 4 capabilities — not the reference's IT-agency service menu
// (Web/Mobile/Desktop Applications, IT Infrastructure, Microsoft 365), which describes a
// business line MileSoftwares doesn't actually offer (it's a vertical SaaS product company,
// not an IT services/MSP shop).
const serviceLinks = [
  { label: 'Business Management Systems', href: '/products' },
  { label: 'Web & Mobile Applications', href: '/products' },
  { label: 'Cloud & On-Premise Options', href: '/industries' },
  { label: 'Custom Software Development', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-footer">
      <div className="h-px bg-gradient-to-r from-transparent via-blue-bright/50 to-transparent" />
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:py-20">
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Innovate &bull; Build &bull; Grow
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
                  className="text-white/60 transition-colors hover:text-cyan"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Our Services</h3>
          <ul className="flex flex-col gap-2.5">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-cyan"
              >
                <Mail className="size-4 shrink-0 text-blue-bright" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-cyan"
              >
                <Phone className="size-4 shrink-0 text-blue-bright" aria-hidden="true" />
                {contactInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/65">
              <MapPin className="size-4 shrink-0 text-blue-bright" aria-hidden="true" />
              Juba, South Sudan
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} MileSoftwares. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-white/45 transition-colors hover:text-cyan">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/45 transition-colors hover:text-cyan">
              Terms of Service
            </Link>
            <span className="text-xs font-medium text-white/45">Built for a Smarter Tomorrow.</span>
            {/* Required by the free-tier Flaticon UIcons license (product icons in
                HomeProductCardsSection/productVisuals) — drop this if a Premium Flaticon
                subscription is ever purchased instead. */}
            <a
              href="https://www.flaticon.com/uicons"
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs text-white/45 transition-colors hover:text-cyan"
            >
              Icons by Flaticon
            </a>
          </div>
        </Container>
      </div>
    </footer>
  )
}
