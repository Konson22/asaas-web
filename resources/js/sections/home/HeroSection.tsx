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
    <section className="relative overflow-hidden bg-navy-deep pb-20 pt-16 lg:pb-28 lg:pt-20">
      <img
        src="/images/hero/hero-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover object-bottom select-none"
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-14">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1 lg:w-[54%]">

          <motion.h1
            {...fadeUp(0.04)}
            className="text-[clamp(2.6rem,5.4vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            Your Business Works Differently.
            <br />
            <span className="text-lime">Your Software</span> Should Too.
          </motion.h1>

          <motion.p {...fadeUp(0.08)} className="max-w-xl text-lg leading-relaxed text-white/75">
            From sales and inventory to accounting, payroll and operations, MileSoftwares gives
            you business software designed around how you actually work, not the other way
            around.
          </motion.p>

          <motion.div {...fadeUp(0.12)} className="flex flex-wrap items-center gap-3">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Get a Free Demo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="onGradientOutline" size="lg" asChild>
              <Link href="/industries">Explore Solutions</Link>
            </Button>
          </motion.div>

          <motion.div {...fadeUp(0.16)} className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <span key={item.id} className="flex items-center gap-2.5 text-sm font-medium text-white/80">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-lime">
                    <Icon className="size-4" />
                  </span>
                  {item.label}
                </span>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none lg:min-w-0 lg:flex-1"
        >
          <div
            className="absolute inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/80 to-primary-darker sm:inset-8 lg:inset-x-10 lg:inset-y-6"
            aria-hidden="true"
          />
          <div className="dot-grid pointer-events-none absolute -right-3 -top-3 h-24 w-24 text-accent/40" aria-hidden="true" />
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-primary/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-4 top-10 h-28 w-28 rounded-full bg-lime/15 blur-2xl" aria-hidden="true" />
          <img
            src="/images/hero/desktop-transparent-bg.png"
            alt="MileSoftwares application dashboard"
            className="relative w-full object-contain p-6 drop-shadow-[0_24px_48px_rgb(8_11_44_/0.35)] sm:p-10"
          />

          <div className="absolute -left-3 bottom-3 hidden w-28 sm:block lg:-left-6 lg:w-32">
            <img
              src="/images/hero/mobileapp-transparent-bg.png"
              alt="MileSoftwares mobile app"
              className="w-full object-contain drop-shadow-[0_12px_24px_rgb(8_11_44_/0.3)]"
            />
          </div>

          <div className="absolute -bottom-5 right-2 hidden items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_20px_40px_-16px_rgb(8_11_44_/0.3)] sm:flex lg:right-6">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
              <ArrowRight className="size-4 -rotate-45" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">90-day free trial</p>
              <p className="text-xs text-ink-muted">No card required</p>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Smooth curve into the next (light) section, echoing the reference's rounded hero edge. */}
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
