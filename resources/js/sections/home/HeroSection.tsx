import { Link } from '@inertiajs/react'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2, MessageCircle, TrendingUp } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe'

const trustPoints = ['No card required', 'Live in a day', 'Cancel anytime']

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

  const float = (duration: number, delay = 0, distance = 10) =>
    reduceMotion
      ? undefined
      : {
          animate: { y: [0, -distance, 0] },
          transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' as const },
        }

  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-14 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute -top-40 right-[-8rem] h-[34rem] w-[34rem] rounded-full opacity-60 blur-3xl glow-purple" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <motion.div {...fadeUp(0)}>
            <Badge variant="accent" className="gap-2">
              <span className="size-1.5 rounded-full bg-accent" />
              Business software built for South Sudan
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Run your business — <span className="text-accent">online or off</span>.
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="max-w-lg text-lg text-ink-muted">
            Sales, inventory, and accounting in one system for retail, pharmacy, restaurant, and
            service businesses across Juba. Keep serving customers when the network drops —
            everything syncs the moment you&apos;re back.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex flex-wrap items-center gap-3">
            <Button variant="cta" size="lg" asChild>
              <Link href="/products">
                Start Free Trial
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                <MessageCircle className="size-4" />
                Talk to Sales
              </Link>
            </Button>
          </motion.div>

          <motion.ul {...fadeUp(0.2)} className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-ink-muted">
                <CheckCircle2 className="size-4 text-accent" />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="pointer-events-none absolute inset-6 rounded-[2rem] bg-primary/30 blur-3xl" />

          <div className="relative rounded-[1.75rem] border border-border bg-surface/70 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
            <div className="flex items-center gap-1.5 pb-4">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>
            <img
              src="/images/hero/desktop-transparent-bg.png"
              alt="MileSoftware dashboard on desktop"
              className="w-full object-contain"
            />
          </div>

          <motion.div
            {...float(5, 0, 10)}
            className="absolute -left-6 bottom-6 hidden w-32 rounded-2xl border border-border bg-surface p-3 shadow-xl sm:block lg:-left-10 lg:w-36"
          >
            <img
              src="/images/hero/mobileapp-transparent-bg.png"
              alt="MileSoftware mobile app"
              className="w-full object-contain"
            />
          </motion.div>

          <motion.div
            {...float(6, 0.5, 8)}
            className="absolute -right-3 top-6 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 shadow-xl sm:-right-6 sm:top-10"
          >
            <span className="flex size-2 rounded-full bg-success" />
            <span className="text-xs font-semibold text-white">Synced · offline ready</span>
          </motion.div>

          <motion.div
            {...float(5.5, 1, 8)}
            className="absolute -bottom-4 right-0 hidden items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 shadow-xl sm:flex lg:right-[-1.5rem]"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <TrendingUp className="size-4" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
                Today&apos;s sales
              </p>
              <p className="text-sm font-semibold text-white">SSP 482,300</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
