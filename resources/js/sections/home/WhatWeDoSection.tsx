import { Link } from '@inertiajs/react'
import { Monitor, Smartphone, Cloud, Settings, ArrowRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { BrandTone } from '@/lib/productVisuals'

const capabilities: Array<{
  id: string
  title: string
  description: string
  icon: typeof Monitor
  tone: BrandTone | 'blue'
  href: string
}> = [
  {
    id: 'management',
    title: 'Business Management Systems',
    description: 'Complete systems to run and grow your business.',
    icon: Monitor,
    tone: 'purple',
    href: '/products',
  },
  {
    id: 'apps',
    title: 'Web & Mobile Applications',
    description: 'Modern, responsive and user-friendly apps.',
    icon: Smartphone,
    tone: 'green',
    href: '/products',
  },
  {
    id: 'deployment',
    title: 'Cloud & On-Premise Options',
    description: 'Flexible deployment to suit your infrastructure.',
    icon: Cloud,
    tone: 'orange',
    href: '/industries',
  },
  {
    id: 'custom',
    title: 'Custom Software Development',
    description: 'Tailored solutions for your unique needs.',
    icon: Settings,
    tone: 'blue',
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

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.id} delay={index * 0.05}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <span
                    className={
                      item.tone === 'purple'
                        ? 'flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary'
                        : item.tone === 'green'
                          ? 'flex size-11 items-center justify-center rounded-xl bg-lime/12 text-lime'
                          : item.tone === 'orange'
                            ? 'flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent'
                            : 'flex size-11 items-center justify-center rounded-xl bg-blue-accent/12 text-blue-accent'
                    }
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="text-sm text-ink-muted">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
