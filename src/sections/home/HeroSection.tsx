import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import useEmblaCarousel from 'embla-carousel-react'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe'
import { cn } from '@/lib/utils'

const heroSlides = [
  {
    id: 'desktop',
    src: '/images/hero/desktop-transparent-bg.png',
    alt: 'Asas Vantage dashboard on desktop',
  },
  {
    id: 'pos',
    src: '/images/hero/POS.png',
    alt: 'Asas Vantage point-of-sale terminal',
  },
  {
    id: 'mobile',
    src: '/images/hero/mobileapp-transparent-bg.png',
    alt: 'Asas Vantage mobile app',
  },
]

export function HeroSection() {
  const reduceMotion = useReducedMotionSafe()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncs initial embla selection on mount
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi || reduceMotion) return
    const interval = setInterval(() => emblaApi.scrollNext(), 4000)
    return () => clearInterval(interval)
  }, [emblaApi, reduceMotion])

  return (
    <section className="relative overflow-hidden bg-primary-darker">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #3A8FFF 0%, transparent 70%)' }}
      />

      <Container className="relative grid gap-16 py-12 lg:grid-cols-2 lg:items-center lg:py-16">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            One Platform. Purpose-Built Business Solutions.
          </h1>
          <p className="max-w-lg text-lg text-white/70">
            Whether you run a retail store, pharmacy, restaurant, warehouse, or service business,
            Asas Vantage delivers powerful software built specifically for your industry. Deploy
            in the cloud, as an offline desktop app, or use our hybrid solution for automatic
            synchronization — so your business never stops.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="cta" size="lg" asChild>
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Start Free Trial</Link>
            </Button>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {heroSlides.map((slide) => (
                <div key={slide.id} className="min-w-0 shrink-0 grow-0 basis-full">
                  <div className="flex h-[300px] items-center justify-center p-6 sm:h-[380px] sm:p-10">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to ${slide.alt}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  index === selectedIndex ? 'w-6 bg-accent' : 'w-1.5 bg-white/30',
                )}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
