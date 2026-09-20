import { Link } from '@inertiajs/react'
import { Monitor, Smartphone, Cloud, Settings, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

const secondaryCapabilities = [
  {
    id: 'apps',
    title: 'Web & Mobile Applications',
    description: 'Modern, responsive and user-friendly apps for your team and your customers.',
    icon: Smartphone,
    href: '/products',
  },
  {
    id: 'deployment',
    title: 'Cloud & On-Premise Options',
    description: 'Flexible deployment to suit your infrastructure and connectivity.',
    icon: Cloud,
    href: '/industries',
  },
  {
    id: 'custom',
    title: 'Custom Software Development',
    description: 'Tailored systems engineered around your exact workflow.',
    icon: Settings,
    href: '/contact',
  },
]

export function WhatWeDoSection() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-4 bg-primary/50" aria-hidden="true" />
              What We Do
            </span>
            <h2 className="max-w-lg text-[clamp(1.75rem,3.6vw,2.5rem)] font-bold leading-tight tracking-tight text-ink">
              Complete Software Solutions for <span className="text-primary">Your Business</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:max-w-sm lg:items-end">
            <p className="text-base text-ink-muted lg:text-right">
              We design and develop powerful, user-friendly software systems to help you manage,
              operate and grow your business efficiently.
            </p>
            <Button variant="outline" size="sm" asChild className="shrink-0">
              <Link href="/products">
                View All Products
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          {/* Featured capability — bigger, more editorial treatment than a uniform card grid. */}
          <Reveal>
            <Link
              href="/products"
              className="group relative flex h-full flex-col justify-between gap-8 overflow-hidden rounded-card border border-border bg-navy-deep p-8 sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="ambient-glow absolute inset-0 opacity-70" />
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
              </div>

              <div className="relative flex flex-col gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-cyan">
                  <Monitor className="size-6" />
                </span>
                <h3 className="text-2xl font-bold leading-snug text-white">Business Management Systems</h3>
                <p className="max-w-sm text-sm text-white/70">
                  Complete, configurable systems to run sales, inventory, accounting, payroll and
                  operations from one platform.
                </p>
              </div>

              <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">
                Learn More
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>

          {/* Remaining capabilities — a denser stacked list rather than three more identical cards. */}
          <Reveal delay={0.05}>
            <ul className="flex h-full flex-col divide-y divide-border rounded-card border border-border">
              {secondaryCapabilities.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id} className="flex-1">
                    <Link
                      href={item.href}
                      className="group flex h-full items-start gap-4 p-6 transition-colors hover:bg-elevated"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base font-bold leading-snug text-ink">{item.title}</h3>
                        <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
                      </div>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-ink-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
