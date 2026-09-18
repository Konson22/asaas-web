import { Link } from '@inertiajs/react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/common/Container'

export function MediaBannerSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16">
      <Container>
        <div className="relative overflow-hidden rounded-card border border-border">
          <div className="pointer-events-none absolute inset-0 bg-primary/20 blur-3xl" />
          <img
            src="/images/hero/desktop-transparent-bg.png"
            alt="MileSoftware product screenshot"
            className="relative z-10 mx-auto max-h-[28rem] w-full object-contain object-center p-6 sm:p-10"
          />
          <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start justify-between gap-4 bg-gradient-to-t from-primary via-primary/80 to-transparent p-6 sm:flex-row sm:items-end sm:p-10">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white">
                <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                See the product
              </p>
              <h2 className="mt-2 max-w-xl text-2xl font-bold text-white sm:text-3xl">
                Inspires a brighter way to run the counter
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-white/90"
            >
              Explore products
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
