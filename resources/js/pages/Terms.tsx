import { PageTitle } from '@/components/common/PageTitle'
import { PageHero } from '@/components/common/PageHero'
import { Container } from '@/components/common/Container'

const sections = [
  {
    title: 'Acceptance of terms',
    body: 'By accessing or using Asas Vantage, you agree to be bound by these Terms of Service. If you use the platform on behalf of a business, you confirm you have the authority to bind that business to these terms.',
  },
  {
    title: 'Accounts and subscriptions',
    body: 'You are responsible for maintaining the security of your account credentials and for all activity under your account. Subscriptions renew automatically unless cancelled before the renewal date. Offline licenses are governed by the license agreement issued at purchase.',
  },
  {
    title: 'Acceptable use',
    body: 'You agree not to misuse the platform, attempt to access it by unauthorized means, resell it without a partnership agreement, or use it to store or transmit unlawful content.',
  },
  {
    title: 'Your data',
    body: 'You retain ownership of all business data you enter into the platform. We process it only to provide the service, as described in our Privacy Policy. You can export your data at any time.',
  },
  {
    title: 'Availability and support',
    body: 'We work to keep the cloud service available around the clock, with planned maintenance announced in advance. Offline and hybrid deployments continue operating independently of cloud availability.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the maximum extent permitted by law, Asas Vantage is not liable for indirect, incidental, or consequential damages arising from use of the platform. Our total liability is limited to the amounts paid in the twelve months preceding the claim.',
  },
  {
    title: 'Changes to these terms',
    body: 'We may update these terms from time to time. Material changes will be communicated by email or in-product notice before they take effect.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms can be sent to legal@asasvantage.com.',
  },
]

export default function TermsPage() {
  return (
    <>
      <PageTitle title="Terms of Service" />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The agreement between you and Asas Vantage when you use the platform."
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

