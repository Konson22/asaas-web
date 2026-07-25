export interface PricingPlan {
  id: string
  name: string
  bestFor: string
  price: string
  period: string
  features: string[]
  ctaLabel: string
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'cloud',
    name: 'Cloud Subscription',
    bestFor: 'Businesses wanting automatic updates & zero maintenance.',
    price: 'From $29',
    period: '/mo',
    features: [
      'Cloud hosting',
      'Automatic backups',
      'Seamless updates',
      'Technical support',
    ],
    ctaLabel: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: 'desktop',
    name: 'Desktop License',
    bestFor: 'Businesses operating offline or with poor internet.',
    price: 'One-time fee',
    period: 'per license',
    features: [
      'One-time purchase',
      'Offline Windows app',
      'Local database',
      'Optional annual support plan',
    ],
    ctaLabel: 'Get Desktop License',
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    bestFor: 'Multi-branch businesses requiring high resilience.',
    price: 'Custom Quote',
    period: '',
    features: [
      'Cloud + Desktop app',
      'Automatic background synchronization',
      'Multi-branch resilience',
      'Technical support',
    ],
    ctaLabel: 'Request Quote',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    bestFor: 'Large-scale operations needing maximum flexibility.',
    price: 'Custom Quote',
    period: '',
    features: [
      'Unlimited users & branches',
      'Priority customization',
      'On-premise deployment',
      'Dedicated SLA',
    ],
    ctaLabel: 'Contact Sales',
  },
]
