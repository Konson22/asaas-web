import { Link } from '@inertiajs/react'
import { ArrowRight, Bot, Search, FileText, Workflow, BarChart3, Headset } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'

// Real, shipped capability descriptions (not aspirational marketing claims) — the "AI Assistant"
// entries here mirror data/features.ts's ai-assistant group, kept realistic per the brief:
// practical AI added to business systems, not a general-purpose chatbot claim.
const aiCapabilities = [
  {
    id: 'assistant',
    title: 'AI Assistants',
    description: 'Proactive business insights and plain-language report summaries.',
    icon: Bot,
  },
  {
    id: 'search',
    title: 'Intelligent Search',
    description: 'Natural-language search and reporting across your data.',
    icon: Search,
  },
  {
    id: 'forecasting',
    title: 'Business Analytics',
    description: 'Predictive sales forecasting and automated restock recommendations.',
    icon: BarChart3,
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Routine approvals, notifications, and processes that run themselves.',
    icon: Workflow,
  },
  {
    id: 'documents',
    title: 'Document Processing',
    description: 'Structured data extracted automatically from invoices and receipts.',
    icon: FileText,
  },
  {
    id: 'support',
    title: 'Customer Support Automation',
    description: 'Optional AI-powered support add-on for common customer questions.',
    icon: Headset,
  },
]

export function AiSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-24">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-4 bg-primary/50" aria-hidden="true" />
            AI-Ready Systems
          </span>
          <h2 className="max-w-xl text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-ink">
            Practical <span className="text-primary">AI</span>, built into your business systems
          </h2>
          <p className="max-w-lg text-base text-ink-muted">
            We add AI where it genuinely saves time — inside the systems you already run, not as
            a separate tool to manage.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal key={item.id} delay={index * 0.04} className="bg-card p-6">
                <div className="flex h-full flex-col gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="text-sm text-ink-muted">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Ask About AI Integration
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
