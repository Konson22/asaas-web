import { CloudOff, Banknote, Headset, Building2 } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { FeatureIcon } from '@/components/common/FeatureIcon'

const stats = [
  { id: 'offline', label: 'Offline + Cloud', detail: 'Keep working without the network', icon: CloudOff },
  { id: 'ssp', label: 'SSP-native', detail: 'Accounting built for the Pound', icon: Banknote },
  { id: 'support', label: 'Juba-based support', detail: 'A team in your timezone', icon: Headset },
  { id: 'branches', label: 'Multi-branch', detail: 'One hub for every location', icon: Building2 },
]

export function StatsStripSection() {
  return (
    <section className="border-y border-border bg-background py-14">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-start gap-4">
              <FeatureIcon icon={stat.icon} />
              <div>
                <p className="font-semibold text-ink">{stat.label}</p>
                <p className="mt-1 text-sm text-ink-muted">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
