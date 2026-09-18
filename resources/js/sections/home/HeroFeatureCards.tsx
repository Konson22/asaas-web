import { Link } from '@inertiajs/react'
import { CloudOff, MapPin, Banknote } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/common/Reveal'

const highlights = [
  {
    id: 'offline',
    title: 'Works Offline',
    description: 'Keep serving customers when the internet drops. Data syncs the moment you reconnect.',
    icon: CloudOff,
    href: '/#offline',
    tone: 'blue' as const,
  },
  {
    id: 'south-sudan',
    title: 'Built for South Sudan',
    description: 'SSP-native accounting and a support team that works where you work.',
    icon: MapPin,
    href: '/contact',
    tone: 'blue' as const,
  },
  {
    id: 'pricing',
    title: 'Start from $29/mo',
    description: 'Cloud, desktop, or hybrid — pick the infrastructure that fits your connectivity.',
    icon: Banknote,
    href: '/pricing',
    tone: 'green' as const,
  },
]

export function HeroFeatureCards() {
  return (
    <section className="relative z-20 -mt-4 pb-8 lg:-mt-10 lg:pb-4">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const card = (
              <Card className="flex h-full flex-col gap-4 p-6 transition-colors hover:border-primary/40">
                <FeatureIcon icon={item.icon} tone={item.tone} />
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm text-ink-muted">{item.description}</p>
              </Card>
            )

            return (
              <Reveal key={item.id} delay={index * 0.05}>
                {item.href.startsWith('/#') ? (
                  <a href={item.href} className="block h-full">
                    {card}
                  </a>
                ) : (
                  <Link href={item.href} className="block h-full">
                    {card}
                  </Link>
                )}
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
