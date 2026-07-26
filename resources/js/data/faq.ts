export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: 'right-product',
    question: 'Which Asas product is right for my business?',
    answer:
      'It depends on how you operate. Asas POS suits retail counters, Asas Pharmacy handles compliant dispensing, Asas Restaurant covers dine-in and delivery, Asas Distribution is built for wholesale and warehousing, and Asas Services fits project- and retainer-based businesses. Tell us about your operation and we’ll point you to the right fit — or scope a custom combination.',
  },
  {
    id: 'offline',
    question: 'Can I work completely offline?',
    answer:
      'Yes. The Desktop License runs fully offline as a local Windows application with its own database, so you can keep selling and tracking stock with no internet connection at all.',
  },
  {
    id: 'hybrid-sync',
    question: 'How does the Hybrid synchronization work?',
    answer:
      'Hybrid deployments run the offline-first desktop app as the primary system of record. The moment your connection returns, transactions, stock movements, and reports sync automatically to the cloud in the background — no manual export or import required.',
  },
  {
    id: 'customization',
    question: 'Can the software be customized to my specific workflows?',
    answer:
      'Yes. Beyond the core platform, our engineering team builds bespoke workflows and approval chains, industry-specific modules, tailored reports and dashboards, and custom API integrations to match your exact operational requirements.',
  },
  {
    id: 'data-migration',
    question: 'Will you help migrate my existing data from another system?',
    answer:
      'Yes. Our professional services team handles secure data migration from Excel, CSV, and most legacy systems as part of implementation, so you launch with your historical customers, products, and balances intact.',
  },
  {
    id: 'self-hosting',
    question: 'Can I host the software on my own private server?',
    answer:
      'Yes, on-premise deployment is available under our Enterprise plan, giving large or regulated operations full control over where their data lives.',
  },
  {
    id: 'training',
    question: 'Do you provide on-site or remote staff training?',
    answer:
      'Yes. We provide comprehensive staff training both remotely and on-site as part of our professional services, so your team is confident using the system from day one.',
  },
  {
    id: 'accounting-integration',
    question: 'Can I integrate Asas Vantage with my current accounting software?',
    answer:
      'Yes. Asas Vantage connects to external accounting systems alongside payment gateways, SMS, email, and WhatsApp, so financial data stays consistent across the tools you already use.',
  },
  {
    id: 'rest-api',
    question: 'Is there a REST API available for my developers?',
    answer:
      'Yes. We provide a developer-friendly REST API and webhooks so your team can build custom integrations and automate workflows around Asas Vantage.',
  },
  {
    id: 'white-label',
    question: 'Do you offer white-label or custom-branded solutions?',
    answer:
      'Yes, white-label branding is available where applicable, typically as part of an Enterprise or custom development engagement — contact sales to discuss your requirements.',
  },
]
