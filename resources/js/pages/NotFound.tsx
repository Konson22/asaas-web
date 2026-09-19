import { Link } from '@inertiajs/react'
import { PageTitle } from '@/components/common/PageTitle'
import { BrandBackdrop } from '@/components/common/BrandBackdrop'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <>
      <PageTitle title="Page Not Found" />
      <section className="relative overflow-hidden bg-background">
        <BrandBackdrop withAccent />
        <Container className="relative flex min-h-[60svh] flex-col items-center justify-center gap-6 py-24 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            404
          </span>
          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            This page doesn't exist
          </h1>
          <p className="max-w-md text-lg text-ink-muted">
            The page you're looking for may have been moved or removed. Let's get you back on
            track.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="lg" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
