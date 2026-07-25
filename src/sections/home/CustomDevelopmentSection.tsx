import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/button'
import { customDevelopmentItems } from '@/data/customDevelopment'

export function CustomDevelopmentSection() {
  return (
    <section className="relative overflow-hidden bg-primary-darker py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <Container className="relative flex flex-col items-center gap-10 text-center">
        <SectionHeading
          tone="dark"
          eyebrow="Custom Development"
          title="Software That Fits You"
          description="Don’t change your business to fit the software. We’ll adapt the software to fit your business. Beyond our core platforms, our engineering team offers:"
        />

        <Reveal className="mx-auto w-full max-w-2xl">
          <ul className="grid gap-3 text-left sm:grid-cols-2">
            {customDevelopmentItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Button variant="cta" size="lg" asChild>
          <Link to="/contact">Discuss Your Project</Link>
        </Button>
      </Container>
    </section>
  )
}
