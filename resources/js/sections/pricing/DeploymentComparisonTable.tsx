import { Check, Minus, X } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import type { CatalogDeploymentOption } from '@/types/catalog'

const rows: Array<{ label: string; key: keyof CatalogDeploymentOption }> = [
  { label: 'Internet required', key: 'requires_internet' },
  { label: 'Works offline', key: 'supports_offline' },
  { label: 'Cloud synchronization', key: 'supports_cloud_sync' },
  { label: 'Multi-user', key: 'supports_multi_user' },
  { label: 'Local network support', key: 'supports_local_network' },
  { label: 'You provide the hardware', key: 'client_provides_hardware' },
  { label: 'Hardware included', key: 'hardware_included' },
]

function BoolCell({ value }: { value: unknown }) {
  if (value === true) return <Check className="mx-auto size-4 text-primary" aria-label="Yes" />
  if (value === false) return <X className="mx-auto size-4 text-ink-subtle/60" aria-label="No" />
  return <Minus className="mx-auto size-4 text-ink-subtle/60" aria-label="Not applicable" />
}

export function DeploymentComparisonTable({ deploymentOptions }: { deploymentOptions: CatalogDeploymentOption[] }) {
  return (
    <section className="border-y border-border bg-surface py-16">
      <Container className="flex flex-col gap-8">
        <SectionHeading align="left" eyebrow="Side by side" title="Compare all five ways to deploy" />

        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 border-b border-border bg-card py-3.5 pr-4 pl-5 font-bold text-ink">Capability</th>
                  {deploymentOptions.map((option) => (
                    <th key={option.slug} className="border-b border-border px-3 py-3.5 text-center font-bold whitespace-nowrap text-ink">
                      {option.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.key} className={i % 2 === 1 ? 'bg-surface' : undefined}>
                    <td
                      className={`sticky left-0 border-b border-border py-3 pr-4 pl-5 font-mono text-xs text-ink-muted ${i % 2 === 1 ? 'bg-surface' : 'bg-card'}`}
                    >
                      {row.label}
                    </td>
                    {deploymentOptions.map((option) => (
                      <td key={option.slug} className="border-b border-border px-3 py-3 text-center">
                        <BoolCell value={option[row.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
