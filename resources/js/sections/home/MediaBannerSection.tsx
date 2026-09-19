import { Link } from '@inertiajs/react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'

export function MediaBannerSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-16 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          <div className="pointer-events-none absolute -inset-8 bg-primary/18 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute right-10 top-8 h-32 w-32 rounded-full bg-lime/10 blur-2xl" aria-hidden="true" />
          <img
            src="/images/hero/desktop-transparent-bg.png"
            alt="MileSoftware product screenshot"
            className="relative z-10 mx-auto max-h-[28rem] w-full object-contain object-center p-6 sm:p-10"
          />
          <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start justify-between gap-4 bg-gradient-to-t from-card via-card/95 to-transparent p-6 pt-16 sm:flex-row sm:items-end sm:p-10 sm:pt-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-lime">
                <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                See the product
              </p>
              <h2 className="mt-3 max-w-xl text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Inspires a brighter way to run the counter
              </h2>
            </div>
            <Button variant="primary" asChild>
              <Link href="/products">
                Explore products
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
