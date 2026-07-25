import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'

const sections = [
  {
    title: 'Information we collect',
    body: 'We collect information you provide directly, such as your name, email address, and company details when you sign up for a trial, contact sales, or subscribe to updates. We also collect usage data that helps us improve the platform.',
  },
  {
    title: 'How we use your information',
    body: 'Your information is used to provide and improve our services, respond to your requests, send relevant product updates, and keep your account secure. We never sell your personal data to third parties.',
  },
  {
    title: 'Data storage and security',
    body: 'Data is stored on secure, encrypted infrastructure. Offline deployments keep your business data on your own hardware — we only receive licensing and diagnostic information you choose to share.',
  },
  {
    title: 'Cookies',
    body: 'We use essential cookies to keep the site working and optional analytics cookies to understand how visitors use it. You can control non-essential cookies through your browser settings.',
  },
  {
    title: 'Your rights',
    body: 'You may request access to, correction of, or deletion of your personal data at any time by contacting privacy@asasvantage.com. We respond to all requests within 30 days.',
  },
  {
    title: 'Contact',
    body: 'If you have questions about this policy or how we handle your data, contact us at privacy@asasvantage.com.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageTitle title="Privacy Policy" />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Asas Vantage collects, uses, and protects your information."
      />
      <section className="bg-background py-20">
        <Container className="max-w-3xl">
          <p className="text-sm text-ink-muted">Last updated: July 2026</p>
          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-ink">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">{section.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

