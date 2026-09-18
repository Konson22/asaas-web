import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { faqItems } from '@/data/faq'

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 bg-surface py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="Common questions"
          description="Everything you need to know about deployment, permissions, and how MileSoftware fits your business."
        />

        <Reveal className="mx-auto w-full max-w-3xl">
          <Accordion type="single" collapsible className="rounded-card border border-border bg-background px-6">
            {faqItems.map((item) => (
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
