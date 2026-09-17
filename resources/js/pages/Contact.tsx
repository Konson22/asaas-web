import { Mail, MessageSquare, Building2 } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { InquiryForm } from '@/components/common/InquiryForm'
import { FeatureIcon } from '@/components/common/FeatureIcon'
import { Card } from '@/components/ui/card'

const contactChannels = [
  {
    icon: Mail,
    title: 'Email us',
    description: 'For general questions and support.',
    detail: 'hello@asaasvantage.com',
    href: 'mailto:hello@asaasvantage.com',
  },
  {
    icon: MessageSquare,
    title: 'Talk to sales',
    description: 'Get a walkthrough tailored to your business.',
    detail: 'sales@asaasvantage.com',
    href: 'mailto:sales@asaasvantage.com',
  },
  {
    icon: Building2,
    title: 'Partnerships',
    description: 'Resellers, integrators, and industry partners.',
    detail: 'partners@asaasvantage.com',
    href: 'mailto:partners@asaasvantage.com',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <PageHero
        eyebrow="Contact"
        title="Let's get your business running on one platform"
        description="Start a free trial or talk to our team about cloud, offline, and multi-branch deployments."
      />

      <section className="bg-background py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="flex flex-col gap-4">
            {contactChannels.map((channel) => (
              <Card key={channel.title} className="flex items-start gap-4 p-6">
                <FeatureIcon icon={channel.icon} />
                <div>
                  <h2 className="text-base font-bold text-ink">{channel.title}</h2>
                  <p className="mt-0.5 text-sm text-ink-muted">{channel.description}</p>
                  <a
                    href={channel.href}
                    className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    {channel.detail}
                  </a>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8">
            <InquiryForm />
          </Card>
        </Container>
      </section>
    </>
  )
}
