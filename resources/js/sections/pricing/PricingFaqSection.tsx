import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const items = [
  {
    id: 'subscribe-vs-own',
    question: 'What’s the difference between subscribing and buying a license?',
    answer:
      'Subscribing (Cloud Web) is billed monthly or annually and includes hosting, backups, and updates — nothing to install. Buying a license is a one-time payment for the software itself; you run it on your own hardware, and updates after the first year are covered by an optional annual maintenance fee.',
  },
  {
    id: 'switch-later',
    question: 'Can I move from a license to the cloud edition later?',
    answer:
      'Yes. Your data migrates across — most businesses do this once their internet connection becomes reliable enough to run day-to-day operations from the cloud edition.',
  },
  {
    id: 'after-trial',
    question: 'What happens after my free trial?',
    answer:
      'You’ll be asked to pick a plan to keep going. Nothing is charged automatically, and no card is required to start the trial.',
  },
]

/** Pricing-specific questions, ahead of the shared site-wide FAQ below it. */
export function PricingFaqSection() {
  return (
    <section className="bg-background py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading title="Pricing questions" description="Good to know before you choose a path." />

        <Reveal className="mx-auto w-full max-w-3xl">
          <Accordion type="single" collapsible className="rounded-card border border-border bg-card px-6">
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  )
}
