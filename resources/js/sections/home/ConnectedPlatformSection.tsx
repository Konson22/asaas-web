import { motion } from 'motion/react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { connectedFlow } from '@/data/connectedFlow'
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe'
import { viewportOnce } from '@/animations/variants'

export function ConnectedPlatformSection() {
  const reduceMotion = useReducedMotionSafe()

  return (
    <section className="bg-surface py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Connected Platform"
          title="One workflow, from purchase order to profit report"
          description="Every module feeds the next automatically — nothing re-entered, nothing out of sync."
        />

        <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-between lg:gap-0">
          {connectedFlow.map((step, index) => {
            const Icon = step.icon
            const isLast = index === connectedFlow.length - 1
            return (
              <div key={step.id} className="flex flex-col items-center gap-2 lg:flex-row">
                <motion.div
                  initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex w-40 flex-col items-center gap-3 rounded-card border border-border bg-background p-5 text-center"
                >
                  <div className="flex size-11 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{step.label}</p>
                    <p className="mt-1 text-xs text-ink-muted">{step.description}</p>
                  </div>
                </motion.div>

                {!isLast ? (
                  <>
                    <ArrowDown className="my-1 size-5 text-primary/40 lg:hidden" />
                    <ArrowRight className="mx-2 hidden size-5 shrink-0 text-primary/40 lg:block" />
                  </>
                ) : null}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
