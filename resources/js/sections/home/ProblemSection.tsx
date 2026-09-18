import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute right-0 top-12 h-56 w-56 rounded-full border border-primary/20" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <SectionHeading
          title={
            <>
              Software built elsewhere assumes a world that doesn&apos;t look like{' '}
              <span className="text-primary">Juba</span>.
            </>
          }
        />
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-base text-ink-muted sm:text-lg">
          <p>
            Most business platforms assume steady power, steady internet, and a support team a
            phone call away in the same country. In South Sudan, none of that is guaranteed — and
            losing a sale, a stock count, or a day&apos;s records because the connection dropped isn&apos;t
            a minor inconvenience. It&apos;s money walking out the door.
          </p>
          <p className="font-semibold text-ink">
            MileSoftware was built around that reality from day one, not patched in as an
            afterthought.
          </p>
        </div>
      </Container>
    </section>
  )
}
