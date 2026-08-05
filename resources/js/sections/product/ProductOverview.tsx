import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Card } from '@/components/ui/card'
import type { ProductDetail } from '@/types/catalog'

export function ProductOverview({ product }: { product: ProductDetail }) {
  const blocks = [
    { label: 'The Challenge', body: product.problem_statement },
    { label: 'How Asas Solves It', body: product.solution_statement },
    { label: product.overview_title || 'Product Overview', body: product.overview_description },
  ].filter((block) => Boolean(block.body))

  if (blocks.length === 0 && !product.full_description) {
    return null
  }

  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-10">
        {product.full_description ? (
          <Reveal>
            <p className="max-w-3xl text-lg text-ink-muted">{product.full_description}</p>
          </Reveal>
        ) : null}

        {blocks.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {blocks.map((block, index) => (
              <Reveal key={block.label} delay={index * 0.05}>
                <Card className="h-full p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">{block.label}</h3>
                  <p className="mt-3 text-sm text-ink-muted">{block.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  )
}
