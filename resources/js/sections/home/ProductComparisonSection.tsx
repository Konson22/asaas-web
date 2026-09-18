import { Check, Minus } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { useProducts } from '@/hooks/useProducts'
import { CAPABILITY_ORDER, CAPABILITY_LABELS } from '@/lib/capabilities'

export function ProductComparisonSection() {
  const { products, loading, error } = useProducts()

  if (loading || error || products.length === 0) {
    return null
  }

  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="See what’s included, side by side"
          description="How each product can be deployed and run."
        />

        <Reveal className="overflow-x-auto rounded-card border border-border bg-background">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-semibold text-ink">Capability</th>
                {products.map((product) => (
                  <th key={product.code} className="p-4 text-center font-semibold text-ink">
                    {product.short_name ?? product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CAPABILITY_ORDER.map((capability) => (
                <tr key={capability} className="border-b border-border last:border-b-0">
                  <td className="p-4 text-ink-muted">{CAPABILITY_LABELS[capability]}</td>
                  {products.map((product) => (
                    <td key={product.code} className="p-4 text-center">
                      {product.capabilities.includes(capability) ? (
                        <Check className="mx-auto size-4 text-primary" aria-label="Included" />
                      ) : (
                        <Minus className="mx-auto size-4 text-border" aria-label="Not included" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Container>
    </section>
  )
}
