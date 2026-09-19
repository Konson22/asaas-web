import type { ReactNode } from 'react'
import { Link } from '@inertiajs/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { BrandBackdrop } from '@/components/common/BrandBackdrop'
import { Button } from '@/components/ui/button'

const productLine = ['Pharmacy', 'School', 'Inventory', 'Restaurant', 'M&E']

interface CtaSectionProps {
  eyebrow?: string
  title?: ReactNode
  subheading?: ReactNode
  description?: string
  actions?: ReactNode
  showProductLine?: boolean
  /** "banner" is the reference's left-text/right-buttons rounded card (used on the homepage).
   * "default" is the taller centered band used on inner pages. */
  layout?: 'default' | 'banner'
}

export function CtaSection({
  eyebrow = "Let's Build Together",
  title = 'Your Business Already Has a Way of Working.',
  subheading = "Let's build software that fits it.",
  description,
  actions,
  showProductLine = true,
  layout = 'default',
}: CtaSectionProps) {
  const defaultActions = (
    <>
      <Button variant="cta" size="lg" asChild>
        <Link href="/contact">
          Get a Free Demo
          <ArrowRight className="size-4" />
        </Link>
      </Button>
      <Button variant="onGradientOutline" size="lg" asChild>
        <Link href="/contact">
          <MessageCircle className="size-4" />
          Contact Us
        </Link>
      </Button>
    </>
  )

  if (layout === 'banner') {
    return (
      <section id="cta" className="scroll-mt-20 bg-background py-16 lg:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-cta-from px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
            <BrandBackdrop inverse withAccent className="opacity-80" />
            <div
              className="pointer-events-none absolute -bottom-10 right-0 h-32 w-64 bg-gradient-to-l from-accent/25 via-primary/20 to-transparent opacity-70 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-bright">
                  <span className="h-px w-4 bg-purple-bright/60" aria-hidden="true" />
                  {eyebrow}
                </span>
                <h2 className="max-w-xl text-[clamp(1.6rem,3.4vw,2.25rem)] font-bold leading-tight tracking-tight text-white">
                  {title}
                </h2>
                {subheading ? <p className="text-base font-semibold text-lime">{subheading}</p> : null}
                {description ? <p className="max-w-md text-sm text-white/75 sm:text-base">{description}</p> : null}
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">{actions ?? defaultActions}</div>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="cta" className="scroll-mt-20 bg-background py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-cta-from px-6 py-14 sm:px-12 lg:py-16">
          <BrandBackdrop inverse withAccent />
          <div className="pointer-events-none absolute -bottom-16 left-0 right-0 h-40 bg-gradient-to-r from-primary/30 via-purple-bright/20 to-accent/15 opacity-70 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-bright">
              <span className="h-px w-4 bg-purple-bright/60" aria-hidden="true" />
              {eyebrow}
            </span>
            <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-white">{title}</h2>
            {subheading ? (
              <p className="max-w-xl text-lg font-semibold text-lime sm:text-xl">{subheading}</p>
            ) : null}
            {description ? <p className="max-w-xl text-base text-white/75">{description}</p> : null}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">{actions ?? defaultActions}</div>
            {showProductLine ? (
              <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 pt-4 text-sm font-medium text-white/70">
                {productLine.map((item, index) => (
                  <span key={item} className="flex items-center gap-2">
                    {index > 0 ? <span className="text-lime">•</span> : null}
                    {item}
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  )
}
