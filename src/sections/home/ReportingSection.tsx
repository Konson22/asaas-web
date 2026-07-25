import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { ReportChart } from '@/assets/illustrations/ReportChart'

const stats = [
  { label: 'Revenue', value: '$482K', color: 'text-primary' },
  { label: 'Profit', value: '$118K', color: 'text-accent-dark' },
  { label: 'Expenses', value: '$364K', color: 'text-ink-muted' },
  { label: 'Inventory Value', value: '$210K', color: 'text-primary-darker' },
]

export function ReportingSection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Reporting"
          title="Real numbers, from every branch, in real time"
          description="No spreadsheets, no delays. Consolidated reports pull directly from sales, purchases, and payroll as they happen."
        />

        <Reveal>
          <div className="grid gap-5 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-card border border-border bg-surface p-5">
                <p className="text-sm text-ink-muted">{stat.label}</p>
                <p className={`mt-2 text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ReportChart />
        </Reveal>
      </Container>
    </section>
  )
}
