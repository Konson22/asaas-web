import { Link } from '@inertiajs/react'
import { motion } from 'motion/react'
import { ArrowRight, ShieldCheck, Users, TrendingUp } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe'

const trustItems = [
  { id: 'trusted', label: 'Trusted Partner', icon: ShieldCheck },
  { id: 'client-focused', label: 'Client-Focused Approach', icon: Users },
  { id: 'impact', label: 'Real Business Impact', icon: TrendingUp },
]

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
    <section className="relative overflow-hidden bg-navy-deep pb-24 pt-16 lg:pb-32 lg:pt-20">
      {/* Real product-mockup photo as the hero backdrop, not an illustration — the dark navy
          half reads naturally behind the copy, the device mockup carries the right side. */}
      <img
        src="/images/dashboard-devices-blue.png"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover object-right select-none"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/10"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-40 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />

      <Container className="relative flex flex-col gap-14 lg:min-h-[30rem] lg:justify-center">
        <div className="flex flex-col items-start gap-6 lg:max-w-xl">
          <motion.h1
            {...fadeUp(0.04)}
            className="text-[clamp(2.6rem,5.4vw,4.1rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            Software Built
            <br />
            Around <span className="text-cyan">Your Business.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.08)} className="max-w-xl text-lg leading-relaxed text-white/75">
            MileSoftwares builds custom business systems, web and mobile applications, SaaS
            products, automation, and AI-enabled software — designed around how your business
            actually operates, not the other way around.
          </motion.p>

          <motion.div {...fadeUp(0.12)} className="flex flex-wrap items-center gap-3">
            <Button variant="cta" size="lg" asChild>
              <Link href="/industries">
                Explore Solutions
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="onGradientOutline" size="lg" asChild>
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </motion.div>

          <motion.div {...fadeUp(0.16)} className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <span key={item.id} className="flex items-center gap-2.5 text-sm font-medium text-white/80">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan">
                    <Icon className="size-4" />
                  </span>
                  {item.label}
                </span>
              )
            })}
          </motion.div>
        </div>
      </Container>

      {/* Floating proof point over the device mockup baked into the background photo. */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_20px_40px_-20px_rgb(6_27_58_/0.35)] sm:flex lg:right-[6%]"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
          <ArrowRight className="size-4 -rotate-45" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-ink">90-day free trial</p>
          <p className="text-xs text-ink-muted">No card required</p>
        </div>
      </motion.div>

      {/* Smooth curve into the next (light) section. */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full text-background sm:h-14"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="currentColor" />
      </svg>
    </section>
  )
}
