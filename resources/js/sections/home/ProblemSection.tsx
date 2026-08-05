import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

export function ProblemSection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col items-center gap-6 text-center">
        <SectionHeading
          title="Software built elsewhere assumes a world that doesn't look like Juba."
        />
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-base text-ink-muted sm:text-lg">
          <p>
            Most business platforms assume steady power, steady internet, and a support team a
            phone call away in the same country. In South Sudan, none of that is guaranteed — and
            losing a sale, a stock count, or a day's records because the connection dropped isn't
            a minor inconvenience. It's money walking out the door.
          </p>
          <p className="font-semibold text-ink">
            Asas Vantage was built around that reality from day one, not patched in as an
            afterthought.
          </p>
        </div>
      </Container>
    </section>
  )
}
