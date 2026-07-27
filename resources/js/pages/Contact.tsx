import type { FormEvent } from 'react'
import { useState } from 'react'
import { Check, Mail, MessageSquare, Building2 } from 'lucide-react'
import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { getPlatformApiUrl } from '@/lib/platform'

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

type FormErrors = Partial<Record<'name' | 'email' | 'company' | 'form', string>>

export default function ContactPage() {
  const [data, setData] = useState({ name: '', email: '', company: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [processing, setProcessing] = useState(false)
  const [successful, setSuccessful] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setProcessing(true)
    setErrors({})

    try {
      const response = await fetch(getPlatformApiUrl('/contact'), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const payload = (await response.json().catch(() => ({}))) as {
        message?: string
        errors?: Record<string, string[]>
      }

      if (!response.ok) {
        const nextErrors: FormErrors = {}
        if (payload.errors) {
          for (const [key, messages] of Object.entries(payload.errors)) {
            if (key === 'name' || key === 'email' || key === 'company') {
              nextErrors[key] = messages[0]
            }
          }
        }
        nextErrors.form = payload.message || 'Unable to send your request. Please try again.'
        setErrors(nextErrors)
        return
      }

      setSuccessful(true)
      setData({ name: '', email: '', company: '' })
    } catch {
      setErrors({ form: 'Unable to reach the platform. Please try again later.' })
    } finally {
      setProcessing(false)
    }
  }

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
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <channel.icon className="size-5" />
                </span>
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
            {successful ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-6" />
                </span>
                <h2 className="text-xl font-bold text-ink">Request received</h2>
                <p className="max-w-sm text-sm text-ink-muted">
                  Thanks for reaching out. Our team will contact you shortly to set up your
                  free trial.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h2 className="text-xl font-bold text-ink">Start your free trial</h2>
                  <p className="mt-1 text-sm text-ink-muted">
                    Tell us a little about your business and we'll get you set up.
                  </p>
                </div>

                {errors.form ? <p className="text-sm text-red-600">{errors.form}</p> : null}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={data.name}
                    onChange={(event) => setData((prev) => ({ ...prev, name: event.target.value }))}
                    className="h-11 rounded-lg border border-border bg-surface px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Jane Smith"
                  />
                  {errors.name ? <p className="text-sm text-red-600">{errors.name}</p> : null}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={data.email}
                    onChange={(event) => setData((prev) => ({ ...prev, email: event.target.value }))}
                    className="h-11 rounded-lg border border-border bg-surface px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="jane@company.com"
                  />
                  {errors.email ? <p className="text-sm text-red-600">{errors.email}</p> : null}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-company" className="text-sm font-semibold text-ink">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    value={data.company}
                    onChange={(event) => setData((prev) => ({ ...prev, company: event.target.value }))}
                    className="h-11 rounded-lg border border-border bg-surface px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Company Ltd."
                  />
                  {errors.company ? <p className="text-sm text-red-600">{errors.company}</p> : null}
                </div>

                <Button type="submit" variant="primary" size="lg" disabled={processing}>
                  {processing ? 'Sending…' : 'Start Free Trial'}
                </Button>
              </form>
            )}
          </Card>
        </Container>
      </section>
    </>
  )
}
