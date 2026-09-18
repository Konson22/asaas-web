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
    <section className="relative overflow-hidden bg-primary pb-20 pt-14 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
      <Container className="relative flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-8">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1 lg:w-[65%]">
          <motion.h1
            {...fadeUp(0)}
            className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Your Business Is Unique.
            <br />
            Your Software Should{' '}
            <span className="text-lime">Fit It.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.05)} className="max-w-2xl text-lg text-white/80">
            Ready business applications for pharmacies, schools, inventory operations,
            restaurants and Monitoring &amp; Evaluation — configured and customized around the
            way your organization works.
          </motion.p>

          <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center gap-3">
            <Button variant="onGradient" size="lg" asChild>
              <Link href="/products">
                Explore Our Apps
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="onGradientOutline" size="lg" asChild>
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
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none lg:min-w-0 lg:flex-1"
        >
          <div className="pointer-events-none absolute -right-6 top-8 h-32 w-32 rounded-full bg-lime/30 blur-2xl" />
          <div className="pointer-events-none absolute -left-8 bottom-16 h-40 w-40 rounded-full bg-brand-gradient opacity-25 blur-3xl" />
          <img
            src="/images/hero/desktop-transparent-bg.png"
            alt="MileSoftwares application dashboard"
            className="relative w-full object-contain"
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
