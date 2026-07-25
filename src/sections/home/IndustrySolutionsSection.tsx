import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { industries } from '@/data/industries'
import { cn } from '@/lib/utils'

export function IndustrySolutionsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing initial index from the Embla instance, per Embla's own React integration docs
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="industries" className="scroll-mt-20 bg-surface py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Industries"
            title="Built for how your industry actually operates"
            description="From retail counters to pharmacy compliance, Asas Vantage adapts to your workflow — not the other way around."
            className="items-start text-left"
          />
          <div className="flex shrink-0 gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous industry"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next industry"
              onClick={() => emblaApi?.scrollNext()}
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <div
                  key={industry.id}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="flex h-full flex-col gap-4 p-6">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{industry.name}</h3>
                    <p className="text-sm text-ink-muted">{industry.description}</p>
                    <ul className="flex flex-col gap-1.5 text-sm text-ink-muted">
                      {industry.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      {industry.ctaLabel}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {industries.map((industry, index) => (
            <button
              key={industry.id}
              type="button"
              aria-label={`Go to ${industry.name}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                'h-1.5 rounded-full transition-all',
                index === selectedIndex ? 'w-6 bg-primary' : 'w-1.5 bg-border',
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
