import { Check, Minus } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Badge } from '@/components/ui/badge'
import { products } from '@/data/products'
import { comparisonRows } from '@/data/productComparison'

export function ProductComparisonSection() {
  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Product Comparison"
          title="See what’s included, side by side"
          description="Every product shares the same foundation — here’s where they differ."
        />

        <Reveal className="overflow-x-auto rounded-card border border-border bg-background">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-semibold text-ink">Feature</th>
                {products.map((product) => (
                  <th key={product.id} className="p-4 text-center font-semibold text-ink">
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-b-0">
                  <td className="p-4 text-ink-muted">{row.feature}</td>
                  {products.map((product) => {
                    const value = row.values[product.id as keyof typeof row.values]
                    return (
                      <td key={product.id} className="p-4 text-center">
                        {value === true ? (
                          <Check className="mx-auto size-4 text-primary" aria-label="Included" />
                        ) : value === 'optional' ? (
                          <Badge variant="outline">Optional</Badge>
                        ) : (
                          <Minus className="mx-auto size-4 text-border" aria-label="Not included" />
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  )
}
