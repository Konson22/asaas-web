import { Link } from '@inertiajs/react'
import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe'

export function HeroSection() {
  const reduceMotion = useReducedMotionSafe()

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    // Navy → blue brand gradient — always on, so on-hero text below is fixed
    // white, not the page's navy ink token (which would go navy-on-navy).
    <section className="relative overflow-hidden bg-brand-gradient pb-20 pt-14 lg:pb-28 lg:pt-20">
      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <motion.p
            {...fadeUp(0)}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-white/90"
          >
            Business Software That Fits
          </motion.p>

          <motion.h1
            {...fadeUp(0.05)}
            className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Your Business Is Unique.
            <br />
            Your Software Should Fit It.
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="max-w-lg text-lg text-white/70">
            Ready business applications for pharmacies, schools, inventory operations,
            restaurants and Monitoring &amp; Evaluation — configured and customized around the
            way your organization works.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex flex-wrap items-center gap-3">
            <Button variant="cta" size="lg" asChild>
              <Link href="/products">
                Explore Our Apps
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-white border-white/25 hover:border-white/45 hover:bg-white/5"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="size-4" />
                Request a Demo
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
        >
          {/* The mockups already render their own device frame — no extra panel/bg behind them. */}
          <img
            src="/images/hero/desktop-transparent-bg.png"
            alt="MileSoftwares application dashboard"
            className="w-full object-contain"
          />

          <div className="absolute -left-4 bottom-4 hidden w-32 sm:block lg:-left-8 lg:w-36">
            <img
              src="/images/hero/mobileapp-transparent-bg.png"
              alt="MileSoftwares mobile app"
              className="w-full object-contain"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
