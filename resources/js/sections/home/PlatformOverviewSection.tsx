import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { DashboardMockup } from '@/assets/illustrations/DashboardMockup'
import { platformTabs } from '@/data/platformTabs'

export function PlatformOverviewSection() {
  return (
    <section id="platform" className="scroll-mt-20 bg-background py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Platform"
          title="Every part of your business, in sync"
          description="Switch between modules to see how sales, inventory, accounting, procurement, CRM, and workforce all share one live source of truth."
        />

        <Reveal>
          <Tabs defaultValue={platformTabs[0].id}>
            <TabsList className="mx-auto flex w-fit">
              {platformTabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <TabsTrigger key={tab.id} value={tab.id} className="gap-2">
                    <Icon className="size-4" />
                    {tab.label}
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {platformTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold text-ink sm:text-3xl">{tab.title}</h3>
                    <p className="text-base text-ink-muted">{tab.description}</p>
                    <ul className="flex flex-col gap-3">
                      {tab.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <DashboardMockup />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </Container>
    </section>
  )
}
